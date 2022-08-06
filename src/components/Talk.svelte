<script lang="ts">
  import { google as getGoogleCalendarLink } from "calendar-link";
  import SocialLinks from './SocialLinks.svelte'
  import type { SocialLink } from './SocialLinks.svelte'

  export let talkTitle: string
  export let speakerName: string
  export let speakerImage: string
  export let socialLinks: SocialLink[]
  export let date: string
  export let hours: string
  export let duration: number

  const googleCalendarLink = getGoogleCalendarLink({
    title: `[GambiConf Talk] ${talkTitle}`,
    start: `${date} ${hours}:00 +0100`,
    duration: [duration, 'minutes'],
  })
</script>

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

<article class="talk">
  <div class="speaker-image-column">
    <img
      class="speaker-image"
      src={speakerImage}
      alt={speakerName}
    />

    <SocialLinks
      links={socialLinks}
    />
  </div>

  <div class="description-column">
    <h6>
      {talkTitle}
    </h6>

    <p class="time">
      At <a href={googleCalendarLink} target="_blank" rel="noopener">{hours}</a>
    </p>

    <slot name="talkDescription" />

    <h6 class="talk-speaker">
      By
      {#if speakerName[0] === '@'}
        <a href={`https://twitter.com/${speakerName}`}>{speakerName}</a>{#if $$slots.speakerBio}:{/if}
      {:else}
        {speakerName}{#if $$slots.speakerBio}:{/if}
      {/if}
    </h6>

    <slot name="speakerBio" />
  </div>
</article>
