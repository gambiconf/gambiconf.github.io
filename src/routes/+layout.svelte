<script lang="ts">
  import { base } from "$app/paths"
  import { onMount } from "svelte"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import Footer from "../components/Footer.svelte"
  import Seo from "../components/Seo.svelte"
  import Header from "../components/Header.svelte"
  import LocalizationProvider from "../providers/LocalizationProvider.svelte"
  import { theme } from "../store/theme"
  import type { Theme } from "../store/theme"
  import "../app.css"

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  onMount(() => {
    const currentTheme = localStorage.getItem("theme") ?? "light"
    theme.set(currentTheme as Theme)

    document.getElementsByTagName("body")[0].setAttribute('theme', currentTheme)
  })
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme} />
  <link rel="stylesheet" href={`${base}/themes/${$theme}.css`} />

  <Seo />
</svelte:head>

<LocalizationProvider>
  <Localized id="title">
    {#snippet children({ text })}
      <title>{text}</title>
    {/snippet}
  </Localized>
  <Header />

  <main>
    {@render children?.()}
  </main>

  <Footer />
</LocalizationProvider>

<style>
  :global(body) {
    min-height: 100vh;
    margin: 0;

    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
  }
</style>
