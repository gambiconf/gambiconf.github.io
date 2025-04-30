<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { Fa, FaLayers } from "svelte-fa"
  import { faX } from "@fortawesome/free-solid-svg-icons/faX"
  import { t } from "../../store/locale.svelte"
  import Link from "../../components/Link.svelte"
  import Gallery from "../../components/Gallery.svelte"

  let selectedPhoto: string | null = $state(null)

  const focusPoint = {
    DSC06987: "0 16%",
    DSC06988: "0 4%",
    DSC06991: "0 30%",
    DSC07005: "0 3%",
    DSC07014: "0 0",
    DSC07017: "0 0",
    DSC07018: "0 35%",
    DSC07028: "0 90%",
    DSC07040: "0 28%",
    DSC07097: "0 37%",
    DSC07099: "0 36%",
    DSC07107: "0 68%",
    DSC07108: "0 68%",
    DSC07123: "0 64%",
    DSC07151: "0 2%",
    DSC07153: "0 6%",
  }

  const handlePhotoClick = (e) => {
    selectedPhoto = e.src
      .replace(/-[\w\d]+/, "")
      .replace(/.*DSC/, "https://storage.googleapis.com/gambiconf-2024-photos/DSC")
  }

  const handleClickSelectedPhotoBackground = () => {
    selectedPhoto = null
  }

  const importPhotos = import.meta.glob<{ default: string }>("../../../static/photos/*.jpg")
  let photos: string[] = $state([])

  const loadPhotos = async () => {
    const sortedPhotos = Object.keys(importPhotos).sort((a, b) => a.localeCompare(b))

    for (const path of sortedPhotos) {
      const mod = await importPhotos[path]()
      photos = [...photos, mod.default]
    }
  }

  loadPhotos()
</script>

{#if selectedPhoto}
  <div class="selected-photo-background" onclick={handleClickSelectedPhotoBackground}></div>

  <div class="selected-photo-overlay">
    <img src={selectedPhoto} />

    <div class="close" onclick={handleClickSelectedPhotoBackground}>
      <FaLayers size="2x">
        <Fa scale={0.6} icon={faX} />
      </FaLayers>
    </div>
  </div>
{/if}

<section>
  <h1>{t("album--title")}</h1>

  <span>
    <Localized id="album--description-part-1" />
    <Link l10n="link-author-1" href="https://twitter.com/agaelebe">
      <Localized id="album--description-link-author-1" />
    </Link>
    <Localized id="album--description-part-2" />
    <Link l10n="link-author-2" href="https://www.instagram.com/duckthemadquacker">
      <Localized id="album--description-link-author-2" />
    </Link>
    <Localized id="album--description-part-3" />
    <Link
      l10n="download"
      href="https://storage.googleapis.com/gambiconf-2024-photos/gambiconf-2024-photos.zip"
    >
      <Localized id="album--description-link-download" />
    </Link>
  </span>

  <div class="gallery">
    <Gallery photoClick={handlePhotoClick} {focusPoint}>
      {#each photos as photo (photo)}
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
    margin-top: 75px;
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
