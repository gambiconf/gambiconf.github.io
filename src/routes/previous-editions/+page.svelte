<script lang="ts">
  import { t } from "../../store/locale.svelte"
  import Gallery from "../../components/Gallery.svelte"
  import Window from "../../components/Window.svelte"
  import { assets } from "$app/paths"
  import { onMount } from "svelte"

  let isMobile = $state(false)
  let columnCount = $derived(isMobile ? 1 : 2)

  onMount(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    isMobile = mediaQuery.matches

    const handler = (e: MediaQueryListEvent) => {
      isMobile = e.matches
    }

    mediaQuery.addEventListener("change", handler)

    return () => {
      mediaQuery.removeEventListener("change", handler)
    }
  })
</script>

<div class="page">
  <Window title={t("previous-editions--title")}>
    <div class="gallery">
      <Gallery {columnCount} imageHeight="350px">
        <a href="https://gambiconf.dev/2024">
          <img src={`${assets}/previous-editions/e2024.jpg`} alt="GambiConf 2024" />
        </a>

        <a href="https://gambiconf.dev/2023">
          <img src={`${assets}/previous-editions/e2023.jpg`} alt="GambiConf 2023" />
        </a>

        <a href="https://gambiconf.dev/2022">
          <img src={`${assets}/previous-editions/e2022.jpg`} alt="GambiConf 2022" />
        </a>

        <a href="https://gambiconf.dev/2021">
          <img src={`${assets}/previous-editions/e2021.jpg`} alt="GambiConf 2021" />
        </a>
      </Gallery>
    </div>
  </Window>
</div>

<style>
  :global(body) {
    background-position: center right;
    background-size: 100px;
  }

  .page {
    margin-top: 100px;
    margin-bottom: 30px;
  }

  .gallery {
    max-width: calc(100vw - 32px);

    padding: 16px;
  }
</style>
