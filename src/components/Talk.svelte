<script lang="ts">
  import { assets } from '$app/paths'
  import SocialLinks from './SocialLinks.svelte'
  import type { SocialLink } from './SocialLinks.svelte'

  export let talkTitle: string
  export let speakerName: string
  export let speakerImage: string
  export let socialLinks: SocialLink[]
</script>

<style>
  h6 {
    margin-top: 0;
    margin-bottom: 0;
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

    <slot name="talkDescription" />

    <h6 class="talk-speaker">
      By {speakerName}:
    </h6>

    <slot name="speakerBio" />
  </div>
</article>
