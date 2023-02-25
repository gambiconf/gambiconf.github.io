<script lang="ts">
  import { assets } from '$app/paths'
  import { t } from '../store/locale'
  import Window from './Window.svelte'
</script>

<style>
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 25px;

    padding: 25px;
  }

  .content img {
    max-height: 100px;
    transition: filter 0.75s;
    filter: grayscale(1);
  }

  .content img:hover {
    filter: grayscale(0);
  }

  @media screen and (min-width: 768px) {
    .content img {
      max-height: 175px;
    }
  }
</style>

<Window title={$t('partners--title')}>
  <div class="content">
    <a
      href="https://www.42lisboa.com/en/"
      target="_blank"
      rel="noopener"
    >
      <img
        src={`${assets}/42-lisboa.png`}
        alt="42 Lisboa logo"
      />
    </a>

    <a
      href="https://anchor.fm/fronteirases"
      target="_blank"
      rel="noopener"
    >
      <img
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
        src={`${assets}/reaktor.svg`}
        alt="Reaktor logo"
      />
    </a>

    <a
      href="https://www.cumbuca.com/"
      target="_blank"
      rel="noopener"
    >
      <img
        src={`${assets}/cumbuca.png`}
        alt="Cumbuca logo"
      />
    </a>

    <a
      href="https://ahrefs.com/"
      target="_blank"
      rel="noopener"
    >
      <img
        src={`${assets}/ahrefs.svg`}
        alt="Ahrefs logo"
      />
    </a>

    <a
      href="https://docs.google.com/presentation/d/1u-VWUl92qNr1i_zEcqSdXwLXpwsT6pTl6CIVoA-WrMg/edit?usp=sharing"
      target="_blank"
      rel="noopener"
    >
      <img
        src={`${assets}/become-a-partner.png`}
        alt="The GambiConf mascot holding a lifting a board written 'Become a partner'"
      />
    </a>
  </div>
</Window>
