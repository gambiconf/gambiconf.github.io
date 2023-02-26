<script lang="ts">
  import Window from "./Window.svelte"
</script>

<div id="schedule">
  <Window title="Event">
    <article class="content">
      <div class="video-row">
        <div class="video-container">
          <iframe
            class="video"
            src="https://www.youtube.com/embed/EVJZavbMThs"
            title="YouTube video player / In-person Day"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <div class="video-container">
          <iframe
            class="video"
            src="https://www.youtube.com/embed/qAiqKHG6uYM"
            title="YouTube video player / Online Day"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <a href="/album">📸 Go to the event album</a>
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
