<script>
  import { onMount, createEventDispatcher } from "svelte"

  export let focusPoint = {}

  const dispatch = createEventDispatcher()

  let slotHolder = null
  let columns = []
  const columnCount = 4

  const handleClickPhoto = (e) => {
    dispatch("photoClick", { src: e.target.src })
  }

  const draw = () => {
    const photos = Array.from(slotHolder.childNodes).filter((child) => child.tagName === "IMG")

    columns = new Array(columnCount).fill([])

    for (let i = 0; i < photos.length; i++) {
      const idx = i % columnCount

      const { src, alt, className } = photos[i]

      const imageFocusPoint = focusPoint[src.match(/DSC\d+/)] ?? []
      const style = imageFocusPoint ? `object-position: ${imageFocusPoint}` : null

      columns[idx] = [
        ...columns[idx],
        { src, alt, class: className, style },
      ]
    }
  }

  onMount(draw)
</script>

<div
  class="slot-holder"
  bind:this={slotHolder}
  on:DOMNodeInserted={draw}
  on:DOMNodeRemoved={draw}
>
  <slot />
</div>

<div class="root">
  {#each columns as column}
    <div class="column">
      {#each column as img}
        <img
          src={img.src}
          alt={img.alt}
          on:click={handleClickPhoto}
          class="img-hover column"
          style={img.style}
        />
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

    grid-template-columns: repeat(4, 1fr);
  }

  .root .column {
    display: flex;
    flex-direction: column;
  }

  .root .column * {
    width: 100%;
    height: 250px;
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
