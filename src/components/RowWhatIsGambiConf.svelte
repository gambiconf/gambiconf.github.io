<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale"
  import Window from "./Window.svelte"
</script>

<div id="about">
  <Window title={$t("row-what-is-gambiconf--title")}>
    <div class="content">
      <img class="icon" src={`${assets}/favicon.png`} alt="GambiConf icon" />

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-1" />
      </p>

      <p>
        <Overlay id="row-what-is-gambiconf--body-paragraph-2">
          <a
            data-l10n-name="link-talk-water"
            href="https://www.youtube.com/watch?v=UWiXNTdmL2Q"
            target="_blank"
            rel="noopener"
          />

          <a
            data-l10n-name="link-talk-satellite"
            href="https://www.youtube.com/watch?v=6msRiv4PJVk"
            target="_blank"
            rel="noopener"
          />
        </Overlay>
      </p>

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-3" />
      </p>

      <p>
        <Overlay id="row-what-is-gambiconf--body-paragraph-4">
          <a
            data-l10n-name="link-bangbangcon"
            href="https://bangbangcon.com/"
            target="_blank"
            rel="noopener"
          />

          <a
            data-l10n-name="link-sigbovik"
            href="http://sigbovik.org/"
            target="_blank"
            rel="noopener"
          />

          <a
            data-l10n-name="link-gambiconf-2021"
            href="https://gambiconf.dev/2021"
            target="_blank"
            rel="noopener"
          />

          <a
            data-l10n-name="link-gambiconf-2022"
            href="https://gambiconf.dev/2022"
            target="_blank"
            rel="noopener"
          />
        </Overlay>
      </p>

      <p>
        <Overlay id="row-what-is-gambiconf--body-paragraph-5">
          <a
            data-l10n-name="link-1"
            href="https://macabeus.medium.com/gambiconf-why-do-we-need-a-new-tech-event-4ff3302cf3d"
            target="_blank"
            rel="noopener"
          />
        </Overlay>
      </p>
    </div>
  </Window>
</div>

<style>
  .content {
    padding: 25px;
  }

  .icon {
    float: left;
  }

  .content p:first-of-type {
    margin-top: 0;
  }

  .content p:last-of-type {
    margin-bottom: 0;
  }
</style>
