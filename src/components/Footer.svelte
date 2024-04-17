<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { Fa, FaLayers } from "svelte-fa"
  import { assets } from "$app/paths"
  import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle"
  import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
  import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
  import { t } from "../store/locale"
</script>

<footer>
  <div class="content-wrapper">
    <div>
      <img src={`${assets}/logo.png`} alt="Logo" class="logo-image" />
    </div>

    <div class="column-content">
      <h1><Localized id="footer--site-map" /></h1>

      <div>
        <a href="/"><Localized id="footer--home" /></a>
        <a href="/#about"><Localized id="footer--about" /></a>
        <a href="/previous-editions"><Localized id="footer--previous-editions" /></a>
        <a href="/code-of-conduct"><Localized id="footer--code-of-conduct" /></a>
        <a href={$t('footer--media-kit-href', { assets }).replace(/\p{C}/gu, "")} target="_blank" rel="noopener noreferrer">
          <Localized id="footer--media-kit" />
        </a>
      </div>
    </div>

    <address class="column-content">
      <h1><Localized id="footer--contacts" /></h1>

      <div>
        <a href="mailto:mambi@gambiconf.dev" class="email">mambi@gambiconf.dev</a>

        <div class="social-links-container">
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
        </div>
      </div>
    </address>
  </div>
</footer>

<style>
  footer {
    padding-top: 10px;
    padding-bottom: 20px;
    text-align: center;
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;

    max-width: 1140px;

    margin-left: 10vw;
    margin-right: 10vw;
  }

  .logo-image {
    height: 75px;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0;
  }

  a {
    font-size: 16px;
  }

  address {
    font-style: normal;
  }

  .column-content > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .social-media-icon {
    color: #f34b21;
  }
  .social-media-icon:hover {
    filter: brightness(0.8);
  }

  @media screen and (min-width: 768px) {
    footer {
      text-align: left;
    }

    .content-wrapper {
      flex-direction: row;

      margin-right: auto;
      margin-left: auto;
    }

    .logo-image {
      height: 150px;
    }

    .social-links-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 5px;
      justify-items: center;
    }
  }
</style>
