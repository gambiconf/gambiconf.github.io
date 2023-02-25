<script>
  import { Localized } from '@nubolab-ffwd/svelte-fluent'
  import Footer from '../components/Footer.svelte'
  import Seo from '../components/Seo.svelte'
  import Header from '../components/Header.svelte'
  import LocalizationProvider from '../providers/LocalizationProvider.svelte'
  import '../app.css'
</script>

<svelte:head>
  <Seo />
</svelte:head>

<LocalizationProvider>
  <title><Localized id="title" /></title>

  <Header />

  <body>
    <main>
      <slot />
    </main>
  </body>

  <Footer />
</LocalizationProvider>
