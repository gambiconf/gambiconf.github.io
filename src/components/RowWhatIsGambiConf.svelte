<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"
</script>

<div id="about">
  <Window title={t("row-what-is-gambiconf--title")}>
    <div class="content">
      <img class="icon" src={`${assets}/favicon.png`} alt="GambiConf icon" />

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-1" />
      </p>

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-2-part-1" />
        <Link l10n="link-talk-water" href="https://www.youtube.com/watch?v=UWiXNTdmL2Q">
          <Localized id="row-what-is-gambiconf--body-paragraph-2-link-water" />
        </Link>
        <Localized id="row-what-is-gambiconf--body-paragraph-2-part-2" />
        <Link l10n="link-talk-satellite" href="https://www.youtube.com/watch?v=6msRiv4PJVk">
          <Localized id="row-what-is-gambiconf--body-paragraph-2-link-satellite" />
        </Link>
        <Localized id="row-what-is-gambiconf--body-paragraph-2-part-3" />
      </p>

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-3" />
      </p>

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-4-part-1" />
        <Link l10n="link-bangbangcon" href="https://bangbangcon.com/">
          <Localized id="row-what-is-gambiconf--body-paragraph-4-link-bangbangcon" />
        </Link>
        <Localized id="row-what-is-gambiconf--body-paragraph-4-part-2" />
        <Link l10n="link-sigbovik" href="http://sigbovik.org/">
          <Localized id="row-what-is-gambiconf--body-paragraph-4-link-sigbovik" />
        </Link>
        <Localized id="row-what-is-gambiconf--body-paragraph-4-part-3" />

        <br />
        <br />

        <Link l10n="link-old-editions" href="/previous-editions">
          <Localized id="row-what-is-gambiconf--body-paragraph-4-link-old-editions" />
        </Link>
        <Localized id="row-what-is-gambiconf--body-paragraph-4-part-4" />
      </p>

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-5-part-1" />
        <Link
          l10n="link-1"
          href="https://macabeus.medium.com/gambiconf-why-do-we-need-a-new-tech-event-4ff3302cf3d"
        >
          <Localized id="row-what-is-gambiconf--body-paragraph-5-link-1" />
        </Link>
        <Localized id="row-what-is-gambiconf--body-paragraph-5-part-2" />
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
