<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { getGoogleCalendarLink } from "../utils/calendar"
  import SocialLinks from "./SocialLinks.svelte"
  import type { SocialLink } from "./SocialLinks.svelte"
  import Link from "./Link.svelte"

  interface Props {
    title: string;
    members: Array<{ image: string; socialLinks: SocialLink[]; name: string; bio?: string }>;
    date: string;
    hours?: string;
    duration: number;
    hasParagraph?: boolean;
    children?: import('svelte').Snippet;
  }

  let {
    title,
    members,
    date,
    hours = '',
    duration,
    hasParagraph = false,
    children
  }: Props = $props();

  const googleCalendarLink = getGoogleCalendarLink({
    title: `[GambiConf] ${title}`,
    start: `${date} ${hours}:00 -0300`,
    duration,
  })
</script>

<article class="talk">
  <h6 class="talk-title">
    {title}
  </h6>

  {#if hours}
    <p class="talk-time">
      <Localized id="event-time-slot--hours-prefix"/> <Link href={googleCalendarLink}>{hours}</Link>
    </p>
  {/if}

  {#if hasParagraph}
    <div class="talk-description">
      {@render children?.()}
    </div>
  {:else}
    <p class="talk-description">
      {@render children?.()}
    </p>
  {/if}
  
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
  
  .talk-title {
    margin-top: 0.50rem;
    margin-bottom: 0;
  }

  .talk-time {
    margin: 0;
    font-weight: bold;
  }

  .talk-description {
    margin-top: 0;
   }

  .speaker {
    display: flex;
    margin-top: 0.50rem;
    margin-bottom: 0.50rem;
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
