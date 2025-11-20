<script lang="ts">
  import BulletsGutter from "../components/BulletsGutter.svelte"
  import Hero from "../components/Hero.svelte"
  import RowSchedule from "../components/RowSchedule.svelte"
  import RowWhereAndWhen from "../components/RowWhereAndWhen.svelte"
  import RowPartners from "../components/RowPartners.svelte"
  import RowWhatIsGambiConf from "../components/RowWhatIsGambiConf.svelte"
  import RowEvent from "../components/RowEvent.svelte"
  import RowCfp from "../components/RowCfp.svelte"
  import SponsorBar from "../components/SponsorBar.svelte"
  import LocationWarning from "../components/LocationWarning.svelte"
</script>

<Hero />
<SponsorBar />
<LocationWarning />

<div class="wrapper-content">
  <div class="hero-margin"></div>

  <!-- <RowEvent />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>
 -->
  <RowWhatIsGambiConf />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowWhereAndWhen />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowSchedule />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowCfp />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowPartners />
</div>

<style>
  .bullters-gutter-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .wrapper-content {
    background-position: center right;
    background-size: 100px;

    padding-top: 50px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 768px) {
    .wrapper-content {
      padding-top: 200px;
    }
  }
</style>
