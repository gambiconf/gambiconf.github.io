<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin"
  import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube"
  import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord"
  import { Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { t } from "../store/locale"
  import Calendar from "./Calendar.svelte"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"
</script>

<Window title={$t("where-and-when--title")}>
  <div class="content">
    <div class="calendar">
      <Calendar />
    </div>

    <div>
      <p>
        <Fa icon={faLocationPin} />

        <Overlay id="where-and-when--body-paragraph-1">
          <Link l10n="link" href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7" />
        </Overlay>
      </p>

      <p>
        <Fa icon={faYoutube} />

        <Overlay id="where-and-when--body-paragraph-2">
          <Link l10n="link" href="https://www.youtube.com/@gambiconf" />
        </Overlay>
      </p>

      <p>
        <Fa icon={faDiscord} />

        <Overlay id="where-and-when--body-paragraph-3">
          <Link l10n="link" href="https://discord.gg/P2tR4xnqfJ" />
        </Overlay>
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
