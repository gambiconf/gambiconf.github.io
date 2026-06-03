<script lang="ts">
  import { asset } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import Window from "./Window.svelte"
  import { utmSource } from "../utils/constants"
</script>

<Window title={t("partners--title")}>
  <!-- <h3 class="title"><Localized id="partners--sponsors" /></h3>

  <div class="grid grid-sponsors">
    <a href={`https://contaaberta.info/?${utmSource}`} target="_blank" rel="noopener">
      <img src={asset("/partners/conta-aberta.png")} alt="Conta Aberta" />
    </a>

    <a href={`https://www.codeminer42.com/?${utmSource}`} target="_blank" rel="noopener">
      <img src={asset("/codeminer42.svg")} alt="Conta Aberta" />
    </a>
  </div>

  <h3 class="title"><Localized id="partners--supporters" /></h3> -->

  <div class="grid grid-partners">
    <a href={`https://usp.br/?${utmSource}`} target="_blank" rel="noopener">
      <img src={asset("/partners/usp.png")} alt="USP" />
    </a>

    <!-- <a href={`https://www.totvs.com/?${utmSource}`} target="_blank" rel="noopener">
      <img src={asset("/totvs.jpg")} alt="TOTVS" />
    </a> -->

    <a href={`https://symcomp.ime.usp.br/?${utmSource}`} target="_blank" rel="noopener">
      <img src={asset("/partners/symcomp.png")} alt="SymComp" />
    </a>

    <img src={asset("/typed.avif")} alt="TYPED" />

    <img src={asset("/cryptolar.png")} alt="Cryptolar" />

    <!-- <a href={`https://elixiremfoco.com/?${utmSource}`} target="_blank" rel="noopener">
      <img src={asset("/elixir-em-foco.png")} alt="Elixir em foco" />
    </a>

    <a href={`https://github.com/?${utmSource}`} target="_blank" rel="noopener">
      <img src={asset("/github.png")} alt="GitHub" />
    </a>

    <a href={`https://magalu.cloud/?${utmSource}`} target="_blank" rel="noopener">
      <img src={asset("/magalu-cloud.svg")} alt="Magalu Cloud" />
    </a> -->
  </div>
</Window>

<style>
  .title {
    padding: 10px 25px;
    margin: 0;
  }

  .grid {
    display: grid;
    justify-items: center;
    gap: 25px;

    padding: 25px;
  }

  .grid img {
    height: 175px;
    transition: filter 0.75s;
    filter: grayscale(1);
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .grid img:hover {
    filter: grayscale(0);
  }

  .grid-sponsors {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-sponsors img {
    height: 100px;
  }

  .grid-partners {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    .grid-partners {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
