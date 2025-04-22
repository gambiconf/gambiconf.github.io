<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons/faPhotoFilm"
  import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo"
  import { t } from "../store/locale"
  import Window from "./Window.svelte"
  import Link from "./Link.svelte"
</script>

<div>
  <Window title={$t("row-event--title")}>
    <article class="content">
      <div class="videos-row">
        <div>
          <span>{$t("row-event--talks")}</span>

          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube.com/embed/videoseries?si=OB21isYlfUUr6cxd&amp;list=PL5Vh5eXgFvesu0Y9izrwaxCYxH_J0iY77"
              title="YouTube video player / GambiConf 2024 Edition"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div>
          <span>{$t("row-event--panel")}</span>

          <div class="video-container">
            <iframe
              class="video"
              src="https://www.youtube.com/embed/Ip20X5l2ZHo?si=Ynxc-vWHdB3F0WsV"
              title="YouTube video player / Gambiconf 2024 Painel"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="links">
        <Link
          href="https://youtube.com/playlist?list=PL5Vh5eXgFvesu0Y9izrwaxCYxH_J0iY77"
          target="_blank"
          rel="noopener"
        >
          <Fa icon={faVideo} />
          {$t("row-event--go-to-playlist")}
        </Link>

        <Link href="/album">
          <Fa icon={faPhotoFilm} />
          {$t("row-event--go-to-album")}
        </Link>
      </div>
    </article>
  </Window>
</div>

<style>
  .content {
    padding: 25px;
  }

  .videos-row {
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

  .links {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    .videos-row {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
