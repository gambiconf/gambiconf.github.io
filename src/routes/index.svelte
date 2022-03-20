<script lang="ts">
  import Hero from '../components/Hero.svelte'
  import RowWhatIsGambiConf from '../components/RowWhatIsGambiConf.svelte'
</script>

<style>
  .wrapper-row-what-is-gambiconf {
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("../../static/mambi-icon-oulined.png");
    background-position: center right;
    background-size: 100px;

    padding-top: 400px;
  }

  @media screen and (min-width: 768px) {
    .wrapper-row-what-is-gambiconf {
      padding-top: 200px;
    }
  }
</style>

<Hero />

<div class="wrapper-row-what-is-gambiconf">
  <div class="hero-margin" />

  <RowWhatIsGambiConf />
</div>
