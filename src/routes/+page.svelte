<script lang="ts">
  import BulletsGutter from "../components/BulletsGutter.svelte"
  import Hero from "../components/Hero.svelte"
  import RowSchedule from "../components/RowSchedule.svelte"
  import RowWhereAndWhen from "../components/RowWhereAndWhen.svelte"
  import RowPartners from "../components/RowPartners.svelte"
  import RowTheGambiConf from "../components/RowTheGambiConf.svelte"
  import RowTyped from "../components/RowTyped.svelte"
  // import RowCfp from "../components/RowCfp.svelte"
  import RowTickets from "../components/RowTickets.svelte"
  // import SponsorBar from "../components/SponsorBar.svelte"
</script>

<Hero />
<!-- <SponsorBar /> -->

<div class="wrapper-content">
  <div class="hero-margin"></div>

  <!-- <RowEvent />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div> -->

  <RowTheGambiConf />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowTyped />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <section id="tickets">
    <RowTickets />
  </section>

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowWhereAndWhen />

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowSchedule />

  <!-- <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <section id="call-for-proposal">
    <RowCfp />
  </section> -->

  <div class="bullters-gutter-wrapper">
    <BulletsGutter />
  </div>

  <RowPartners />
</div>

<style>
  .hero-margin {
    height: 160px;
    margin-top: -50px;
    margin-bottom: -110px;

    background-image: linear-gradient(
      to bottom,
      rgba(255, 137, 21, 0.16) 0%,
      rgba(255, 137, 21, 0) 100%
    );

    pointer-events: none;
  }

  .bullters-gutter-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .wrapper-content {
    background-position: center right;
    background-size: 240px;

    padding-top: 50px;
    padding-bottom: 100px;
  }
</style>
