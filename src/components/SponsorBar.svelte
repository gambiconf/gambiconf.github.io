<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { utmSource } from "../utils/constants"
  import { t } from "../store/locale.svelte"
</script>

<div class="sponsor-bar">
  <div class="content">
    <div class="section">
      <h3><Localized id="partners--sponsors" /></h3>
      <div class="logos">
        <a href={`https://contaaberta.info/?${utmSource}`} target="_blank" rel="noopener">
          <img src={`${assets}/conta-aberta.png`} alt="Conta Aberta" />
        </a>

        <a href={`https://www.codeminer42.com/?${utmSource}`} target="_blank" rel="noopener">
          <img src={`${assets}/codeminer42.svg`} alt="Codeminer 42" />
        </a>
      </div>
    </div>

    <div class="separator"></div>

    <div class="section">
      <h3><Localized id="partners--supporters" /></h3>
      <div class="logos">
        <a href={`https://usp.br/?${utmSource}`} target="_blank" rel="noopener" class="usp-logo">
          <img src={`${assets}/usp.png`} alt="USP" />
        </a>

        <a href={`https://www.totvs.com/?${utmSource}`} target="_blank" rel="noopener">
          <img src={`${assets}/totvs.jpg`} alt="TOTVS" />
        </a>

        <a href={`https://symcomp.ime.usp.br/?${utmSource}`} target="_blank" rel="noopener">
          <img src={`${assets}/symcomp.png`} alt="SymComp" />
        </a>

        <a href={`https://elixiremfoco.com/?${utmSource}`} target="_blank" rel="noopener">
          <img src={`${assets}/elixir-em-foco.png`} alt="Elixir em foco" />
        </a>

        <a href={`https://github.com/?${utmSource}`} target="_blank" rel="noopener">
          <img src={`${assets}/github.png`} alt="GitHub" />
        </a>

        <a href={`https://magalu.cloud/?${utmSource}`} target="_blank" rel="noopener">
          <img src={`${assets}/magalu-cloud.svg`} alt="Magalu Cloud" />
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .sponsor-bar {
    background-color: var(--bg-color, #ffffff);
    padding: 20px 0 15px;
    width: 100%;
    border-bottom: 1px solid #eee;
    position: relative;
    z-index: 5;
  }

  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
  }

  h3 {
    margin: 0;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #666;
    opacity: 0.8;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  .separator {
    width: 80%;
    height: 1px;
    background-color: #eee;
    margin: 10px 0;
    display: none; /* Hidden by default, shown on larger screens if needed */
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 35px;
    width: auto;
    max-width: 120px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  a:hover img {
    transform: scale(1.05);
  }

  .usp-logo img {
    height: 50px;
    max-width: 150px;
  }

  @media screen and (min-width: 768px) {
    .sponsor-bar {
      padding: 20px 0;
    }

    .content {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .section {
      flex-direction: row;
      width: auto;
      gap: 20px;
    }

    h3 {
      white-space: nowrap;
      font-size: 0.8rem;
      margin-right: 10px;
    }

    .separator {
      display: block;
      width: 1px;
      height: 40px;
      margin: 0;
    }

    .logos {
      flex-wrap: nowrap;
      gap: 30px;
    }
    
    img {
      height: 40px;
    }

    .usp-logo img {
      height: 60px;
      max-width: 180px;
    }
  }

  /* Mobile adjustment */
  @media screen and (max-width: 767px) {
    .sponsor-bar {
      padding-top: 30px;
    }
  }
</style>
