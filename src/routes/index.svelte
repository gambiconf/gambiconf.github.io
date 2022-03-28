<script lang="ts">
  import Hero from '../components/Hero.svelte'
  import RowCFP from '../components/RowCfp.svelte'
  import RowWhatIsGambiConf from '../components/RowWhatIsGambiConf.svelte'
</script>

<style>
  :global(body) {
    margin: 0;
  }

  .wrapper-content {
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("../../static/mambi-icon-oulined.png");
    background-position: center right;
    background-size: 100px;

    padding-top: 400px;
  }

  @media screen and (min-width: 768px) {
    .wrapper-content {
      padding-top: 200px;
    }
  }
</style>

<Hero />

<div class="wrapper-content">
  <div class="hero-margin" />

  <RowWhatIsGambiConf />

  <RowCFP />
</div>
