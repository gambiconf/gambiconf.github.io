<script lang="ts">
  import { Fa, FaLayers } from "svelte-fa"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
</script>

<div class="break">
  <Localized id="schedule--upcoming" />

  <div class="social-links-container">
    <a
      href="https://twitter.com/gambiconf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faTwitter} />
      </FaLayers>
    </a>

    <a
      href="https://www.linkedin.com/company/gambiconf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Linkedin"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faLinkedin} />
      </FaLayers>
    </a>

    <a
      href="https://www.instagram.com/gambiconf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      class="social-media-icon"
    >
      <FaLayers size="2x">
        <Fa icon={faInstagram} />
      </FaLayers>
    </a>
  </div>
</div>

<style>
  .social-media-icon {
    color: #f34b21;
  }
  .social-media-icon:hover {
    filter: brightness(0.8);
  }
</style>