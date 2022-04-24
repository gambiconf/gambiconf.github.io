<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import FaLayers from 'svelte-fa/src/fa-layers.svelte'
  import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane'
  import Window from './Window.svelte'
</script>

<style>
  .content {
    padding: 25px;
  }

  .icon {
    float: left;
    margin-right: 15px;
  }

  p {
    margin-top: 0;
  }

  .button {
    display: flex;
    justify-content: center;
  }

  .button-cfp {
    background-color: #f34b21;
    padding: 10px;
    border-radius: 4px;
    min-width: 25%;

    color: white;
    text-decoration: none;
    text-align: center;

    transition: 0.4s;
  }
  .button-cfp:visited {
    color: white;
  }
  .button-cfp:hover {
    transform: scale(0.99);
    filter: brightness(0.9);
  }

  @media screen and (min-width: 768px) {
    .icon {
      float: unset;
    }

    .row {
      display: flex;
    }
  }
</style>

<Window title="Call for Proposal">
  <div class="content">
    <div class="row">
      <div class="icon">
        <FaLayers size="4x">
          <Fa
            color="#0271b8"
            icon={faPaperPlane}
          />
        </FaLayers>
      </div>

      <div>
        <p>
          If you've ever worked on a really hacky personal project or thought of a unique-underground-workaroundish way of doing something in CS,
          come share your experience with us! We want to hear from you!
        </p>

        <p>
          Are you willing to speak at GambiConf, but don't know what to talk about?
          <a
            href="https://threadreaderapp.com/thread/1518259526243393536.html"
            target="_blank"
            rel="noopener"
          >
            Click here.
          </a>
        </p>

        <p>
          The deadline is May 22.
        </p>
      </div>
    </div>

    <div class="button">
      <a class="button-cfp" href="/cfp">Apply to the CFP</a>
    </div>
  </div>
</Window>
