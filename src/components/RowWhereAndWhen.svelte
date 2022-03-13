<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
  import { faMapLocation } from "@fortawesome/free-solid-svg-icons/faMapLocation"
  import { faBeer } from "@fortawesome/free-solid-svg-icons/faBeer"
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
  import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord"
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { t } from "../store/locale.svelte"
  import Calendar from "./Calendar.svelte"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"

  type Day = { mapUrl: string; mapsAppUrl: string; labelStrong: string; labelKey: string }

  const days: Day[] = [
    {
      mapUrl:
        "https://maps.google.com/maps?q=TOTVS+Av.+Braz+Leme,+1000+-+Casa+Verde,+São+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapsAppUrl: "https://maps.app.goo.gl/PadW6Y4RLhYqxz796",
      labelStrong: "Sábado:",
      labelKey: "hero--location-first-line",
    },
    {
      mapUrl:
        "https://maps.google.com/maps?q=IME-USP+R.+do+Matão,+1010+-+Butantã,+São+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapsAppUrl: "https://maps.app.goo.gl/wYoFmYs39tzzmytn7",
      labelStrong: "Domingo:",
      labelKey: "hero--location-second-line",
    },
  ]
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
          <Overlay id="where-and-when--body-paragraph-1">
            <Link l10n="link-usp" href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7" />
          </Overlay>
        </div>
      </div>

      <div class="maps-grid">
        {#each days as day (day.mapUrl)}
          <div class="day-column">
            <div class="day-header">
              <Link href={day.mapsAppUrl} externalIcon>
                <strong>{day.labelStrong}</strong>
                <Localized id={day.labelKey} />
                <span class="nowrap">
                  <Fa icon={faMapLocation} />
                  Ver Mapa
                </span>
              </Link>
            </div>
            <div class="map-wrapper">
              <iframe
                src={day.mapUrl}
                title="Map of {day.labelStrong}"
                loading="lazy"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        {/each}
      </div>

      <div class="outro-rows">
        <p>
          <Fa icon={faBeer} />
          <span>
            <Overlay id="where-and-when--body-warm-up">
              <Link l10n="link-meetup" href="https://www.meetup.com/import-beer/events/311111393" />
            </Overlay>
          </span>
        </p>

        <p>
          <Fa icon={faYoutube} />
          <span>
            <Overlay id="where-and-when--body-paragraph-2">
              <Link l10n="link-youtube" href="https://www.youtube.com/@gambiconf" />
            </Overlay>
          </span>
        </p>

        <p>
          <Fa icon={faDiscord} />
          <span>
            <Overlay id="where-and-when--body-paragraph-3">
              <Link l10n="link-discord" href="https://discord.gg/P2tR4xnqfJ" />
            </Overlay>
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
    min-width: 0;
  }

  .intro-row {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .icon-wrapper {
    padding-top: 4px;
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
    min-height: 48px;
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
    margin-top: 4px;
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
