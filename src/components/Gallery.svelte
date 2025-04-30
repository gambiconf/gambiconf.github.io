<script lang="ts">
  import { onMount } from "svelte"

  interface Column {
    href: string | null
    src: string
    alt: string
    class: string
    style: string | null
  }
  
  interface ImageFocusPoint {
    [key: string]: string
  }

  interface Props {
    focusPoint?: ImageFocusPoint;
    columnCount?: number;
    imageHeight?: string;
    photoClick?: (args: { src: string }) => void;
    children?: import('svelte').Snippet;
  }

  let {
    focusPoint = {},
    columnCount = 4,
    imageHeight = "250px",
    photoClick,
    children
  }: Props = $props();

  let slotHolder = $state<HTMLDivElement | null>(null)
  let columns = $state<Column[][]>([])

  const handleClickPhoto = (e) => {
    photoClick?.({ src: e.target.src })
  }

  const draw = () => {
    if (!slotHolder) return

    const nodes = Array.from(slotHolder.childNodes).filter(
      (child) =>
        child instanceof HTMLElement &&
        (child.tagName === "IMG" ||
        (child.tagName === "A" && child.childNodes[0] instanceof HTMLElement && child.childNodes[0].tagName === "IMG")),
    ) as HTMLElement[]

    columns = new Array(columnCount).fill([])

    for (let i = 0; i < nodes.length; i++) {
      const idx = i % columnCount

      const href = nodes[i].tagName === "A" ? (nodes[i] as HTMLAnchorElement).href : null
      const photo = nodes[i].tagName === "IMG" ? nodes[i] : nodes[i].childNodes[0]
      const { src, alt, className } = photo as HTMLImageElement

      const imageFocusPoint = focusPoint[src?.match(/DSC\d+/)?.toString() ?? ""]
      const style = imageFocusPoint ? `object-position: ${imageFocusPoint}` : null

      columns[idx] = [...columns[idx], { src, alt, class: className, style, href }]
    }
  }

  onMount(() => {
    draw()

    const observer = new MutationObserver(draw)
    observer.observe(slotHolder as Node, { childList: true })

    return () => observer.disconnect()
  })
</script>

<div class="slot-holder" bind:this={slotHolder}>
  {@render children?.()}
</div>

<div class="root" style="--columns-count: {columnCount}; --image-height: {imageHeight}">
  {#each columns as column, i (i)}
    <div class="column">
      {#each column as img (img.src)}
        {#if img.href}
          <a href={img.href} target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              src={img.src}
              alt={img.alt}
              onclick={handleClickPhoto}
              class="img-hover column"
              style={img.style}
            />
          </a>
        {:else}
          <img
            loading="lazy"
            src={img.src}
            alt={img.alt}
            onclick={handleClickPhoto}
            class="img-hover column"
            style={img.style}
          />
        {/if}
      {/each}
    </div>
  {/each}
</div>

<style>
  .slot-holder {
    display: none;
  }

  .root {
    display: grid;
    gap: 10px;

    grid-template-columns: repeat(var(--columns-count), 1fr);
  }

  .root .column {
    display: flex;
    flex-direction: column;
  }

  .root .column * {
    width: 100%;
    height: var(--image-height);
    margin-top: 10px;
    border-radius: 5px;
    object-fit: cover;
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
