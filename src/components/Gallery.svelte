<script lang="ts">
  export type GalleryPhoto = {
    src: string
    alt: string
    href?: string | null
    /** Optional CSS object-position value (e.g. "0 16%"). */
    focusPoint?: string | null
  }

  interface Props {
    photos: GalleryPhoto[]
    columnCount?: number
    imageHeight?: string
    onPhotoClick?: (photo: GalleryPhoto) => void
  }

  let { photos, columnCount = 4, imageHeight = "250px", onPhotoClick }: Props = $props()

  const columns = $derived.by(() => {
    const buckets: GalleryPhoto[][] = Array.from({ length: columnCount }, () => [])
    photos.forEach((photo, i) => {
      buckets[i % columnCount].push(photo)
    })
    return buckets
  })
</script>

<div class="root" style:--columns-count={columnCount} style:--image-height={imageHeight}>
  {#each columns as column, i (i)}
    <div class="column">
      {#each column as photo (photo.src)}
        {@const style = photo.focusPoint ? `object-position: ${photo.focusPoint}` : null}
        {#if photo.href}
          <a
            href={photo.href}
            target="_blank"
            rel="noopener noreferrer"
            onclick={(e) => {
              if (onPhotoClick) {
                e.preventDefault()
                onPhotoClick(photo)
              }
            }}
          >
            <img loading="lazy" src={photo.src} alt={photo.alt} class="img-hover" {style} />
          </a>
        {:else}
          <button
            type="button"
            class="photo-button"
            onclick={() => onPhotoClick?.(photo)}
            disabled={!onPhotoClick}
          >
            <img loading="lazy" src={photo.src} alt={photo.alt} class="img-hover" {style} />
          </button>
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  .root {
    display: grid;
    gap: 10px;

    grid-template-columns: repeat(var(--columns-count), 1fr);
  }

  .root .column {
    display: flex;
    flex-direction: column;
  }

  .root .column img,
  .root .column .photo-button {
    width: 100%;
    height: var(--image-height);
    margin-top: 10px;
    border-radius: 5px;
    object-fit: cover;
  }

  .photo-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .photo-button:disabled {
    cursor: default;
  }

  .img-hover {
    opacity: 0.9;
    transition: all 0.2s;
    cursor: pointer;
  }

  .img-hover:hover {
    z-index: 1;
    opacity: 1;
    transform: scale(1.05);
  }
</style>
