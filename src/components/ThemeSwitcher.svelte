<script>
  import { Fa, FaLayers } from "svelte-fa"
  import { theme } from "../store/theme"
  import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon"
  import { faSun } from "@fortawesome/free-solid-svg-icons/faSun"

  function toggleTheme() {
    theme.update((current) => {
      return current === "light" ? "dark" : "light"
    })

    theme.subscribe((value) => {
      localStorage.setItem("theme", value)
      document.getElementsByTagName("body")[0].setAttribute('theme', value)
    })
  }
</script>

<div class="theme-switch-wrapper" onclick={toggleTheme}>
  <div class="icons">
    {#if $theme === "light"}
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
