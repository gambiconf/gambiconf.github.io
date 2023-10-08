<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import Button from "./Button.svelte"
  import Link from "./Link.svelte"
  import { useLazyImage as lazyImage } from 'svelte-lazy-image';
</script>

<section>
  <img class="hero-background" src="/hero-background.png" alt="hero-background" use:lazyImage>

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

    <span class="date">
      <span>
        <Localized id="hero--date-first-line" />
      </span>

      <span>
        <Localized id="hero--date-second-line" />
      </span>
    </span>

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
      <Button url="https://www.eventbrite.com/e/gambiconf-terceira-edicao-tickets-732314732077">
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

  .hero-background{
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
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

  p {
    margin: 0;
  }

  .date {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 33.6px;
    font-weight: bold;
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
    color: black;
    opacity: 80%;
  }

  :global(.hero-link:hover) {
    color: black;
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
