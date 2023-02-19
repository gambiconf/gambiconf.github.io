<script>
  import Footer from '../components/Footer.svelte'
  import Seo from '../components/Seo.svelte'
  import Header from '../components/Header.svelte'
  import '../app.css'
</script>

<svelte:head>
  <title>GambiConf - The Blow Your Mind Conference | 3rd and 10th of September</title>
  <Seo />
</svelte:head>

<Header />

<body>
  <main>
    <slot></slot>
  </main>
</body>

<Footer />
