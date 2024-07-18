<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale"
  import { utmSource } from "../utils/constants"
  import ScheduleUpcoming from "./ScheduleUpcoming.svelte"
  import Window from "./Window.svelte"
  import TimeSlot from "./TimeSlot.svelte"
</script>

<div id="schedule">
  <Window title={$t("schedule--title")}>
    <article class="content">
      <h3><Localized id="schedule--first-day" /></h3>

      <TimeSlot
        title={$t("schedule--presentation-opening-ceremony-first-day-title")}
        date="2024-11-02"
        hours="9:30"
        duration={20}
        members={[
          {
            name: "Bruno Macabeus",
            image: `${assets}/speakers/bruno-macabeus.jpeg`,
            bio: $t("schedule--presentation-opening-ceremony-first-day-bio"),
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/bmacabeus" },
              { type: "github", url: "https://github.com/macabeus" },
              { type: "website", url: "http://macabeus.github.io/" },
            ],
          },
          {
            name: "Ana Bastos",
            image: `${assets}/speakers/ana-bastos.jpeg`,
            bio: "Engenheira de software, formada na PUC-SP, gosto de paradigmas de computação, matematíquisses e musica. Às vezes palestrante, às vezes community manager, sempre shitposter.",
            socialLinks: [
              { type: "bluesky", url: "https://bsky.app/profile/anabastos.me" },
              { type: "github", url: "https://github.com/anabastos" },
              { type: "linkedin", url: "https://www.linkedin.com/in/anabastos8/" },
              { type: "website", url: "https://anabastos.me/" },
            ],
          },
        ]}
      >
        <Localized id="schedule--presentation-opening-ceremony-first-day-description" />
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Keynote: A história por trás da criação do Elixir"
        date="2024-11-02"
        duration={45}
        members={[
          {
            name: "Hugo Baraúna",
            image: `${assets}/speakers/hugo-barauna.jpg`,
            bio: "Hugo Baraúna é developer advocate do Livebook e founder da Elixir Radar. Antes disso, ele foi co-fundador da Plataformatec, onde o Elixir foi criado.",
            socialLinks: [
              { type: "twitter", url: "https://x.com/hugobarauna" },
              { type: "github", url: "https://github.com/hugobarauna" },
            ],
          },
        ]}
      >
        Nesta palestra vamos aprender sobre a história da criação do Elixir, uma linguagem de programação brasileira usada no mundo inteiro.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Como eu fiz um Flappy Bird em Assembly aos 16 anos"
        date="2024-11-02"
        duration={35}
        members={[
          {
            name: "Ana Carolina Hernandes",
            image: `${assets}/speakers/ana-carolina-hernandes.png`,
            bio: "Doutoranda em Matemática pela USP. Apaixonada por Lógica e Programação em Baixo Nível.",
            socialLinks: [
              { type: "twitter", url: "https://x.com/anakurisu01" },
            ],
          },
        ]}
      >
        Descubra todas as gambiarras que fiz para recriar uma versão do Flappy Bird em Assembly 8086! ^-^
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <div class="break">
        <ScheduleUpcoming />
      </div>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <h3><Localized id="schedule--second-day" /></h3>

      <TimeSlot
        title={$t("schedule--presentation-opening-ceremony-second-day-title")}
        date="2024-11-03"
        hours="13:30"
        duration={25}
        members={[
          {
            image: `${assets}/speakers/bruno-macabeus.jpeg`,
            name: "Bruno Macabeus",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/bmacabeus" },
              { type: "github", url: "https://github.com/macabeus" },
              { type: "website", url: "http://macabeus.github.io/" },
            ],
          },
        ]}
      >
        <Localized id="schedule--presentation-opening-ceremony-second-day-description" />
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Identificando Armadilhas Digitais: Uma Introdução a Honeypots"
        date="2024-11-03"
        hours="14:00"
        duration={210}
        members={[
          {
            name: "Mike Garcia",
            image: `${assets}/speakers/mike-garcia.png`,
            bio: "Analista de Segurança da Informação, com 10 anos de experiência em expressivas empresas do mercado nacional e atuando com segurança  defensiva na Tempest desde 2020 onde, atualmente, faz parte do Time de CSIRT.",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/mike-garcia-351689b5/" },
            ],
          },
        ]}
      >
        Em parceria com a <a href={`https://www.tempest.com.br/?${utmSource}`} target="_blank" rel="noopener">Tempest</a>.
      </TimeSlot>

    <div class="division-wrapper">
      <div class="division" />
    </div>

    <div class="break">
        <ScheduleUpcoming />
      </div>
    </article>
  </Window>
</div>

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

  .division-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 20px;
  }

  .division {
    height: 1px;
    width: 70%;
    background-color: #f34b2133;
  }

  .break {
    text-align: center;
  }
</style>
