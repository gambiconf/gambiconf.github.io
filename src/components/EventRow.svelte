<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte"
  import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons/faPhotoFilm"
  import { t } from "../store/locale"
  import Window from "./Window.svelte"
</script>

<div>
  <Window title={$t("event-row--title")}>
    <article class="content">
      <div class="video-row">
        <div class="video-container">
          <iframe
            class="video"
            src="https://www.youtube.com/embed/gHW1SRT-hOY?si=lXTd2ZGO1rAEe_Zx"
            title="YouTube video player / 2023 Sao Paulo Edition"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <div class="video-container">
          <iframe
            class="video"
            src="https://www.youtube.com/embed/c-QTni2bXgw?si=FAkRO6kO4IvjNavD"
            title="YouTube video player / 2022 EU Edition"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <a href="/album"><Fa icon={faPhotoFilm} /> {$t("event-row--go-to-album")}</a>
    </article>
  </Window>
</div>

<style>
  .content {
    padding: 25px;
  }

  .video-row {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    margin-bottom: 10px;
  }

  .video {
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    .video-row {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
