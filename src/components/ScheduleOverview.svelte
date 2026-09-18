<script lang="ts" module>
  import type { TrackId } from "../data/schedule"

  export type OverviewTalk = {
    anchor: string
    title: string
    hours: string
    duration: number
    track?: TrackId
  }

  export type OverviewItem = { kind: "talk"; talk: OverviewTalk } | { kind: "break"; bodyKey: string }
</script>

<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { t } from "../store/locale.svelte"
  import { tracks } from "../data/schedule"

  interface Props {
    items: OverviewItem[]
  }

  let { items }: Props = $props()

  // The overview is a real timetable: one grid row per SLOT_MINUTES, every
  // block sized by its own duration. Talks starting a few minutes apart then
  // read as the small offsets they are, instead of each forcing its own row.
  const SLOT_MINUTES = 5
  const BREAK_SLOT_HEIGHT = "5px"

  type Column = "main" | "parallel" | "wide"

  type TalkBlock = {
    kind: "talk"
    talk: OverviewTalk
    column: Column
    start: number
    end: number
    leadsTrack: boolean
  }

  type BreakBlock = { kind: "break"; bodyKey: string; start: number; end: number }

  const toMinutes = (hours: string) => {
    const [h = "0", m = "0"] = hours.split(":")
    return Number(h) * 60 + Number(m)
  }

  const formatTime = (minute: number) =>
    `${Math.floor(minute / 60)}:${String(minute % 60).padStart(2, "0")}`

  const layout = $derived.by(() => {
    const talkBlocks: TalkBlock[] = []
    for (const item of items) {
      if (item.kind !== "talk") continue
      const start = toMinutes(item.talk.hours)
      talkBlocks.push({
        kind: "talk",
        talk: item.talk,
        column: item.talk.track ? tracks[item.talk.track].column : "wide",
        start,
        end: start + item.talk.duration,
        leadsTrack: false,
      })
    }
    talkBlocks.sort((a, b) => a.start - b.start)

    // A talk running past the start of the next one in the same room would
    // overlap it on the grid, so its block stops where the next one starts.
    // A talk with no track (the gates opening) takes both rooms.
    for (const column of ["main", "parallel"] as const) {
      const inColumn = talkBlocks.filter((b) => b.column === column || b.column === "wide")
      let previousTrack: TrackId | undefined
      inColumn.forEach((block, index) => {
        const next = inColumn[index + 1]
        if (next && block.end > next.start) block.end = next.start
        if (column === "parallel" && block.column === "parallel") {
          block.leadsTrack = block.talk.track !== previousTrack
          previousTrack = block.talk.track
        }
      })
    }

    // Breaks fill the gap their neighbours leave open.
    const breakBlocks: BreakBlock[] = []
    items.forEach((item, index) => {
      if (item.kind !== "break") return
      const before = items.slice(0, index).filter((i) => i.kind === "talk")
      const after = items.slice(index + 1).filter((i) => i.kind === "talk")
      if (!before.length || !after.length) return
      const start = Math.max(...before.map((i) => toMinutes(i.talk.hours) + i.talk.duration))
      const end = Math.min(...after.map((i) => toMinutes(i.talk.hours)))
      if (end > start) breakBlocks.push({ kind: "break", bodyKey: item.bodyKey, start, end })
    })

    const blocks = [...talkBlocks, ...breakBlocks].sort((a, b) => a.start - b.start)
    if (!blocks.length) return undefined

    const dayStart = Math.min(...blocks.map((b) => b.start))
    const dayEnd = Math.max(...blocks.map((b) => b.end))
    const slotCount = Math.ceil((dayEnd - dayStart) / SLOT_MINUTES)

    // Break slots are shorter than talk slots: an hour of lunch does not need
    // an hour of empty page.
    const rowSizes = Array.from({ length: slotCount }, (_, index) => {
      const minute = dayStart + index * SLOT_MINUTES
      const insideBreak = breakBlocks.some((b) => minute >= b.start && minute < b.end)
      return insideBreak ? `minmax(${BREAK_SLOT_HEIGHT}, auto)` : "minmax(var(--slot), auto)"
    })

    // The column headers take the first row, so the slots start at row 2.
    const rowOf = (minute: number) => Math.round((minute - dayStart) / SLOT_MINUTES) + 2
    const spanOf = (block: { start: number; end: number }) =>
      Math.max(1, Math.round((block.end - block.start) / SLOT_MINUTES))

    return {
      blocks,
      gridTemplateRows: `auto ${rowSizes.join(" ")}`,
      rowOf,
      spanOf,
      ruler: [...new Set(talkBlocks.map((b) => b.start))]
        .sort((a, b) => a - b)
        .map((minute) => ({ row: rowOf(minute), label: formatTime(minute) })),
    }
  })
