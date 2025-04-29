<script lang="ts">
  import { Fa, FaLayers } from "svelte-fa"
  import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle"
  import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import Window from "./Window.svelte"
</script>

<Window title={t("call-for-proposal--title")}>
  <div class="content">
    <div class="row">
      <div class="icon">
        <img height="128px" src={`${assets}/writing-on-paper.png`} />
      </div>

      <div>
        <p>
          <Localized id="call-for-proposal--body-paragraph-1" />
        </p>

        <p>
          <Localized id="call-for-proposal--body-paragraph-2" />
        </p>
      </div>
    </div>

    <div class="social-links-container">
      <div>
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
      </div>
    </div>
  </div>
</Window>

<style>
  .content {
    padding: 25px;
  }

  .icon {
    float: left;
    margin-right: 15px;
  }

  p {
    margin-top: 0;
  }

  .social-links-container {
    display: flex;
    justify-content: center;
  }

  .social-media-icon {
    color: #f34b21;
  }
  .social-media-icon:hover {
    filter: brightness(0.8);
  }

  @media screen and (min-width: 768px) {
    .icon {
      float: unset;
    }

    .row {
      display: flex;
    }
  }
</style>
