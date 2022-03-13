<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"
</script>

<div id="about">
  <Window title={t("row-what-is-gambiconf--title")}>
    <div class="content">
      <img class="icon" src={asset("/favicon.png")} alt="GambiConf icon" />

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-1" />
      </p>

      <p>
        <Overlay id="row-what-is-gambiconf--body-paragraph-2">
          <Link l10n="link-water" href="https://www.youtube.com/watch?v=UWiXNTdmL2Q" />
          <Link l10n="link-satellite" href="https://www.youtube.com/watch?v=6msRiv4PJVk" />
          <Link l10n="link-flappy-bird" href="https://www.youtube.com/watch?v=MxJcbTLeck0" />
        </Overlay>
      </p>

      <p>
        <Localized id="row-what-is-gambiconf--body-paragraph-3" />
      </p>

      <p>
        <Overlay id="row-what-is-gambiconf--body-paragraph-4">
          <Link l10n="link-bangbangcon" href="https://bangbangcon.com/" />
          <Link l10n="link-sigbovik" href="http://sigbovik.org/" />
        </Overlay>

        <br />
        <br />

        <Overlay id="row-what-is-gambiconf--body-paragraph-4-old-editions">
          <Link l10n="link-old-editions" href="/previous-editions" />
        </Overlay>
      </p>

      <p>
        <Overlay id="row-what-is-gambiconf--body-paragraph-5">
          <Link
            l10n="link-presentation"
            href="https://macabeus.medium.com/gambiconf-why-do-we-need-a-new-tech-event-4ff3302cf3d"
          />
        </Overlay>
      </p>

      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/id_8emhVwiw"
          title="GambiConf Video"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
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

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin-top: 25px;
    border-radius: 8px;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
