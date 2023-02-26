<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte"
  import FaLayers from "svelte-fa/src/fa-layers.svelte"
  import { faX } from "@fortawesome/free-solid-svg-icons/faX"
  import Gallery from "../../components/Gallery.svelte"

  let selectedPhoto: string = null

  const handlePhotoClick = (e) => {
    selectedPhoto = e.detail.src
      .replace(/-[\w\d]+/, "")
      .replace(/.*BD/, "https://storage.googleapis.com/gambiconf-eu-2022-photos/BD")
      .replace(".jpeg", ".jpg")
  }

  const handleClickSelectedPhotoBackground = () => {
    selectedPhoto = null
  }

  const importPhotos = import.meta.glob("../../../static/photos/*.jpeg")
  let photos = []

  const loadPhotos = async () => {
    const sortedPhotos = Object.keys(importPhotos).sort((a, b) => a.localeCompare(b))

    for (const path of sortedPhotos) {
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
  <h1>Photos</h1>

  <span>
    Photos taken by <a href="https://www.octavioscholz.com/" target="_blank" rel="noopener"
      >Octavio Scholz</a
    >. Photographer sponsored by
    <a href="https://www.reaktor.com" target="_blank" rel="noopener">Reaktor</a>.
  </span>

  <div class="gallery">
    <Gallery on:photoClick={handlePhotoClick}>
      {#each photos as photo}
        <img src={photo} />
      {/each}
    </Gallery>
  </div>
</section>

<style>
  :global(body) {
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
      url("/mambi-icon-oulined.png");
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
