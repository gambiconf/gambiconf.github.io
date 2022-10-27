<script lang="ts">
  import { assets } from '$app/paths'
  import Button from './Button.svelte'
</script>

<style>
  section {
    background-color: #A8B8F1;

    position: relative;
    height: 55vh;
  }

  .background-overlay {
    position: absolute;

    width: 100%;
    height: 100%;

    background-image: url("/hero-background.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.3;
    mix-blend-mode: overlay;
  }

  .mascot {
    position: absolute;

    height: 50vh;
    width: 100%;

    top: 85%;
  }
  .mascot img {
    max-height: 100%;
    max-width: 100vw;
  }

  .message {
    text-align: center;

    position: relative;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    margin-bottom: 1em;
  }

  .title h1 {
    margin: 0;
  }

  .title p {
    margin-top: 0;
    opacity: 60%;
  }

  h4, p {
    margin: 0;
  }

  .date > span {
    display: inline-block;
  }

  .location {
    opacity: 60%;
  }

  .hours {
    opacity: 60%;
  }

  .action {
    margin-top: 25px;
  }

  @media screen and (min-width: 768px) {
    .mascot {
      width: auto;
      height: 60vh;

      top: auto;
      right: 230px;

      margin-top: 20vh;
    }

    .message {
      max-width: 330px;

      margin-right: auto;
      margin-left: auto;
    }
  }
</style>

<section>
  <div class="background-overlay" />

  <div class="message">
    <div class="mascot">
      <img
        src={`${assets}/mambi.png`}
        alt="GambiConf's mascot. An anthropomorphic orange monkey using a neck scarf with the flag of the European Union"
      />
    </div>

    <div class="title">
      <h1>
        GambiConf
      </h1>

      <p>
        The Blow Your Mind Conference
      </p>
    </div>

    <h4 class="date">
      <span>
        September
      </span>

      <span>
        3 and 10
      </span>
    </h4>

    <p class="location">
      Lisbon and Online
    </p>

    <p class="hours">
      14:00 - 18:45 (Sept 3rd)<br />
      14:00 - 19:50 (Sept 10th)
    </p>

    <div class="action">
      <Button
        url="https://www.youtube.com/channel/UCnTbfjNNWxFMyqW-d2QgHYw"
      >
        YouuTube channel
      </Button>
    </div>
  </div>
</section>
