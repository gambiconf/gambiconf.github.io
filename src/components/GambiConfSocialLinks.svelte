<script lang="ts">
  import { Fa, FaLayers } from "svelte-fa"
  import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle"
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
  import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
  import { faBluesky } from "@fortawesome/free-brands-svg-icons/faBluesky"
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
  import { faNewspaper } from "@fortawesome/free-solid-svg-icons/faNewspaper"

  interface Props {
    largeScreenRows?: number
    smallScreenRows?: number
    exclude?: Array<
      "bluesky" | "twitter" | "github" | "linkedin" | "instagram" | "youtube" | "substack"
    >
  }

  let { largeScreenRows = 3, smallScreenRows = 1, exclude = [] }: Props = $props()

  const totalIcons = 7 - exclude.length
</script>

<div
  class="social-links-container"
  style="--small-screen-cols: {Math.ceil(
    totalIcons / smallScreenRows,
  )}; --large-screen-cols: {Math.ceil(totalIcons / largeScreenRows)}"
>
  {#if !exclude || !exclude.includes("bluesky")}
    <a
      href="https://bsky.app/profile/gambiconf.dev"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Bluesky"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faCircle} />
        <Fa color="white" scale={0.6} icon={faBluesky} />
      </FaLayers>
    </a>
  {/if}

  {#if !exclude || !exclude.includes("twitter")}
    <a
      href="https://twitter.com/gambiconf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faCircle} />
        <Fa color="white" scale={0.6} icon={faTwitter} />
      </FaLayers>
    </a>
  {/if}

  {#if !exclude || !exclude.includes("github")}
    <a
      href="https://github.com/gambiconf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faCircle} />
        <Fa color="white" scale={0.6} icon={faGithub} />
      </FaLayers>
    </a>
  {/if}

  {#if !exclude || !exclude.includes("linkedin")}
    <a
      href="https://www.linkedin.com/company/gambiconf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faCircle} />
        <Fa color="white" scale={0.6} icon={faLinkedin} />
      </FaLayers>
    </a>
  {/if}

  {#if !exclude || !exclude.includes("instagram")}
    <a
      href="https://www.instagram.com/gambiconf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faCircle} />
        <Fa color="white" scale={0.6} icon={faInstagram} />
      </FaLayers>
    </a>
  {/if}

  {#if !exclude || !exclude.includes("youtube")}
    <a
      href="https://www.youtube.com/@gambiconf/videos"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faCircle} />
        <Fa color="white" scale={0.6} icon={faYoutube} />
      </FaLayers>
    </a>
  {/if}

  {#if !exclude || !exclude.includes("substack")}
    <a
      href="https://gambiconf.substack.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Substack"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faCircle} />
        <Fa color="white" scale={0.6} icon={faNewspaper} />
      </FaLayers>
    </a>
  {/if}
</div>

<style>
  .social-media-icon {
    color: #f34b21;
  }
  .social-media-icon:hover {
    filter: brightness(0.8);
  }

  .social-links-container {
    display: grid;
    grid-template-columns: repeat(var(--small-screen-cols), 1fr);
    grid-row-gap: 5px;
    justify-items: center;
  }

  @media screen and (min-width: 768px) {
    .social-links-container {
      grid-template-columns: repeat(var(--large-screen-cols), 1fr);
    }
  }
</style>
