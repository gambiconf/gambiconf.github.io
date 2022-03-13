<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import { schedule, resolveTranslation, type Speaker } from "../data/schedule"
  import Window from "./Window.svelte"
  import TimeSlot from "./TimeSlot.svelte"

  const resolvedSchedule = $derived(
    schedule.map((entry) => {
      if (entry.kind !== "talk") return entry
      return {
        ...entry,
        title: entry.titleKey ? t(entry.titleKey) : entry.title,
        description:
          entry.descriptionKey ? t(entry.descriptionKey) : (entry.description ?? ""),
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

  // A divider goes between consecutive entries; not after a day-header.
  const needsDividerBefore = (index: number) => {
    if (index === 0) return false
    const prev = resolvedSchedule[index - 1]
    return prev.kind !== "day-header"
  }
</script>

<div id="schedule">
  <Window title={t("schedule--title")}>
    <article class="content">
      {#each resolvedSchedule as entry, i (i)}
        {#if needsDividerBefore(i)}
          <div class="division-wrapper">
            <div class="division"></div>
          </div>
        {/if}

        {#if entry.kind === "day-header"}
          <h3><Localized id={entry.titleKey} /></h3>
        {:else if entry.kind === "break"}
          <div class="break">
            {#if entry.bodyKey}
              <Localized id={entry.bodyKey} />
            {:else if entry.bodyHtml}
              {@html entry.bodyHtml}
            {/if}
          </div>
        {:else}
          <TimeSlot
            title={entry.title}
            date={entry.date}
            hours={entry.hours}
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
