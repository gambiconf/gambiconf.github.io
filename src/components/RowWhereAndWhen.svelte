<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
  import { faMapLocation } from "@fortawesome/free-solid-svg-icons/faMapLocation"
  import { faBeer } from "@fortawesome/free-solid-svg-icons/faBeer"
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
  import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { t } from "../store/locale.svelte"
  import Calendar from "./Calendar.svelte"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"

  const maps = {
    saturday:
      "https://maps.google.com/maps?q=TOTVS+Av.+Braz+Leme,+1000+-+Casa+Verde,+São+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed",
    sunday:
      "https://maps.google.com/maps?q=IME-USP+R.+do+Matão,+1010+-+Butantã,+São+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed",
  }
</script>

<Window title={t("where-and-when--title")}>
  <div class="content">
    <div class="calendar-column">
      <Calendar />
    </div>

    <div class="info-column">
      <div class="intro-row">
        <div class="icon-wrapper">
          <Fa icon={faLocationDot} />
        </div>
        <div>
          <Localized id="where-and-when--body-paragraph-1-part-1" />
        </div>
      </div>

      <div class="maps-grid">
        <div class="day-column">
          <div class="day-header">
            <Link href="https://maps.app.goo.gl/PadW6Y4RLhYqxz796" externalIcon>
              <strong>Sábado:</strong>
              <Localized id="hero--location-first-line" />
              <span class="nowrap">
                <Fa icon={faMapLocation} />
                Ver Mapa
              </span>
            </Link>
          </div>
          <div class="map-wrapper">
            <iframe
              src={maps.saturday}
              title="Map of TOTVS location"
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="day-column">
          <div class="day-header">
            <Link href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7" externalIcon>
              <strong>Domingo:</strong>
              <Localized id="hero--location-second-line" />
              <span class="nowrap">
                <Fa icon={faMapLocation} />
                Ver Mapa
              </span>
            </Link>
          </div>
          <div class="map-wrapper">
            <iframe
              src={maps.sunday}
              title="Map of USP location"
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="outro-rows">
        <p>
          <Fa icon={faBeer} />
          <span>
            <Localized id="where-and-when--body-warm-up" />
            <Link l10n="link" href="https://www.meetup.com/import-beer/events/311111393">
              <Localized id="where-and-when--body-warm-up-link" />
            </Link>
          </span>
        </p>

        <p>
          <Fa icon={faYoutube} />
          <span>
            <Localized id="where-and-when--body-paragraph-2-part-1" />
            <Link l10n="link" href="https://www.youtube.com/@gambiconf">
              <Localized id="where-and-when--body-paragraph-2-link" />
            </Link>
          </span>
        </p>

        <p>
          <Fa icon={faDiscord} />
          <span>
            <Localized id="where-and-when--body-paragraph-3-part-1" />
            <Link l10n="link" href="https://discord.gg/P2tR4xnqfJ">
              <Localized id="where-and-when--body-paragraph-3-link" />
            </Link>
          </span>
        </p>
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
    gap: 20px;
    min-width: 0; /* Prevent flex item from overflowing */
  }

  .intro-row {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .icon-wrapper {
    padding-top: 4px; /* Align icon with first line of text */
  }

  .maps-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .day-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .day-header {
    min-height: 48px; /* Align heights if text wraps differently */
  }

  .nowrap {
    white-space: nowrap;
  }

  .map-wrapper {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-color, #ddd);
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  .outro-rows p {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin: 10px 0;
  }

  .outro-rows p :global(svg) {
    margin-top: 4px; /* Align icons */
    flex-shrink: 0;
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

    .maps-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
