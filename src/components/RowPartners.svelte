<script lang="ts">
  import { assets } from '$app/paths'
  import Window from './Window.svelte'
</script>

<style>
  .content {
    display: grid;
    justify-items: center;
    gap: 25px;

    padding: 25px;
  }

  .content img {
    max-height: 175px;
    transition: filter 0.75s;
    filter: grayscale(1);
  }

  .content img:hover {
    filter: grayscale(0);
  }

  @media screen and (min-width: 768px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<Window title="Partners">
  <div class="content">
    <a
      href="https://anchor.fm/fronteirases"
      target="_blank"
      rel="noopener"
    >
      <img
        class="ellipsis"
        src={`${assets}/podcast-fronteiras.svg`}
        alt="Logo of the podcast 'Fronteiras da Engenharia de Software'"
      />
    </a>

    <a
      href="https://www.reaktor.com"
      target="_blank"
      rel="noopener"
    >
      <img
        class="ellipsis"
        src={`${assets}/reaktor.svg`}
        alt="Reaktor logo"
      />
    </a>
  </div>
</Window>
