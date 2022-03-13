<script lang="ts">
  import { Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { Fa, FaLayers } from "svelte-fa"
  import { faX } from "@fortawesome/free-solid-svg-icons/faX"
  import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft"
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight"
  import { asset } from "$app/paths"
  import { t } from "../../store/locale.svelte"
  import Link from "../../components/Link.svelte"
  import Gallery, { type GalleryPhoto } from "../../components/Gallery.svelte"
  import { photoFilenames } from "../../data/photos"

  const GCS_BASE = "https://storage.googleapis.com/gambiconf-2025-photos"

  const getFilename = (url: string) => url.split("/").pop()?.split("?")[0] ?? ""

  const focusPoint: Record<string, string> = {
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

  const photos: GalleryPhoto[] = photoFilenames.map((filename) => ({
    src: asset(`/photos/${filename}`),
    alt: t("album--photo-alt"),
    focusPoint: focusPoint[filename] ?? null,
  }))

  let isMobile = $state(false)
  const columnCount = $derived(isMobile ? 2 : 4)

  const updateColumnCount = () => {
    isMobile = window.innerWidth <= 768
  }

  $effect(() => {
    updateColumnCount()
  })

  let selectedPhoto: string | null = $state(null)
  let isImageLoading = $state(false)

  const findCurrentIndex = (photoUrl: string) =>
    photos.findIndex((p) => photoUrl.includes(getFilename(p.src)))

  const showPhotoAtIndex = (index: number) => {
    const photo = photos[index]
    if (!photo) return
    selectedPhoto = `${GCS_BASE}/${getFilename(photo.src)}`
    isImageLoading = true
  }

  const handlePhotoClick = (photo: GalleryPhoto) => {
    selectedPhoto = `${GCS_BASE}/${getFilename(photo.src)}`
    isImageLoading = true
  }

  const handleClose = () => {
    selectedPhoto = null
    isImageLoading = false
  }

  const handlePreviousPhoto = () => {
    const current = selectedPhoto
    if (!current) return
    const index = findCurrentIndex(current)
    if (index === -1) return
    showPhotoAtIndex(index === 0 ? photos.length - 1 : index - 1)
  }

  const handleNextPhoto = () => {
    const current = selectedPhoto
    if (!current) return
    const index = findCurrentIndex(current)
    if (index === -1) return
    showPhotoAtIndex(index === photos.length - 1 ? 0 : index + 1)
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (!selectedPhoto) return
    if (e.key === "Escape") handleClose()
    else if (e.key === "ArrowRight") handleNextPhoto()
    else if (e.key === "ArrowLeft") handlePreviousPhoto()
  }
</script>

<svelte:window onkeydown={handleKeydown} onresize={updateColumnCount} />

{#if selectedPhoto}
  <button
    type="button"
    class="selected-photo-background"
    onclick={handleClose}
    aria-label={t("album--close-photo")}
  ></button>

  <div class="selected-photo-overlay">
    {#if isImageLoading}
      <div class="skeleton-loader"></div>
    {/if}
    <img
      src={selectedPhoto}
      alt={t("album--photo-alt")}
      onload={() => (isImageLoading = false)}
      style:display={isImageLoading ? "none" : "block"}
    />

    <button
      type="button"
      class="nav-button prev"
      onclick={handlePreviousPhoto}
      aria-label={t("album--previous-photo")}
    >
      <FaLayers size="2x">
        <Fa scale={0.8} icon={faChevronLeft} />
      </FaLayers>
    </button>

    <button
      type="button"
      class="nav-button next"
      onclick={handleNextPhoto}
      aria-label={t("album--next-photo")}
    >
      <FaLayers size="2x">
        <Fa scale={0.8} icon={faChevronRight} />
      </FaLayers>
    </button>

    <button type="button" class="close" onclick={handleClose} aria-label={t("album--close-photo")}>
      <FaLayers size="2x">
        <Fa scale={0.6} icon={faX} />
      </FaLayers>
    </button>
  </div>
{/if}

<section>
  <h1>{t("album--title")}</h1>

  <p>
    <Overlay id="album--description">
      <Link l10n="link-author-1" href="https://twitter.com/agaelebe" />
      <Link l10n="link-author-2" href="https://www.instagram.com/duckthemadquacker" />
      <Link l10n="link-author-3" href="https://www.linkedin.com/in/barrence" />
      <Link
        l10n="link-download"
        href="https://storage.googleapis.com/gambiconf-2025-photos/gambiconf-2025-photos.zip"
      />
    </Overlay>
  </p>

  <div class="gallery">
    <Gallery {photos} {columnCount} onPhotoClick={handlePhotoClick} />
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
    border: none;
    cursor: pointer;
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

  .close,
  .nav-button {
    position: absolute;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: inherit;

    filter: drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 2px white);
  }

  .close {
    right: 10px;
    translate: 20px -10px;
  }

  .nav-button {
    top: 50%;
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
