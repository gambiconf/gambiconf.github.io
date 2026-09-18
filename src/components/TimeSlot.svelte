<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { getGoogleCalendarLink } from "../utils/calendar"
  import SocialLinks from "./SocialLinks.svelte"
  import type { SocialLink } from "./SocialLinks.svelte"
  import Link from "./Link.svelte"

  interface Props {
    id?: string
    title: string
    members: Array<{ image: string; socialLinks: SocialLink[]; name: string; bio?: string }>
    date: string
    hours?: string
    track?: { name: string; color: string }
    duration: number
    descriptionHtml: string
  }

  let { id, title, members, date, hours = "", track, duration, descriptionHtml }: Props = $props()

  const buildStart = (day: string, time: string) => {
    const [h = "", m = "00"] = time.split(":")
    if (!h) return undefined
    return `${day}T${h.padStart(2, "0")}:${m.padStart(2, "0")}:00-03:00`
  }

  const googleCalendarLink = $derived.by(() => {
    const start = buildStart(date, hours)
    if (!start) return undefined
    return getGoogleCalendarLink({ title: `[GambiConf] ${title}`, start, duration })
  })
</script>

<article {id} class="talk" class:has-track={!!track} style:--track-color={track?.color}>
  <h6 class="talk-title">
    {title}
  </h6>

  {#if hours && googleCalendarLink}
    <p class="talk-time">
      <Localized id="event-time-slot--hours-prefix" />
      <Link href={googleCalendarLink}>{hours}</Link>
      {#if track}
        <span class="track-chip">{track.name}</span>
      {/if}
    </p>
  {/if}

  <div class="talk-description">
    {@html descriptionHtml}
  </div>

  {#each members as member (member.name)}
    <div class="speaker">
      <div class="speaker-image-column">
        <img class="speaker-image" src={member.image} alt={member.name} />
        <SocialLinks links={member.socialLinks} />
      </div>

      <div class="speaker-description-column">
        <h6 class="speaker-name">
          <Localized id="event-time-slot--by" />
          {member.name}{#if member.bio}:{/if}
        </h6>

        <p class="speaker-bio">
          {@html member.bio ?? ""}
        </p>
      </div>
    </div>
  {/each}
</article>

<style>
  .talk {
    display: flex;
    flex-direction: column;
  }

  .talk.has-track {
    border-left: 4px solid var(--track-color);
    padding-left: 1rem;
  }

  .talk-title {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  .talk-time {
    margin: 0;
    font-weight: bold;
  }

  .track-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    margin-left: 0.4em;
    padding: 0 0.6em;
    border: 1px solid var(--track-color);
    border-radius: 999px;
    background-color: color-mix(in srgb, var(--track-color) 12%, transparent);
    font-size: 0.8em;
    vertical-align: middle;
  }

  .track-chip::before {
    content: "";
    width: 0.55em;
    height: 0.55em;
    border-radius: 50%;
    background-color: var(--track-color);
  }

  .talk-description {
    margin-top: 0;
  }

  .speaker {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .speaker-image {
    min-height: 200px;
    max-height: 200px;
    min-width: 200px;
    max-width: 200px;
    object-fit: contain;
    border-radius: 100px;
    border: solid 1px #f34b2122;
  }

  .speaker-description-column {
    display: flex;
    flex: 1;
    text-align: left;
    justify-content: center;
    flex-direction: column;
    margin-left: 3rem;
  }

  .speaker-name {
    margin: 0.75rem 0 0.75rem 0;
  }

  .speaker-bio {
    margin-top: 1rem;
  }

  :global(.speaker-bio a) {
    color: var(--color, rgb(159, 91, 1));
  }

  @media screen and (min-width: 768px) {
    .talk {
      display: flex;
      gap: 15px;
    }

    .speaker-image-column {
      display: unset;
    }
  }

  @media screen and (max-width: 768px) {
    .talk-title {
      text-align: center;
      font-size: calc(var(--h6-size) + 20%);
    }

    .speaker {
      display: flex;
      flex-direction: column;
    }

    .speaker-image-column {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .speaker-description-column {
      flex: 1;
      text-align: left;
      margin-left: 0;
    }
  }
</style>
