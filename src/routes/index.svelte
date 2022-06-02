<script lang="ts">
  import BulletsGutter from '../components/BulletsGutter.svelte'
  import Hero from '../components/Hero.svelte'
  import RowCFP from '../components/RowCfp.svelte'
  import RowTalks from '../components/RowTalks.svelte'
  import RowWhereAndWhen from '../components/RowWhereAndWhen.svelte'
  import RowPartners from '../components/RowPartners.svelte'
  import RowWhatIsGambiConf from '../components/RowWhatIsGambiConf.svelte'
</script>

<style>
  :global(body) {
    margin: 0;
  }

  .bullters-gutter-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .wrapper-content {
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("../../static/mambi-icon-oulined.png");
    background-position: center right;
    background-size: 100px;

    padding-top: 400px;
    padding-bottom: 100px;
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

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowTalks />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowWhereAndWhen />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowCFP />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowPartners />
</div>
