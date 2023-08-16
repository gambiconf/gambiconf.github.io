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
  <meta og:title="GambiConf 2023" />
  <meta og:type="website" />
  <meta og:url="https://gambiconf.dev/" />
  <meta og:image="./static/logo.png" />
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
