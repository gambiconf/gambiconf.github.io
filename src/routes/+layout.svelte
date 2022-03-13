<script lang="ts">
  import { onMount } from "svelte"
  import { asset } from "$app/paths"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import Footer from "../components/Footer.svelte"
  import Seo from "../components/Seo.svelte"
  import Header from "../components/Header.svelte"
  import LocalizationProvider from "../providers/LocalizationProvider.svelte"
  import { themeState, loadStoredTheme } from "../store/theme.svelte"
  import { loadStoredLocale } from "../store/locale.svelte"
  import "../app.css"

  interface Props {
    children?: import('svelte').Snippet
  }

  let { children }: Props = $props()

  // Both stores start at their SSR defaults. After hydration, pull the visitor's
  // saved preferences from localStorage so the reactive <html lang>, <link>
  // and <body theme> all update together.
  onMount(() => {
    loadStoredTheme()
    loadStoredLocale()
  })
</script>

<svelte:head>
  <meta name="color-scheme" content={themeState.value} />
  <link rel="stylesheet" href={asset(`/themes/${themeState.value}.css`)} />

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
