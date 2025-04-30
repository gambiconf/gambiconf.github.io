<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
  import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { t } from "../store/locale.svelte"
  import Calendar from "./Calendar.svelte"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"
</script>

<Window title={t("where-and-when--title")}>
  <div class="content">
    <div class="calendar">
      <Calendar />
    </div>

    <div>
      <p>
        <Fa icon={faLocationDot} />

        <Localized id="where-and-when--body-paragraph-1-part-1" />
        <Link l10n="link" href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7">
          <Localized id="where-and-when--body-paragraph-1-link" />
        </Link>
      </p>

      <p>
        <Fa icon={faYoutube} />

        <Localized id="where-and-when--body-paragraph-2-part-1" />
        <Link l10n="link" href="https://www.youtube.com/@gambiconf">
          <Localized id="where-and-when--body-paragraph-2-link" />
        </Link>
      </p>

      <p>
        <Fa icon={faDiscord} />

        <Localized id="where-and-when--body-paragraph-3-part-1" />
        <Link l10n="link" href="https://discord.gg/P2tR4xnqfJ">
          <Localized id="where-and-when--body-paragraph-3-link" />
        </Link>
      </p>
    </div>
  </div>
</Window>

<style>
  .content {
    display: flex;
    flex-direction: column;

    padding: 25px;
  }

  .calendar {
    align-self: center;
    margin-bottom: 15px;
  }

  .content p:first-of-type {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    .content {
      flex-direction: row;
    }

    .calendar {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
</style>
