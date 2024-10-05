<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
  import { faHotel } from "@fortawesome/free-solid-svg-icons/faHotel"
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
        <Fa icon={faLocationDot} />

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

      <p>
        <Fa icon={faHotel} />

        <Overlay id="where-and-when--body-paragraph-4">
          <Link l10n="link-villa-sophia" href="https://www.tripadvisor.com/Hotel_Review-g303631-d12949580-Reviews-Villa_Sophia-Sao_Paulo_State_of_Sao_Paulo.html" />
          <Link l10n="link-address" href="https://maps.app.goo.gl/93M9R4EnVC3hvZSD6" />
          <Link l10n="link-telephone" href="https://wa.me/5511947280323" />
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
