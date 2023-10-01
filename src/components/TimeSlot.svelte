<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { getGoogleCalendarLink } from "../utils/calendar"
  import SocialLinks from "./SocialLinks.svelte"
  import type { SocialLink } from "./SocialLinks.svelte"

  export let title: string
  export let members: Array<{ name: string; bio?: string }>
  export let image: string
  export let socialLinks: SocialLink[]
  export let date: string
  export let hours: string = ''
  export let duration: number

  const googleCalendarLink = getGoogleCalendarLink({
    title: `[GambiConf] ${title}`,
    start: `${date} ${hours}:00 -0300`,
    duration,
  })
</script>

<article class="talk">
  <div class="speaker-image-column">
    <img class="speaker-image" src={image} alt="Speaker" />

    <SocialLinks links={socialLinks} />
  </div>

  <div class="description-column">
    <h6>
      {title}
    </h6>

    {#if hours}
      <p class="time">
        <Localized id="event-time-slot--hours-prefix"/> <a href={googleCalendarLink} target="_blank" rel="noopener">{hours}</a>
      </p>
    {/if}

    <p>
      <slot />
    </p>

    {#each members as { name, bio }}
      <h6 class="talk-speaker">
        <Localized id="event-time-slot--by"/>
        {name}{#if bio}:{/if}
      </h6>

      <p>
        {@html bio ?? ""}
      </p>
    {/each}
  </div>
</article>

<style>
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .time {
    margin: 0;
    font-weight: bold;
  }

  .speaker-image-column {
    display: flex;
    flex-direction: column;
  }
  .speaker-image-column > img {
    align-self: center;
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

  .description-column > *:first-child {
    margin-top: 0;
  }

  .description-column > *:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    .talk {
      display: flex;
      gap: 25px;
    }

    .speaker-image-column {
      display: unset;
    }
  }
</style>
