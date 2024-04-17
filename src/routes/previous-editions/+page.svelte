<script lang="ts">
  import { t } from "../../store/locale"
  import Gallery from "../../components/Gallery.svelte"
  import Window from "../../components/Window.svelte"
  import { assets } from "$app/paths"

  const handlePhotoClick = (e) => {
    const selectedPhoto = e.detail.src
    if (selectedPhoto.includes('2023')) {
      window.open('https://gambiconf.dev/2023')
    } else if (selectedPhoto.includes('2022')) {
      window.open('https://gambiconf.dev/2022')
    } else if (selectedPhoto.includes('2021')) {
      window.open('https://gambiconf.dev/2021')
    }
  }
</script>

<div class="page">
  <Window title={$t('previous-editions--title')}>
    <div class="gallery">
      <Gallery columnCount={3} on:photoClick={handlePhotoClick}>
        <img src={`${assets}/previous-editions/e2023.jpg`} />
        <img src={`${assets}/previous-editions/e2022.jpg`} />
        <img src={`${assets}/previous-editions/e2021.jpg`} />
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
