<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import FaLayers from 'svelte-fa/src/fa-layers.svelte'
  import { onMount } from 'svelte'
  import { theme } from '../store/theme'
  import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
  import { t } from "../store/locale"

  function toggleTheme() {
    theme.update((current) => {
      return current === 'light' ? 'dark' : 'light'
    })

    theme.subscribe((value) => {
      localStorage.setItem('theme', value)
    })
  }

  onMount(() => {
    let currentTheme = localStorage.getItem('theme') ?? 'light'
    theme.set(currentTheme)
  });
</script>

<style>
  .theme-switch-wrapper {
    cursor: pointer;
    margin: 0 -1rem 0 -1rem;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
  }
</style>

<div class="theme-switch-wrapper" on:click={toggleTheme} title="{$t("theme--" + $theme)}">
  <div class="icons">
  {#if $theme === 'light'}
    <FaLayers>
      <Fa icon={faMoon} color="#54595f" />
    </FaLayers>
  {:else}
    <FaLayers>
      <Fa icon={faSun} color="#afa99e" />
    </FaLayers>
  {/if}
  </div>
</div>
