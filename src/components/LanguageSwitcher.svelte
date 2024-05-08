<script lang="ts">
  import { Br, Us } from "svelte-flag-icons"
  import Select from "svelte-select"
  import { locale } from "../store/locale"

  let language = "PT"

  let items = [
    { flag: "br", label: "PT" },
    { flag: "us", label: "EN" },
  ]

  const handleChange = (e) => {
    language = e.detail.label
    locale.set(e.detail.label)
  }
</script>

<Select
  on:change={handleChange}
  bind:value={language}
  searchable={false}
  clearable={false}
  {items}
  --background="none"
  --width="100px"
  --height="36px"
  --border="none"
  --border-hover="none"
  --border-focused="none"
  --selected-item-padding="0 16px 0 0"
  class="container"
>
  <div slot="selection" class="item" let:selection>
    {#if selection.label === "PT"}
      <Br />
    {:else}
      <Us />
    {/if}

    {selection.label}
  </div>

  <div slot="item" class="item" let:item>
    {#if item.flag === "br"}
      <Br />
    {:else}
      <Us />
    {/if}

    {item.label}
  </div>
</Select>

<style>
  :global(.selected-item) {
    width: 100%;
  }

  :global(.svelte-select input) {
    cursor: pointer !important;
  }

  :global(.svelte-select) {
    --padding: 0;
    --width: 70px;

    @media screen and (min-width: 768px) {
      --width: unset;
    }
  }

  .item {
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
