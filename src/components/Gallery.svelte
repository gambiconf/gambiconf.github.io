<script>
  import { onMount, createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()

  let slotHolder = null
  let columns = []
  const columnCount = 5

  const handleClickPhoto = (e) => {
    dispatch("photoClick", { src: e.target.src })
  }

  const draw = () => {
    const photos = Array.from(slotHolder.childNodes).filter((child) => child.tagName === "IMG")

    columns = new Array(columnCount).fill([])

    for (let i = 0; i < photos.length; i++) {
      const idx = i % columnCount

      columns[idx] = [
        ...columns[idx],
        { src: photos[i].src, alt: photos[i].alt, class: photos[i].className },
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
        <img src={img.src} alt={img.alt} on:click={handleClickPhoto} class="img-hover column" />
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

    grid-template-columns: repeat(5, 1fr);
  }

  .root .column {
    display: flex;
    flex-direction: column;
  }

  .root .column * {
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
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
