<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import FaLayers from 'svelte-fa/src/fa-layers.svelte'
  import { assets } from '$app/paths'
  import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
  import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
  import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
  import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
</script>

<style>
  footer {
    background-color: white;
    border-top: 1px solid #ddd;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

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
    color: #0271b8
  }
  .social-media-icon:hover {
    filter: brightness(0.8);
  }

  @media screen and (min-width: 768px) {
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
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 5px;
    }
  }
</style>

<footer>
  <div class="content-wrapper">
    <div>
      <img
        src={`${assets}/logo.png`}
        alt="Logo"
        class="logo-image"
      />
    </div>

    <div class="column-content">
      <h1>Site Map</h1>

      <div>
        <a href="/">Home</a>
        <a href="/#about">About</a>
        <a href="/cfp">Call for Proposal</a>
        <a
          href="https://gambiconf.dev/2021"
          target="_blank"
          rel="noopener"
        >
          2021 Edition
        </a>
        <a href="/code-of-conduct">Code of Conduct</a>
        <a
          href="https://docs.google.com/presentation/d/1u-VWUl92qNr1i_zEcqSdXwLXpwsT6pTl6CIVoA-WrMg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Media Kit
        </a>
      </div>
    </div>

    <address class="column-content">
      <h1>Contacts</h1>

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
              <Fa
                icon={faCircle}
              />
              <Fa
                color="white"
                scale={0.6}
                icon={faTwitter}
              />
            </FaLayers>
          </a>

          <a
            href="https://www.facebook.com/GambiConf-102543485504335"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="social-media-icon"
          >
            <FaLayers size="2x">
              <Fa
                icon={faCircle}
              />
              <Fa
                color="white"
                scale={0.6}
                icon={faFacebook}
              />
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
              <Fa
                icon={faCircle}
              />
              <Fa
                color="white"
                scale={0.6}
                icon={faGithub}
              />
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
              <Fa
                icon={faCircle}
              />
              <Fa
                color="white"
                scale={0.6}
                icon={faLinkedin}
              />
            </FaLayers>
          </a>

          <a
            href="https://www.youtube.com/channel/UCnTbfjNNWxFMyqW-d2QgHYw/featured"
            target="_blank"
            rel="noopener"
            aria-label="YouTube"
            class="social-media-icon"
          >
            <FaLayers size="2x">
              <Fa
                icon={faCircle}
              />
              <Fa
                color="white"
                scale={0.6}
                icon={faYoutube}
              />
            </FaLayers>
          </a>
        </div>
      </div>
    </address>
  </div>
</footer>
