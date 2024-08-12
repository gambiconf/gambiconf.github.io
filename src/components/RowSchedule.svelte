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

      <TimeSlot
        title="Machine Learning distribuído com Elixir"
        date="2024-11-02"
        duration={30}
        members={[
          {
            name: "Paulo Valente",
            image: `${assets}/speakers/paulo-valente.jpg`,
            bio: "Paulo Valente é co-mantenedor do ecossistema Nx em Elixir, formado em Engenharia Eletrônica pela UFRJ. Atualmente, trabalha para a <a href='https://x.com/DockYard'>@DockYard</a> como engenheiro de R&D",
            socialLinks: [
              { type: "github", url: "https://github.com/polvalente" },
            ],
          },
        ]}
      >
        Nesta palestra, veremos como Elixir pode ser utilizado para construir um sistema de captura e processamento de dados através do ecossistema Nx de bibliotecas junto ao Phoenix LiveView.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Como uma pinça derrotou a segurança do Nintendo Wii"
        date="2024-11-02"
        duration={30}
        members={[
          {
            name: "Gabu",
            image: `${assets}/speakers/gabu.png`,
            bio: "Profissional com 5 anos de experiência em Pentest Web, Mobile e AppSec. Também atuo como professor na FIAP, onde compartilho minha paixão pela área e organizo eventos de Capture the Flag.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/gabu_sec" },
              { type: "linkedin", url: "https://www.linkedin.com/in/gabrielbarbosasouza"}
            ],
          },
        ]}
      >
        Em 2007, pesquisadores de segurança descobriram uma forma de comprometer a segurança do Wii utilizando uma pinça para manipular componentes internos do console e ganhar acesso ao dispositivo.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Ressuscitando textos milenares das cinzas do Vesúvio"
        date="2024-11-02"
        duration={30}
        members={[
          {
            name: "Elian Rafael Dal Prá",
            image: `${assets}/speakers/elian-rafael.png`,
            bio: "Mestrando em Física Computacional na USP e um dos segundos colocados no Vesuvius Challenge 2023 Grand Prize.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/elianrafaeldp" },
            ],
          },
        ]}
      >
        Nessa talk, veremos como revelar textos de papiros carbonizados a partir de técnicas de Visão Computacional e Inteligência Artificial.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Bluetooth pra quê? Fazendo streaming pela porta USB"
        date="2024-11-02"
        duration={30}
        members={[
          {
            name: "Ricardo Gomes da Silva",
            image: `${assets}/speakers/ricardo-gomes.jpg`,
            bio: "Dev backend formado em Ciência da Computação pela UFRGS e TU Berlin. Faço mais gambiarras do que deveria ser permitido por lei, e desmonto eletrônicos só matar tédio. Ah, e se sobrar algum parafuso, eu digo que caiu da minha cabeça mesmo.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/debugweshell" },
              { type: "mastodon", url: "https://mas.to/@debugweshell" },
              { type: "website", url: "https://blog.rgsilva.com" },
            ],
          },
        ]}
      >
        Que atire a primeira pedra quem nunca quis ouvir Spotify em um rádio que só aceitava pendrive! Mas... e se o pendrive não fosse bem um pendrive, e ainda conectasse no streaming?!
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

      <TimeSlot
        title="Construindo apps real-time com Meteor.js 3.0 e React"
        date="2024-11-03"
        hours="14:00"
        duration={210}
        members={[
          {
            name: "Frederico Maia Arantes",
            image: `${assets}/speakers/fred-maia.jpg`,
            bio: "Nascido em Goiânia, já morou no RJ, Irlanda, foi nômade por 2 anos e hoje mora em Floripa. Programador desde 2008, deu aulas de programação e palestrou em eventos como TDC e FLISOL. Hoje é CEO da Meteor Software, criadora do Meteor.js e do Galaxy.",
            socialLinks: [
              { type: "github", url: "https://github.com/fredmaiaarantes" },
              { type: "linkedin", url: "https://linkedin.com/in/fredmaiaarantes" },
              { type: "twitter", url: "https://twitter.com/fredmaiaarantes" },
              { type: "website", url: "https://fredmaia.dev" },
            ],
          },
          {
            name: "Camila Rosa",
            image: `${assets}/speakers/camila-rosa.jpeg`,
            bio: "Me chamo Cami, formei em Rádio, TV e Internet e fiz transição de carreira para tech no fim de 2023. Entrei como Tech Community Manager na Meteor Software. Sou muito otaku e coleciono mangás!",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/camilarosa-2403" },
              { type: "twitter", url: "https://x.com/acamikuro" },
            ],
          },
          {
            name: "Gabs Ferreira",
            image: `${assets}/speakers/gabs-ferreira.png`,
            bio: "Developer advocate na Meteor Software, podcaster e criador de conteúdo tech",
            socialLinks: [
              { type: "github", url: "https://github.com/gabsferreira" },
              { type: "linkedin", url: "https://www.linkedin.com/in/gabsferreira" },
              { type: "twitter", url: "https://x.com/o_gabsferreira" },
              { type: "website", url: "https://gabsferreira.com" },
            ],
          },
        ]}
      >
        Entenda conceitos importantes como RPC com <a href={`https://meteor.com/?${utmSource}`} target="_blank" rel="noopener">Meteor</a> Methods, publications e subscriptions para real-time, crie collections e um sistema de autenticação.
        Do zero ao deploy no <a href={`https://www.meteor.com/cloud?${utmSource}`} target="_blank" rel="noopener">Galaxy</a>!
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="O lispy de Norvig: um interpretador em 132 linhas"
        date="2024-11-03"
        hours="14:00"
        duration={210}
        members={[
          {
            name: "Luciano Ramalho",
            image: `${assets}/speakers/luciano-ramalho.jpeg`,
            bio: "Autor de Fluent Python (O’Reilly 2022)",
            socialLinks: [
              { type: "twitter", url: "https://www.twitter.com/ramalhoorg" },
              { type: "github", url: "https://www.github.com/Ramalho" },
              { type: "mastodon", url: "https://ciberlandia.pt/@lr" },
            ],
          },
        ]}
      >
        Peter Norvig professor em Stanford criou o lis.py, um interpretador de um pequeno dialeto de Lisp em 132 linhas de código Python muito legível. Nessa oficina veremos como ele funciona!
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Construindo uma aplicação serverless com AWS CDK"
        date="2024-11-03"
        hours="14:00"
        duration={210}
        members={[
          {
            name: "Léo Igor Nunes",
            image: `${assets}/speakers/leo-igor-nunes.jpg`,
            bio: "Estudante de Ciência da computação, engenheiro de dados, entusiasta de Tecnologia.",
            socialLinks: [
              { type: "twitter", url: "https://www.twitter.com/leoigornunes" },
              { type: "linkedin", url: "https://www.linkedin.com/in/leoigornunes/" },
              { type: "website", url: "https://c4p1t4n.github.io/bc4p1t4n/pt-br/" },
            ],
          },
        ]}
      >
        - Conceitos essenciais de Infraestrutura como Código (IaC)<br />
        - Introdução aos conceitos do AWS CDK<br />
        - Criação de uma aplicação web na AWS utilizando serverless
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
