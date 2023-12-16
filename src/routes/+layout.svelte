<script>
  import { base } from "$app/paths"
  import { onMount } from "svelte"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import Footer from "../components/Footer.svelte"
  import Seo from "../components/Seo.svelte"
  import Header from "../components/Header.svelte"
  import LocalizationProvider from "../providers/LocalizationProvider.svelte"
  import { theme } from "../store/theme"

  import "../app.css"

  onMount(() => {
    let currentTheme = localStorage.getItem("theme") ?? "light"
    theme.set(currentTheme)
  })
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme} />
  <link rel="stylesheet" href={`${base}/themes/${$theme}.css`} />
  
  <meta property="og:title" content="GambiConf 2023" />
  <meta property="og:site_name" content="GambiConf 2023"/>
  <meta property="og:url" content="https://gambiconf.dev/"/>
  <meta property="og:description" content="É a gambiconf né dog." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="./static/logo.png" />
  <!-- <meta name="twitter:card" content="summary_large_image" /> -->

  <Seo />
</svelte:head>

<LocalizationProvider>
  <title><Localized id="title" /></title>

  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</LocalizationProvider>
