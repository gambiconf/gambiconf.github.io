<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { Fa, FaLayers } from "svelte-fa"
  import { faX } from "@fortawesome/free-solid-svg-icons/faX"
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft"
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
  import { t } from "../../store/locale.svelte"
  import Link from "../../components/Link.svelte"
  import Gallery from "../../components/Gallery.svelte"

  let selectedPhoto: string | null = $state(null)
  let isImageLoading = $state(false)
  let columnCount = $state(4)

  const updateColumnCount = () => {
    columnCount = window.innerWidth <= 768 ? 2 : 4
  }

  $effect(() => {
    updateColumnCount()
  })

  const focusPoint = {
    "dia3-05-DSC08225.jpg": "0 16%",
    "dia3-05-DSC08239.jpg": "90% 0",
    "dia3-05-DSC08344.jpg": "0 0",
    "dia3-05-DSC08349.jpg": "0 0",
    "dia3-05-DSC08350.jpg": "20% 0",
    "dia3-05-DSC08351.jpg": "15% 0",
    "dia3-05-IMG_0961.jpg": "0 40%",
    "dia3-05-IMG_1038.jpg": "bottom",
    "dia3-05-IMG_1041.jpg": "0 15%",
    "dia3-05-IMG_1062.jpg": "left",
    "dia3-05-IMG_1082.jpg": "bottom",
    "dia3-05-IMG_1102.jpg": "left",
  }

  const handlePhotoClick = (e) => {
    const srcFilename = e.src
      .split("/")
      .pop()
      .split("?")[0]
      .replace(/\.[\w\d-]{8}\.jpg/, ".jpg")

    selectedPhoto = `https://storage.googleapis.com/gambiconf-2025-photos/${srcFilename}`
    isImageLoading = true
  }

  const handleClickSelectedPhotoBackground = () => {
    selectedPhoto = null
    isImageLoading = false
  }

  const handlePreviousPhoto = () => {
    if (!selectedPhoto) return

    const currentIndex = photos.findIndex((photo) => {
      const photoFilename = photo
        .split("/")
        .pop()
        ?.split("?")[0]
        .replace(/\.[\w\d-]{8}\.jpg/, ".jpg")
      return selectedPhoto.includes(photoFilename || "")
    })

    if (currentIndex !== -1) {
      const previousIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1
      const previousPhoto = photos[previousIndex]
      const srcFilename = previousPhoto
        .split("/")
        .pop()
        ?.split("?")[0]
        .replace(/\.[\w\d-]{8}\.jpg/, ".jpg")
      selectedPhoto = `https://storage.googleapis.com/gambiconf-2025-photos/${srcFilename}`
      isImageLoading = true
    }
  }

  const handleNextPhoto = () => {
    if (!selectedPhoto) return

    const currentIndex = photos.findIndex((photo) => {
      const photoFilename = photo
        .split("/")
        .pop()
        ?.split("?")[0]
        .replace(/\.[\w\d-]{8}\.jpg/, ".jpg")
      return selectedPhoto.includes(photoFilename || "")
    })

    if (currentIndex !== -1) {
      const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1
      const nextPhoto = photos[nextIndex]
      const srcFilename = nextPhoto
        .split("/")
        .pop()
        ?.split("?")[0]
        .replace(/\.[\w\d-]{8}\.jpg/, ".jpg")
      selectedPhoto = `https://storage.googleapis.com/gambiconf-2025-photos/${srcFilename}`
      isImageLoading = true
    }
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (!selectedPhoto) return

    if (e.key === "Escape") {
      selectedPhoto = null
      isImageLoading = false
    } else if (e.key === "ArrowRight") {
      handleNextPhoto()
    } else if (e.key === "ArrowLeft") {
      handlePreviousPhoto()
    }
  }

  const handleImageLoad = () => {
    isImageLoading = false
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

<svelte:window onkeydown={handleKeydown} onresize={updateColumnCount} />

{#if selectedPhoto}
  <div
    class="selected-photo-background"
    onclick={handleClickSelectedPhotoBackground}
    onkeydown={handleClickSelectedPhotoBackground}
    role="button"
    tabindex="0"
  ></div>

  <div class="selected-photo-overlay">
    {#if isImageLoading}
      <div class="skeleton-loader"></div>
    {/if}
    <img
      src={selectedPhoto}
      alt={t("album--photo-alt")}
      onload={handleImageLoad}
      style:display={isImageLoading ? "none" : "block"}
    />

    <div
      class="nav-button prev"
      onclick={handlePreviousPhoto}
      onkeydown={handlePreviousPhoto}
      role="button"
      tabindex="0"
    >
      <FaLayers size="2x">
        <Fa scale={0.8} icon={faChevronLeft} />
      </FaLayers>
    </div>

    <div
      class="nav-button next"
      onclick={handleNextPhoto}
      onkeydown={handleNextPhoto}
      role="button"
      tabindex="0"
    >
      <FaLayers size="2x">
        <Fa scale={0.8} icon={faChevronRight} />
      </FaLayers>
    </div>

    <div
      class="close"
      onclick={handleClickSelectedPhotoBackground}
      onkeydown={handleClickSelectedPhotoBackground}
      role="button"
      tabindex="0"
    >
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
    <Link l10n="link-author-2" href="https://www.linkedin.com/in/barrence">
      <Localized id="album--description-link-author-3" />
    </Link>
    <Localized id="album--description-part-4" />
    <Link
      l10n="download"
      href="https://storage.googleapis.com/gambiconf-2025-photos/gambiconf-2025-photos.zip"
    >
      <Localized id="album--description-link-download" />
    </Link>
  </span>

  <div class="gallery">
    <Gallery {columnCount} photoClick={handlePhotoClick} {focusPoint}>
      {#each photos as photo (photo)}
        <img src={photo} loading="lazy" alt={t("album--photo-alt")} />
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

  .skeleton-loader {
    position: absolute;
    width: 80%;
    height: 80%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  .close {
    position: absolute;
    right: 10px;

    cursor: pointer;

    filter: drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 2px white);

    translate: 20px -10px;
  }

  .nav-button {
    position: absolute;
    top: 50%;

    cursor: pointer;

    filter: drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 2px white);
  }

  .nav-button.prev {
    translate: -20px;
    left: 0;
  }

  .nav-button.next {
    translate: 20px;
    right: 0;
  }

  .gallery {
    max-width: calc(100vw - 32px);
  }
</style>
