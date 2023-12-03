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
    'DSC05628': '0 0',
    'DSC05632': '0 21%',
    'DSC05636': '0 15%',
    'DSC05637': '0 15%',
    'DSC05647': '0 0',
    'DSC05648': '0 0',
    'DSC05650': '0 0',
    'DSC05656': '0 0',
    'DSC05663': '0 0',
    'DSC05666': '0 18%',
    'DSC05668': '0 13%',
    'DSC05671': '0 0',
    'DSC05690': '0 22%',
    'DSC05699': '0 22%',
    'DSC05700': '0 25%',
    'DSC05711': '0 9%',
    'DSC05721': '0 5%',
    'DSC05723': '0 12%',
    'DSC05731': '0 5%',
    'DSC05732': '0 5%',
    'DSC05734': '0 26%',
    'DSC05735': '0 0',
    'DSC05736': '0 0',
    'DSC05737': '0 0',
    'DSC05765': '0 0',
    'DSC05768': '0 0',
    'DSC05770': '0 40%',
    'DSC05781': '0 40%',
    'DSC05783': '0 7%',
    'DSC05786': '0 9%',
    'DSC05788': '0 0',
    'DSC05792': '0 0',
    'DSC05797': '0 0',
    'DSC05804': '0 0',
    'DSC05805': '0 9%',
    'DSC05808': '0 0',
    'DSC05812': '0 0',
    'DSC05814': '0 13%',
    'DSC05815': '0 18%',
    'DSC05822': '0 14%',
    'DSC05823': '0 7%',
    'DSC05825': '0 8%',
    'DSC05826': '0 0',
    'DSC05847': '0 0',
    'DSC05869': '0 37%',
    'DSC05871': '0 21%',
    'DSC05874': '0 0',
    'DSC05880': '0 0',
    'DSC05902': '0 31%',
    'DSC05913': '0 0',
    'DSC05918': '0 21%',
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
