<script lang="ts">
  import { t } from "../../store/locale.svelte"
  import Gallery, { type GalleryPhoto } from "../../components/Gallery.svelte"
  import Window from "../../components/Window.svelte"
  import { asset } from "$app/paths"
  import { onMount } from "svelte"

  let isMobile = $state(false)
  const columnCount = $derived(isMobile ? 1 : 2)

  onMount(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    isMobile = mediaQuery.matches

    const handler = (e: MediaQueryListEvent) => {
      isMobile = e.matches
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  })

  const editions: GalleryPhoto[] = [2025, 2024, 2023, 2022, 2021].map((year) => ({
    src: asset(`/previous-editions/e${year}.jpg`),
    alt: `GambiConf ${year}`,
    href: `https://gambiconf.dev/${year}`,
  }))
</script>

<div class="page">
  <Window title={t("previous-editions--title")}>
    <div class="gallery">
      <Gallery photos={editions} {columnCount} imageHeight="350px" />
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
