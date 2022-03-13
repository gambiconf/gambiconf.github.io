<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faMapLocation } from "@fortawesome/free-solid-svg-icons/faMapLocation"
  import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import { themeState } from "../store/theme.svelte"
  import Button from "./Button.svelte"
  import Link from "./Link.svelte"

  const eventStart = new Date("2025-11-29T09:00:00-03:00").getTime()

  const computeTimeLeft = () => {
    const distance = Math.max(0, eventStart - Date.now())
    return {
      days: Math.floor(distance / 86_400_000),
      hours: Math.floor((distance / 3_600_000) % 24),
      minutes: Math.floor((distance / 60_000) % 60),
      seconds: Math.floor((distance / 1_000) % 60),
    }
  }

  let timeLeft = $state(computeTimeLeft())

  $effect(() => {
    const id = setInterval(() => {
      timeLeft = computeTimeLeft()
    }, 1000)
    return () => clearInterval(id)
  })

  const eventStarted = $derived(
    timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0,
  )

  const linkColors = $derived(
    themeState.value === "light"
      ? { color: "rgba(0, 0, 0)", hover: "rgba(0, 0, 0, 0.7)" }
      : { color: "rgba(255, 255, 255)", hover: "rgba(255, 255, 255, 0.7)" },
  )
</script>

<section class="hero">
  <div class="background-overlay"></div>

  <div class="message">
    <div class="mascot">
      <img src={asset("/mambi.png")} alt="GambiConf's mascot. A cute golden lion tamarin" />
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

    {#if !eventStarted}
      <h4 class="countdown" aria-live="polite">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </h4>
    {/if}

    <p class="location">
      <Link
        href="https://maps.app.goo.gl/PadW6Y4RLhYqxz796"
        externalIcon
        --color={linkColors.color}
        --hover-color={linkColors.hover}
      >
        <strong>Sábado:</strong>

        <Localized id="hero--location-first-line" />

        <Fa icon={faMapLocation} />

        Ver Mapa
      </Link>

      <Link
        href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7"
        externalIcon
        --color={linkColors.color}
        --hover-color={linkColors.hover}
      >
        <strong>Domingo:</strong>

        <Localized id="hero--location-second-line" />

        <Fa icon={faMapLocation} />

        Ver Mapa
      </Link>

      <br />

      <span>
        <Fa icon={faLocationDot} />
        <Localized id="hero--location-third-line" />
      </span>
    </p>

    <div class="action">
      <Button
        url="https://www.eventbrite.com.br/e/gambiconf-5a-edicao-29-de-novembro-na-totvs-30-de-novembro-na-usp-tickets-1333243771009?utm-campaign=website"
        newPage
      >
        <Localized id="hero--cta" />
      </Button>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    min-height: max(55vh, 500px);
    padding-bottom: 140px;
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
    position: relative;
    z-index: 0;

    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: clamp(2rem, 10vw, 5rem);

    pointer-events: none;
    order: 10;
  }
  .mascot img {
    width: min(360px, 80vw);
    height: auto;
    object-fit: contain;
  }

  .message {
    text-align: center;

    position: relative;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 6rem;
  }

  .title {
    margin-bottom: 1em;
    margin-top: 1rem;
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

  .countdown {
    margin-bottom: 10px;
    font-variant-numeric: tabular-nums;
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

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    section {
      height: max(55vh, 500px);
      padding-bottom: 0;
    }

    .mascot {
      position: absolute;
      order: initial;

      width: auto;
      height: 48vh;

      top: auto;
      bottom: -20px;
      right: clamp(120px, 20vw, 300px);

      margin-top: 0;

      display: block;
    }
    .mascot img {
      width: auto;
      height: 100%;
      max-width: none;
    }

    .message {
      max-width: 350px;

      margin-right: auto;
      margin-left: auto;
      justify-content: center;
      padding-top: 0;
    }

    .action {
      width: 100%;
    }
  }
</style>
