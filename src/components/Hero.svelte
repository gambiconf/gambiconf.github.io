<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays"
  import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import { themeState } from "../store/theme.svelte"
  import Button from "./Button.svelte"
  import Link from "./Link.svelte"

  const eventStart = new Date("2026-11-28T09:00:00-03:00").getTime()

  const computeTimeLeft = () => {
    const distance = Math.max(0, eventStart - Date.now())
    return {
      months: Math.floor(distance / 2_592_000_000),
      days: Math.floor(distance / 86_400_000) % 30,
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

    <p class="event-date">
      <Fa icon={faCalendarDays} />
      <Localized id="hero--date" />
    </p>

    {#if !eventStarted}
      <div class="countdown" aria-live="polite">
        <div class="countdown-cell">
          <span class="countdown-value">{timeLeft.months}</span>
          <span class="countdown-label">
            <Localized id="hero--countdown-months" args={{ count: timeLeft.months }} />
          </span>
        </div>
        <div class="countdown-cell">
          <span class="countdown-value">{timeLeft.days}</span>
          <span class="countdown-label">
            <Localized id="hero--countdown-days" args={{ count: timeLeft.days }} />
          </span>
        </div>
      </div>
    {/if}

    <p class="location">
      <Link
        class="location-address"
        href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7"
        --color={linkColors.color}
        --hover-color={linkColors.hover}
      >
        <strong
          ><Fa icon={faLocationDot} /> USP - Campus Butantã / IME - Bloco B<br />São Paulo,
          Brasil</strong
        >
      </Link>
    </p>

    <div class="action">
      <Button url="https://www.tickettailor.com/events/gambiconf/2226768" newPage>
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
    margin-top: clamp(0.75rem, 4vw, 2rem);

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
    padding-top: 1.5rem;
  }

  .title {
    margin-bottom: 1em;
    margin-top: 1rem;
  }

  .title h1 {
    margin: 0;
    font-size: clamp(2.5rem, 9vw, 4rem);
    line-height: 1.05;
  }

  .title p {
    margin-top: 0;
    font-size: clamp(1.1rem, 3.5vw, 1.5rem);
    line-height: 1.35;
    opacity: 70%;
  }

  h4,
  p {
    margin: 0;
  }

  .event-date {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-bottom: 14px;
    font-size: clamp(1rem, 3.2vw, 1.3rem);
    font-weight: 600;
    opacity: 0.85;
  }

  .countdown {
    display: flex;
    justify-content: center;
    gap: 8px;

    margin-bottom: 14px;
  }

  .countdown-cell {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 72px;
    padding: 10px 12px;

    border: 1px solid color-mix(in oklab, currentColor 18%, transparent);
    border-radius: 8px;
    background: color-mix(in oklab, currentColor 6%, transparent);
  }

  .countdown-value {
    font-size: clamp(1.7rem, 6vw, 2.2rem);
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .countdown-label {
    margin-top: 4px;

    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    opacity: 0.7;
  }

  .location {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    opacity: 70%;
  }

  .location :global(.location-address) {
    width: fit-content;
    margin-inline: auto;
  }

  .action {
    margin-top: 25px;
    width: 50%;
    margin-inline: auto;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media screen and (max-width: 767px) {
    section {
      min-height: auto;
      padding-bottom: 36px;
    }

    .message {
      padding-top: 0.5rem;
    }

    .mascot {
      margin-top: 0;
    }

    .title {
      margin-top: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .action {
      margin-top: 14px;
      width: min(92%, 420px);
    }
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
      max-width: 360px;

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
