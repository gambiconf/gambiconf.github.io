<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faMapLocation } from "@fortawesome/free-solid-svg-icons/faMapLocation"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { theme } from "../store/theme"
  import Button from "./Button.svelte"
  import Link from "./Link.svelte"
</script>

<section class="hero">
  <div class="background-overlay"></div>

  <div class="message">
    <div class="mascot">
      <img
        src={`${assets}/mambi.png`}
        alt="GambiConf's mascot. An anthropomorphic orange monkey using a neck scarf with the flag of the European Union"
      />
    </div>

    <div class="title">
      <h1>GambiConf</h1>

      <p>
        <Localized id="hero--subtitle" />
      </p>
    </div>

    <h4 class="date">
      <span>
        <Localized id="hero--date-first-line" />
      </span>

      <span>
        <Localized id="hero--date-second-line" />
      </span>
    </h4>

    <p class="location">
      <Link
        href="https://maps.app.goo.gl/PadW6Y4RLhYqxz796"
        externalIcon
        --color={$theme === "light" ? "rgba(0, 0, 0)" : "rgba(255, 255, 255)"}
        --hover-color={$theme === "light" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)"}
      >
        <strong>Sábado:</strong>

        <Localized id="hero--location-first-line" />

        <Fa icon={faMapLocation} />

        Ver Mapa
      </Link>

      <Link
        href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7"
        externalIcon
        --color={$theme === "light" ? "rgba(0, 0, 0)" : "rgba(255, 255, 255)"}
        --hover-color={$theme === "light" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)"}
      >
        <strong>Domingo:</strong>

        <Localized id="hero--location-second-line" />

        <Fa icon={faMapLocation} />

        Ver Mapa
      </Link>

      <br />

      <span>
        <Localized id="hero--location-third-line" />
      </span>
    </p>

    <div class="action">
      <Button url="/cfp">
        <Localized id="hero--cta" />
      </Button>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    height: max(55vh, 500px);
  }

  .background-overlay {
    position: absolute;

    width: 100%;
    height: 100%;

    background-image: url("/hero-background.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    mix-blend-mode: overlay;
  }

  .mascot {
    position: absolute;

    height: 50vh;
    width: 100%;

    top: 90%;
  }
  .mascot img {
    max-height: 100%;
    max-width: 100vw;
  }

  .message {
    text-align: center;

    position: relative;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    margin-bottom: 1em;
  }

  .title h1 {
    margin: 0;
  }

  .title p {
    margin-top: 0;
    opacity: 70%;
  }

  h4,
  p {
    margin: 0;
  }

  .date {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .location {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    opacity: 70%;
  }

  .action {
    margin-top: 25px;
    width: 50%;
    margin-inline: auto;
  }

  @media screen and (min-width: 768px) {
    .mascot {
      width: auto;
      height: 60vh;

      top: auto;
      right: 300px;

      margin-top: 20vh;
    }

    .message {
      max-width: 350px;

      margin-right: auto;
      margin-left: auto;
    }

    .action {
      width: 100%;
    }
  }
</style>
