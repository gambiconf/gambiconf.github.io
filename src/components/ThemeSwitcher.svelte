<script lang="ts">
  import { Fa, FaLayers } from "svelte-fa"
  import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon"
  import { faSun } from "@fortawesome/free-solid-svg-icons/faSun"
  import { themeState, toggleTheme } from "../store/theme.svelte"
</script>

<button type="button" class="theme-switch-wrapper" onclick={toggleTheme} aria-label="Toggle theme">
  <div class="icons">
    {#if themeState.value === "light"}
      <FaLayers>
        <Fa icon={faMoon} color="#51504d" />
      </FaLayers>
    {:else}
      <FaLayers>
        <Fa icon={faSun} color="#afa99e" />
      </FaLayers>
    {/if}
  </div>
</button>

<style>
  .theme-switch-wrapper {
    cursor: pointer;
    margin: 0 -1rem 0 -1rem;

    background: none;
    border: none;
    padding: 0;
    color: inherit;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
  }
</style>
