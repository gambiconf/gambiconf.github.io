<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import Button from "./Button.svelte"
  import Link from "./Link.svelte"
</script>

<section class="hero">
  <div class="background-overlay" />

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
      <span>
        <Localized id="hero--location-first-line" />
      </span>

      <span>
        <Localized id="hero--location-second-line" />
      </span>

      <Link href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7" class="hero-link" externalIcon>
        <Localized id="hero--location-see-map" />
      </Link>
    </p>

    <div class="action">
      <Button url="https://twitter.com/gambiconf">
        <Localized id="hero--cta" />
      </Button>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    height: 55vh;
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

    top: 85%;
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
  }

  :global(.hero-link) {
    color: black !important;
    opacity: 80%;
  }

  :global(.hero-link:hover) {
    color: black !important;
    opacity: 100%;
  }

  @media screen and (min-width: 768px) {
    .mascot {
      width: auto;
      height: 60vh;

      top: auto;
      right: 230px;

      margin-top: 20vh;
    }

    .message {
      max-width: 330px;

      margin-right: auto;
      margin-left: auto;
    }
  }
</style>
