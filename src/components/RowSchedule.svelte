<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import {
    schedule,
    tracks,
    resolveTranslation,
    type Speaker,
    type TrackId,
  } from "../data/schedule"
  import Window from "./Window.svelte"
  import GambiConfSocialLinks from "./GambiConfSocialLinks.svelte"
  import TimeSlot from "./TimeSlot.svelte"
  import ScheduleOverview, { type OverviewItem } from "./ScheduleOverview.svelte"

  const resolvedSchedule = $derived(
    schedule.map((entry) => {
      if (entry.kind !== "talk") return entry
      return {
        ...entry,
        title: entry.titleKey ? t(entry.titleKey) : entry.title,
        description: entry.descriptionKey ? t(entry.descriptionKey) : (entry.description ?? ""),
        members: entry.members.map(
          (m): Speaker => ({
            ...m,
            image: asset(m.image),
            bio: resolveTranslation(t, m.bio),
          }),
        ),
      }
    }),
  )

  const toMinutes = (hours: string) => {
    const [h = "0", m = "0"] = hours.split(":")
    return Number(h) * 60 + Number(m)
  }

  // Time-ordered entries
  const orderedSchedule = $derived.by(() => {
    type Entry = (typeof resolvedSchedule)[number]
    const ordered: Entry[] = []
    let day: { entry: Entry; at: number }[] = []
    let previousAt = 0

    const flushDay = () => {
      day.sort((a, b) => a.at - b.at)
      ordered.push(...day.map((item) => item.entry))
      day = []
    }

    for (const entry of resolvedSchedule) {
      if (entry.kind === "day-header") {
        flushDay()
        previousAt = 0
        ordered.push(entry)
        continue
      }

      const hours = entry.kind === "upcoming" ? undefined : entry.hours
      previousAt = hours ? toMinutes(hours) : previousAt
      day.push({ entry, at: previousAt })
    }
    flushDay()

    return ordered
  })

  const anchorFor = (index: number) => `schedule-${index}`

  const trackBadge = (id: TrackId | undefined) =>
    id ? { name: t(tracks[id].nameKey), color: tracks[id].color } : undefined

  const firstDayHeader = $derived(
    orderedSchedule.findIndex((entry) => entry.kind === "day-header"),
  )

  const firstDayOverview = $derived.by(() => {
    const items: OverviewItem[] = []
    for (const [index, entry] of orderedSchedule.entries()) {
      if (index <= firstDayHeader) continue
      if (entry.kind === "day-header") break
      if (entry.kind === "talk") {
        const { title, hours, duration, track } = entry
        items.push({
          kind: "talk",
          talk: { anchor: anchorFor(index), title, hours, duration, track },
        })
      } else if (entry.kind === "break" && entry.bodyKey) {
        items.push({ kind: "break", bodyKey: entry.bodyKey })
      }
    }
    return items
  })

  // A divider goes between consecutive entries; not after a day-header.
  const needsDividerBefore = (index: number) => {
    if (index === 0) return false
    const prev = orderedSchedule[index - 1]
    return prev.kind !== "day-header"
  }
</script>

<div id="schedule">
  <Window title={t("schedule--title")}>
    <article class="content">
      {#each orderedSchedule as entry, i (i)}
        {#if needsDividerBefore(i)}
          <div class="division-wrapper">
            <div class="division"></div>
          </div>
        {/if}

        {#if entry.kind === "day-header"}
          <h3><Localized id={entry.titleKey} /></h3>

          {#if i === firstDayHeader}
            <ScheduleOverview items={firstDayOverview} />
          {/if}
        {:else if entry.kind === "break"}
          <div class="break">
            {#if entry.bodyKey}
              <Localized id={entry.bodyKey} />
            {:else if entry.bodyHtml}
              {@html entry.bodyHtml}
            {/if}
          </div>
        {:else if entry.kind === "upcoming"}
          <div class="break">
            <Localized id="schedule--upcoming" />

            <div class="gambiconf-social-links">
              <GambiConfSocialLinks
                largeScreenRows={1}
                smallScreenRows={1}
                exclude={["github", "youtube", "substack"]}
              />
            </div>
          </div>
        {:else}
          <TimeSlot
            id={anchorFor(i)}
            title={entry.title}
            date={entry.date}
            hours={entry.hours}
            track={trackBadge(entry.track)}
            duration={entry.duration}
            members={entry.members}
            descriptionHtml={entry.description}
          />
        {/if}
      {/each}
    </article>
  </Window>
</div>

<style>
  .content {
    padding: 25px;
  }

  h3 {
    margin-bottom: 25px;
  }

  .content > h3:first-of-type {
    margin-top: 0;
  }

  .division-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 20px;
  }

  .division {
    height: 1px;
    width: 70%;
    background-color: #f34b2133;
  }

  .break {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
</style>
