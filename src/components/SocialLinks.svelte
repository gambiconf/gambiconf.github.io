<script context="module" lang="ts">
  export type SocialLink = {
    type: "github" | "linkedin" | "twitch" | "twitter" | "facebook" | "instagram" | "hackerNews" | "bluesky" | "googleScholar" | "website"
    url: string
  }
</script>

<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte"
  import FaLayers from "svelte-fa/src/fa-layers.svelte"
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
  import { faTwitch } from "@fortawesome/free-brands-svg-icons/faTwitch"
  import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook"
  import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
  import { faHackerNews } from "@fortawesome/free-brands-svg-icons/faHackerNews"
  import { faSquare } from "@fortawesome/free-solid-svg-icons/faSquare"
  import { faEarth } from "@fortawesome/free-solid-svg-icons/faEarth"
  import { faMortarBoard } from "@fortawesome/free-solid-svg-icons/faMortarBoard"
  import type { IconDefinition } from "@fortawesome/fontawesome-common-types"

  export let links: SocialLink[]

  const mapLinkTypeToIcon: { [link in SocialLink["type"]]: IconDefinition } = {
    github: faGithub,
    linkedin: faLinkedin,
    twitch: faTwitch,
    twitter: faTwitter,
    facebook: faFacebook,
    instagram: faInstagram,
    hackerNews: faHackerNews,
    bluesky: faSquare,
    website: faEarth,
    googleScholar: faMortarBoard,
  }
</script>

<div class="social-links">
  {#each links as link}
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.type}
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa scale={0.6} icon={mapLinkTypeToIcon[link.type]} />
      </FaLayers>
    </a>
  {/each}
</div>

<style>
  .social-links {
    display: flex;
    justify-content: space-around;
  }

  .social-media-icon {
    color: #f34b21;
  }
  .social-media-icon:hover {
    filter: brightness(0.8);
  }

  @media screen and (min-width: 768px) {
    .social-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 5px;
    }
  }
</style>
