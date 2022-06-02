<script lang="ts">
  import { assets } from '$app/paths'
  import Window from './Window.svelte'
</script>

<style>
  .content {
    padding: 25px;
  }

  h3 {
    margin-bottom: 25px;
  }

  .content > h3:first-of-type {
    margin-top: 0;
  }

  .content > h3:last-of-type {
    margin-top: 25px;
  }

  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .speaker-image {
    height: 200px;
    transition: filter 0.75s;
    filter: grayscale(1);
  }
  .speaker-image:hover {
    filter: grayscale(0);
  }

  .talk {
    display: flex;
    gap: 25px;
  }

  .description-column > *:first-child {
    margin-top: 0;
  }

  .description-column > *:last-child {
    margin-bottom: 0;
  }
</style>

<div id="talks">
  <Window title="Talks">
    <article class="content">
      <h3>September 3 / In-person day</h3>

      <article class="talk">
        <img
          class="speaker-image"
          src={`${assets}/speakers/dave-aronson2.png`}
          alt="Dave Aronson"
        />

        <div class="description-column">
          <p>
            Would your tests all still pass if the tested code was changed? If so, you may have test gaps, ineffective code, or both! Mutation Testing reveals these cases. This talk will tell you all about it.
          </p>

          <h6 class="talk-speaker">
            By Dave Aronson:
          </h6>

          <p>
            <a href="https://twitter.com/DaveAronson">@DaveAronson</a> is a software development consultant with 37 years of experience. He is the T. Rex of Codosaurus, LLC (his one-person company, which explains how he can get such a cool title) near Washington, DC, USA. In his spare time, he brews mead.
          </p>
        </div>
      </article>

      <h3>September 10 / In-person day</h3>

      <article class="talk">
        <img
          class="speaker-image"
          src={`${assets}/speakers/lucas-teske2.png`}
          alt="Lucas Teske"
        />

        <div class="description-column">
          <p>
            How I reverse engineered the GOES Satellite Protocol to receive a few images.
          </p>

          <h6 class="talk-speaker">
            by Lucas Teske:
          </h6>

          <p>
            “I play, hack stuff, create and destroy stuff. Check it out to see live hacks! Or destroying my computer (it happens). I'm also the creator of OpenSatelliteProject and SegDSP!〞
          </p>
        </div>
      </article>
    </article>
  </Window>
</div>
