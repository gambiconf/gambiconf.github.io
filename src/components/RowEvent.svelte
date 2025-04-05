<script lang="ts">
  import { Fa } from "svelte-fa"
  import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons/faPhotoFilm"
  import { faVideo } from "@fortawesome/free-solid-svg-icons/faVideo"
  import { t } from "../store/locale"
  import Window from "./Window.svelte"
  import Link from "./Link.svelte"
</script>

<div>
  <Window title={$t("event-row--title")}>
    <article class="content">
      <div class="video-row">
        <div class="video-container">
          <iframe
            class="video"
            src="https://www.youtube.com/embed/videoseries?si=OB21isYlfUUr6cxd&amp;list=PL5Vh5eXgFvesu0Y9izrwaxCYxH_J0iY77"
            title="YouTube video player / 2024 Edition"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <div class="links">
        <Link
          href="https://youtube.com/playlist?list=PL5Vh5eXgFvesu0Y9izrwaxCYxH_J0iY77"
          target="_blank"
          rel="noopener"
        >
          <Fa icon={faVideo} />
          {$t("event-row--go-to-playlist")}
        </Link>

        <Link href="/album">
          <Fa icon={faPhotoFilm} />
          {$t("event-row--go-to-album")}
        </Link>
      </div>
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

  .links {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    .video-row {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
