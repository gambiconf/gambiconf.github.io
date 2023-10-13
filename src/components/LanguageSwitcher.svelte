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
  id="language-select"
  --background="none"
  --width="100px"
  --height="36px"
  --border="none"
  --border-hover="none"
  --border-focused="none"
  --selected-item-padding="0 16px 0 0"
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

  .item {
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
