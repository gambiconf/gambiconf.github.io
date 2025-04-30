<script lang="ts">
  import { t } from "../../store/locale.svelte"
  import Gallery from "../../components/Gallery.svelte"
  import Window from "../../components/Window.svelte"
  import { assets } from "$app/paths"
</script>

<div class="page">
  <Window title={t("previous-editions--title")}>
    <div class="gallery">
      <Gallery columnCount={2} imageHeight="350px">
        <a href="https://gambiconf.dev/2024">
          <img src={`${assets}/previous-editions/e2024.jpg`} />
        </a>

        <a href="https://gambiconf.dev/2023">
          <img src={`${assets}/previous-editions/e2023.jpg`} />
        </a>

        <a href="https://gambiconf.dev/2022">
          <img src={`${assets}/previous-editions/e2022.jpg`} />
        </a>

        <a href="https://gambiconf.dev/2021">
          <img src={`${assets}/previous-editions/e2021.jpg`} />
        </a>
      </Gallery>
    </div>
  </Window>
</div>

<style>
  :global(body) {
    background-position: center right;
    background-size: 100px;
  }

  .page {
    margin-top: 100px;
    margin-bottom: 30px;
  }

  .gallery {
    max-width: calc(100vw - 32px);

    padding: 16px;
  }
</style>
