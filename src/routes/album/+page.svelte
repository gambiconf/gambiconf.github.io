<script lang="ts">
  import { Overlay } from "@nubolab-ffwd/svelte-fluent"
  import Fa from "svelte-fa/src/fa.svelte"
  import FaLayers from "svelte-fa/src/fa-layers.svelte"
  import { faX } from "@fortawesome/free-solid-svg-icons/faX"
  import { t } from "../../store/locale"
  import Link from "../../components/Link.svelte"
  import Gallery from "../../components/Gallery.svelte"

  let selectedPhoto: string | null = null

  const focusPoint = {
    '05628.jpeg': '0 0',
    '05632.jpeg': '0 21%',
    '05636.jpeg': '0 15%',
    '05637.jpeg': '0 15%',
    '05647.jpeg': '0 0',
    '05648.jpeg': '0 0',
    '05650.jpeg': '0 0',
    '05656.jpeg': '0 0',
    '05663.jpeg': '0 0',
    '05666.jpeg': '0 18%',
    '05668.jpeg': '0 13%',
    '05671.jpeg': '0 0',
    '05690.jpeg': '0 22%',
    '05699.jpeg': '0 22%',
    '05700.jpeg': '0 25%',
    '05711.jpeg': '0 9%',
    '05721.jpeg': '0 5%',
    '05723.jpeg': '0 12%',
    '05731.jpeg': '0 5%',
    '05732.jpeg': '0 5%',
    '05734.jpeg': '0 26%',
    '05735.jpeg': '0 0',
    '05736.jpeg': '0 0',
    '05737.jpeg': '0 0',
    '05765.jpeg': '0 0',
    '05768.jpeg': '0 0',
    '05770.jpeg': '0 40%',
    '05781.jpeg': '0 40%',
    '05783.jpeg': '0 7%',
    '05786.jpeg': '0 9%',
    '05788.jpeg': '0 0',
    '05792.jpeg': '0 0',
    '05797.jpeg': '0 0',
    '05804.jpeg': '0 0',
    '05805.jpeg': '0 9%',
    '05808.jpeg': '0 0',
    '05812.jpeg': '0 0',
    '05814.jpeg': '0 13%',
    '05815.jpeg': '0 18%',
    '05822.jpeg': '0 14%',
    '05823.jpeg': '0 7%',
    '05825.jpeg': '0 8%',
    '05826.jpeg': '0 0',
    '05847.jpeg': '0 0',
    '05869.jpeg': '0 37%',
    '05871.jpeg': '0 21%',
    '05874.jpeg': '0 0',
    '05880.jpeg': '0 0',
    '05902.jpeg': '0 31%',
    '05913.jpeg': '0 0',
    '05918.jpeg': '0 21%',
  }

  const handlePhotoClick = (e) => {
    selectedPhoto = e.detail.src
      .replace(/-[\w\d]+/, "")
      .replace(/.*DSC/, "https://storage.googleapis.com/gambiconf-2023-photos/DSC")
      .replace(".jpeg", ".JPG")
  }

  const handleClickSelectedPhotoBackground = () => {
    selectedPhoto = null
  }

  const importPhotos = import.meta.glob("../../../static/photos/*.jpeg")
  let photos: string[] = []

  const loadPhotos = async () => {
    const sortedPhotos = Object.keys(importPhotos).sort((a, b) => a.localeCompare(b))

    for (const path of sortedPhotos) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mod = (await importPhotos[path]()) as any
      photos = [...photos, mod.default]
    }
  }

  loadPhotos()
</script>

{#if selectedPhoto}
  <div class="selected-photo-background" on:click={handleClickSelectedPhotoBackground} />

  <div class="selected-photo-overlay">
    <img src={selectedPhoto} />

    <div class="close" on:click={handleClickSelectedPhotoBackground}>
      <FaLayers size="2x">
        <Fa scale={0.6} icon={faX} />
      </FaLayers>
    </div>
  </div>
{/if}

<section>
  <h1>{$t('album--title')}</h1>

  <span>
    <Overlay id="album--description">
      <Link l10n="author-website" href="https://twitter.com/agaelebe" />
      <Link l10n="download" href="https://storage.googleapis.com/gambiconf-2023-photos/gambiconf-2023-photos.zip" />
    </Overlay>
  </span>

  <div class="gallery">
    <Gallery on:photoClick={handlePhotoClick} focusPoint={focusPoint}>
      {#each photos as photo}
        <img src={photo} />
      {/each}
    </Gallery>
  </div>
</section>

<style>
  :global(body) {
    background-position: center right;
    background-size: 100px;
  }

  section {
    margin: 16px;
  }

  h1 {
    margin-top: 60px;
  }

  .selected-photo-background {
    position: fixed;
    z-index: 1;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 50%);
  }

  .selected-photo-overlay {
    position: fixed;
    z-index: 2;

    display: flex;
    justify-content: center;

    width: 90vw;
    height: 90vh;
    top: 5vh;
    left: 5vw;

    background-color: white;
    filter: drop-shadow(0px 17px 17px rgba(0, 0, 0, 40%));
  }

  .selected-photo-overlay img {
    padding: 15px;
    max-width: calc(100% - 30px);
    max-height: calc(100% - 30px);
    object-fit: contain;
  }

  .close {
    position: absolute;
    right: 10px;

    cursor: pointer;

    transition: filter 0.5s;
  }

  .close:hover {
    filter: brightness(1.5);
    filter: invert(21%) sepia(0%) saturate(8%) hue-rotate(203deg) brightness(97%) contrast(79%);
  }

  .gallery {
    max-width: calc(100vw - 32px);
  }
</style>
