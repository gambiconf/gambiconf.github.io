<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons/faPhotoFilm"
  import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo"
  import { t } from "../store/locale.svelte"
  import Window from "./Window.svelte"
  import Link from "./Link.svelte"

  type EmbeddedVideo = { titleKey: string; src: string; iframeTitle: string }

  const videos: EmbeddedVideo[] = [
    {
      titleKey: "row-event--talks",
      src: "https://www.youtube.com/embed/videoseries?si=OB21isYlfUUr6cxd&list=PL5Vh5eXgFvesEYBZ4MMf1SE4G2VnmL-IV",
      iframeTitle: "YouTube video player / GambiConf 2025 Edition",
    },
    {
      titleKey: "row-event--panel",
      src: "https://www.youtube.com/embed/AXDhhCU5uu8?si=guj0Rx51oeP-yVcI",
      iframeTitle: "YouTube video player / GambiConf 2025 Painel",
    },
  ]
</script>

<div>
  <Window title={t("row-event--title")}>
    <article class="content">
      <div class="videos-row">
        {#each videos as video (video.src)}
          <div>
            <span>{t(video.titleKey)}</span>

            <div class="video-container">
              <iframe
                class="video"
                src={video.src}
                title={video.iframeTitle}
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        {/each}
      </div>

      <div class="links">
        <Link href="https://www.youtube.com/playlist?list=PL5Vh5eXgFvesEYBZ4MMf1SE4G2VnmL-IV">
          <Fa icon={faVideo} />
          {t("row-event--go-to-playlist")}
        </Link>

        <Link href="/album">
          <Fa icon={faPhotoFilm} />
          {t("row-event--go-to-album")}
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
    border: 0;
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
