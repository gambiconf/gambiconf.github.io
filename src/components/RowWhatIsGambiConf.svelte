<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale"
  import Link from "./Link.svelte"
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
          <Link l10n="link-talk-water" href="https://www.youtube.com/watch?v=UWiXNTdmL2Q" />
          <Link l10n="link-talk-satellite" href="https://www.youtube.com/watch?v=UWiXNTdmL2Q" />
        </Overlay>
      </p>

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-3" />
      </p>

      <p>
        <Overlay id="row-what-is-gambiconf--body-paragraph-4">
          <Link l10n="link-bangbangcon" href="https://bangbangcon.com/" />
          <Link l10n="link-sigbovik" href="http://sigbovik.org/" />
          <Link l10n="link-gambiconf-2021" href="https://gambiconf.dev/2021" />
          <Link l10n="link-gambiconf-2022" href="https://gambiconf.dev/2022" />
        </Overlay>
      </p>

      <p>
        <Overlay id="row-what-is-gambiconf--body-paragraph-5">
          <Link
            l10n="link-1"
            href="https://macabeus.medium.com/gambiconf-why-do-we-need-a-new-tech-event-4ff3302cf3d"
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
