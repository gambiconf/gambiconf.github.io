<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import FaLayers from 'svelte-fa/src/fa-layers.svelte'
  import { theme } from '../store/theme'
  import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
  import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'

  function toggleTheme() {
    theme.update((current) => {
      return current === 'light' ? 'dark' : 'light'
    })

    theme.subscribe((value) => {
      localStorage.setItem('theme', value)
    })
  }
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

<div class="theme-switch-wrapper" on:click={toggleTheme}>
  <div class="icons">
  {#if $theme === 'light'}
    <FaLayers>
      <Fa icon={faMoon} color="#51504d" />
    </FaLayers>
  {:else}
    <FaLayers>
      <Fa icon={faSun} color="#afa99e" />
    </FaLayers>
  {/if}
  </div>
</div>