</script>

{#if layout}
  <div
    class="timetable"
    style:grid-template-rows={layout.gridTemplateRows}
    role="table"
    aria-label={t("schedule--overview-label")}
  >
    <div class="head main-head" style:--track-color={tracks.auditorium.color}>
      <Localized id="schedule--track-auditorium" />
    </div>
    <div
      class="head parallel-head"
      style:--morning-color={tracks["grandes-gambiarras"].color}
      style:--afternoon-color={tracks.typed.color}
    >
      <Localized id="schedule--overview-parallel-tracks" />
    </div>

    {#each layout.ruler as mark (mark.label)}
      <span class="ruler" style:--row-start={mark.row}>{mark.label}</span>
    {/each}

    {#each layout.blocks as block, i (i)}
      {#if block.kind === "break"}
        <div
          class="block break-block"
          style:--row-start={layout.rowOf(block.start)}
          style:--row-span={layout.spanOf(block)}
        >
          <Localized id={block.bodyKey} />
        </div>
      {:else}
        <a
          class="block talk-block {block.column}"
          href="#{block.talk.anchor}"
          style:--row-start={layout.rowOf(block.start)}
          style:--row-span={layout.spanOf(block)}
          style:--track-color={block.talk.track ? tracks[block.talk.track].color : undefined}
        >
          <span class="block-meta">
            <span class="block-time">{block.talk.hours}</span>
            {#if block.talk.track}
              <span class="block-track" class:lead={block.leadsTrack}>
                {t(tracks[block.talk.track].nameKey)}
              </span>
            {/if}
          </span>
          <span class="block-title">{block.talk.title}</span>
        </a>
      {/if}
    {/each}
  </div>
{/if}

<style>
  /* Phones get the same blocks stacked in time order; the grid below takes
     over once there is room for two rooms side by side. */
  .timetable {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 2rem;
    font-size: 0.85em;
    line-height: 1.25;
  }

  .head {
    display: none;
    font-weight: 600;
    padding-bottom: 0.3rem;
    border-bottom: 3px solid var(--track-color, currentColor);
  }

  .parallel-head {
    border-image: linear-gradient(to right, var(--morning-color) 50%, var(--afternoon-color) 50%) 1;
  }

  .ruler {
    display: none;
    grid-column: 1;
    grid-row: var(--row-start);
    align-self: start;
    text-align: right;
    font-size: 0.85em;
    font-variant-numeric: tabular-nums;
    opacity: 0.75;
  }

  .block {
    display: block;
    padding: 0.3rem 0.5rem;
    border-radius: 6px;
    border-left: 4px solid var(--track-color, transparent);
    background-color: color-mix(in srgb, var(--track-color, currentColor) 10%, transparent);
    color: inherit;
    text-decoration: none;
  }

  .talk-block:hover .block-title {
    text-decoration: underline;
  }

  .break-block {
    text-align: center;
    font-style: italic;
    background-color: transparent;
    border: 1px dashed color-mix(in srgb, currentColor 30%, transparent);
  }

  .block-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    font-size: 0.85em;
  }

  .block-time {
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .block-track {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    /* Pulls the track color towards the text color, keeping it legible in both themes. */
    color: color-mix(in srgb, var(--track-color) 70%, currentColor);
  }

  @media screen and (min-width: 768px) {
    .timetable {
      --slot: 10px;

      display: grid;
      grid-template-columns: 3rem 1fr 1fr;
      column-gap: 8px;
      row-gap: 0;
    }

    .head,
    .ruler {
      display: block;
    }

    .main-head {
      grid-column: 2;
      grid-row: 1;
    }

    .parallel-head {
      grid-column: 3;
      grid-row: 1;
    }

    .block {
      grid-row: var(--row-start) / span var(--row-span);
      margin-bottom: 3px;
    }

    .main {
      grid-column: 2;
    }

    .parallel {
      grid-column: 3;
    }

    .wide,
    .break-block {
      grid-column: 2 / span 2;
    }

    /* The ruler already carries the time and the header names the room, so a
       block only repeats the track name where it starts one. */
    .block-time,
    .block-track:not(.lead) {
      display: none;
    }
  }
</style>
