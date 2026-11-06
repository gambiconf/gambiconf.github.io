<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays"
  import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
  import { faMapLocation } from "@fortawesome/free-solid-svg-icons/faMapLocation"
  import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy"
  import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
  import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord"
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { t } from "../store/locale.svelte"
  import { getGoogleCalendarLink } from "../utils/calendar"
  import { copyToClipboard } from "../utils/clipboard"
  import Calendar from "./Calendar.svelte"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"

  const addToCalendarDay1Url = getGoogleCalendarLink({
    title: "GambiConf 2026 — Dia 1 (Palestras)",
    start: "2026-11-28T09:00:00-03:00",
    end: "2026-11-28T19:00:00-03:00",
    location: "IME-USP",
  })

  const addToCalendarDay2Url = getGoogleCalendarLink({
    title: "GambiConf 2026 — Dia 2 (Workshops)",
    start: "2026-11-29T13:00:00-03:00",
    end: "2026-11-29T19:00:00-03:00",
    location: "IME-USP",
  })

  const fullAddress = "Rua do Matão, 1010 - Cidade Universitária, São Paulo - SP, 05508-090"
  const addressSplitAt = fullAddress.lastIndexOf(" ") + 1
  const addressHead = fullAddress.slice(0, addressSplitAt)
  const addressTail = fullAddress.slice(addressSplitAt)

  let copied = $state(false)
  let copiedTimeout: ReturnType<typeof setTimeout> | undefined

  async function copyAddress() {
    if (!(await copyToClipboard(fullAddress))) return

    copied = true
    clearTimeout(copiedTimeout)
    copiedTimeout = setTimeout(() => {
      copied = false
    }, 2000)
  }
</script>

<Window title={t("where-and-when--title")}>
  <div class="content">
    <div class="calendar-column">
      <Calendar />
    </div>

    <div class="info-column">
      <div class="info-row">
        <div class="icon-wrapper">
          <Fa icon={faCalendarDays} />
        </div>
        <div class="schedule-text">
          <p class="schedule-intro"><Localized id="where-and-when--schedule-intro" /></p>
          <p class="schedule-bullet">
            <Localized id="where-and-when--schedule-bullet-1" />
            <Link class="calendar-link-inline" href={addToCalendarDay1Url}>
              (<Localized id="where-and-when--add-to-calendar-inline" />)
            </Link>
          </p>
          <p class="schedule-bullet">
            <Localized id="where-and-when--schedule-bullet-2" />
            <Link class="calendar-link-inline" href={addToCalendarDay2Url}>
              (<Localized id="where-and-when--add-to-calendar-inline" />)
            </Link>
          </p>
        </div>
      </div>

      <div class="info-row">
        <div class="icon-wrapper">
          <Fa icon={faLocationDot} />
        </div>
        <div class="location-col">
          <span class="full-address">
            {addressHead}
            <span class="nowrap">
              {addressTail}
              <button
                type="button"
                class="copy-address"
                onclick={copyAddress}
                aria-label={t("where-and-when--copy-address")}
                title={t("where-and-when--copy-address")}
              >
                <Fa icon={copied ? faCheck : faCopy} />
                <span class="copied-bubble" class:visible={copied} aria-hidden="true">
                  <Localized id="where-and-when--address-copied" />
                </span>
                <span class="visually-hidden" aria-live="polite">
                  {#if copied}
                    <Localized id="where-and-when--address-copied" />
                  {/if}
                </span>
              </button>
            </span>
          </span>
          <span class="map-links">
            <Fa icon={faMapLocation} />
            <span><Localized id="where-and-when--see-map" /></span>
            <Link href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7">Google Maps</Link>
            <span class="map-links-separator" aria-hidden="true">·</span>
            <Link href="https://www.openstreetmap.org/way/154079142">OpenStreetMap</Link>
          </span>
        </div>
      </div>

      <div class="info-row">
        <div class="icon-wrapper">
          <Fa icon={faYoutube} />
        </div>
        <span>
          <Overlay id="where-and-when--body-paragraph-3">
            <Link l10n="link-youtube" href="https://www.youtube.com/@gambiconf" />
          </Overlay>
        </span>
      </div>

      <div class="info-row">
        <div class="icon-wrapper">
          <Fa icon={faDiscord} />
        </div>
        <span>
          <Overlay id="where-and-when--body-paragraph-4">
            <Link l10n="link-discord" href="https://discord.gg/P2tR4xnqfJ" />
          </Overlay>
        </span>
      </div>
    </div>
  </div>
</Window>

<style>
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
  }

  .calendar-column {
    display: flex;
    justify-content: center;
  }

  .info-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
  }

  .info-row {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  .icon-wrapper {
    flex-shrink: 0;
    width: 20px;
    display: flex;
    justify-content: center;
    padding-top: 3px;
  }

  /* Schedule (dates) */

  .schedule-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .schedule-intro {
    margin: 0;
  }

  .schedule-bullet {
    margin: 0;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 6px;
  }

  :global(.calendar-link-inline) {
    font-size: 0.8em;
    white-space: nowrap;
    opacity: 0.75;
  }

  /* Location */

  .location-col {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .map-links {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
  }

  .map-links-separator {
    opacity: 0.6;
  }

  .nowrap {
    white-space: nowrap;
  }

  .copy-address {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
    padding: 2px 4px;
    border: none;
    border-radius: 4px;
    background: none;
    font: inherit;
    font-size: 0.85em;
    vertical-align: baseline;
    cursor: pointer;
    transition: color 0.4s;
  }

  .copied-bubble {
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    padding: 2px 8px;
    border-radius: 4px;
    background: #ff8915;
    color: #fff;
    font-size: 0.85em;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .copied-bubble.visible {
    opacity: 1;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  :global(body[theme="light"]) .copy-address {
    color: rgb(159, 91, 1);
  }
  :global(body[theme="dark"]) .copy-address {
    color: rgb(199 162 127);
  }

  .copy-address:hover {
    color: #ff8915;
  }

  @media screen and (min-width: 768px) {
    .content {
      flex-direction: row;
      align-items: flex-start;
    }

    .calendar-column {
      flex-shrink: 0;
      margin-right: 15px;
    }

    .info-column {
      flex-grow: 1;
    }
  }
</style>
