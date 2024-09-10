<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale"
  import { utmSource } from "../utils/constants"
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
              { type: "bluesky", url: "https://bsky.app/profile/macabeus.bsky.social" },
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

      <TimeSlot
        title="Analise de malware: R$2 ou 1 arquivo misterioso?"
        date="2024-11-02"
        duration={25}
        members={[
          {
            name: "Cleber Soares",
            image: `${assets}/speakers/cleber-soares.jpeg`,
            bio: "Entusiasta em hardware hacking e biohacking, é pesquisador em Segurança da Informação e adepto da cultura do software livre. Com mais de 20 anos de experiência na área de tecnologia, possui pós-graduação em CyberSecurity e, atualmente, trabalha como Analista de Segurança da Informação, com foco em Análise de Malwares, Resposta a Incidentes, Segurança Ofensiva e Computação Forense. É professor de pós-graduação e instrutor acadêmico. É líder fundador do Capítulo OWASP Belém e autor regular das revistas Hacker Culture, eForenscs Magazine e Hackin9 Magazine.",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/clebersoaresbelem" },
              { type: "instagram", url: "https://www.instagram.com/clebersoares_sec" },
            ],
          },
        ]}
      >
        A palestra tem um objetivo educacional, com foco na análise de malware com ferramentas. Com estudos de caso reais e demonstrações práticas, os participantes aprenderão a detectar e neutralizar malware, contribuindo para a segurança digital.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Arquiteturas de compiladores"
        date="2024-11-02"
        duration={20}
        members={[
          {
            name: "Gabrielle Oliveira",
            image: `${assets}/speakers/gabrielle-oliveira.jpeg`,
            bio: "Me chamo Gabrielle Oliveira, participei da primeira rinha de backend com Lean4 e organizei a rinha de compiladores, programo Clojure, Rust e OCaml e brinco com compiladores por ai :)",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/io_gabx" },
              { type: "github", url: "https://github.com/aripiprazole" },
              { type: "website", url: "https://gabx.io" },
            ],
          },
        ]}
      >
        Como integrar e fazer um compilador rápido que tenha uma infraestutura legal e estruturar o código para que a manutenção seja mais simples
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Como adicionar multiplayer em um jogo sem autorização do desenvolvedor"
        date="2024-11-02"
        duration={25}
        members={[
          {
            name: "Vitor Norton",
            image: `${assets}/speakers/vitor-norton.jpg`,
            bio: "Microsoft MVP há mais tempo do que me lembro, +10 anos como Full Stack trabalhando com C#, TypeScript, React e Angular. Trabalho como Dev Advocate na SuperViz. Apaixonado por criar pontes entre pessoas.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/vt_norton" },
              { type: "github", url: "https://github.com/vtnorton" },
              { type: "instagram", url: "https://instagram.com/vt_norton" },
            ],
          },
        ]}
      >
        Fiquei horas viciado no Infinite Craft. Tão viciado que precisei arranjar uma desculpa no trabalho pra ficar jogando mais. Daí fiz um projeto pro trampo com ele.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Posso ser invadido só por jogar Counter-Strike?"
        date="2024-11-02"
        duration={25}
        members={[
          {
            name: "Renan Dias",
            image: `${assets}/speakers/renan-dias.jpg`,
            bio: "Cursando Defesa Cibernética na FIAP, atualmente sou Analista de Cybersegurança no Agibank e pesquisador de segurança nas horas vagas! Definitivamente, invadir e burlar jogos é meu maior hobby 😁",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/rez1ns" },
              { type: "github", url: "https://github.com/WHrez1ns" },
              { type: "linkedin", url: "https://www.linkedin.com/in/renan-dias-da-costa-563830264" },
              { type: "medium", url: "https://medium.com/@whrez1ns" },
            ],
          },
        ]}
      >
        Em 2017, pesquisadores encontraram uma vulnerabilidade no SDK da Valve que permitia acesso remoto ao computador do oponente caso ele morresse uma única vez na partida. Nessa talk, vou mostrar como.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Janta Grátis? Como Hackear Drones de Delivery, só pelo roleplay"
        date="2024-11-02"
        duration={45}
        members={[
          {
            name: "Luiz Custódio",
            image: `${assets}/speakers/luiz-custodio.jpeg`,
            bio: "Doutor em Ciência da Computação pela UEM, atualmente é techlead na Conviso Application Security e membro do MannaTeam desenvolvendo pesquisas em segurança em internet dos drones.",
            socialLinks: [
              { type: "github", url: "https://github.com/luhenrique06" },
              { type: "linkedin", url: "https://www.linkedin.com/in/luhenrique" },
              { type: "instagram", url: "https://www.instagram.com/luhenrique06" },
            ],
          },
        ]}
      >
        Drones de delivery, já é uma realidade. Já pensou como um hacker poderia roubar a sua janta hackeando um drone? Nesta talk vou mostrar para você como é simples.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="(Quase) tudo que você que você sabe sobre computadores (provavelmente) está errado"
        date="2024-11-02"
        duration={30}
        members={[
          {
            name: "Renato Alencar",
            image: `${assets}/speakers/renato-alencar.jpg`,
            bio: "Hacker Piauiense e fã de cajuína, com experiência em campeonatos de CTF, compiladores e jogos de azar.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/cajuinaoverflow" },
              { type: "github", url: "https://github.com/renatoalencar" },
              { type: "bluesky", url: "https://bsky.app/profile/cajuinaoverflow.bsky.social" },
            ],
          },
        ]}
      >
        Você acha que seu programa é compilado/executado diretamente em instruções sequenciais? Que computadores sempre funcionam só com zeros e uns? Você tá errado!
      </TimeSlot>

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

      <TimeSlot
        title="Hackeando roteadores na prática"
        date="2024-11-03"
        hours="14:00"
        duration={210}
        members={[
          {
            name: "Renato Alencar",
            image: `${assets}/speakers/renato-alencar.jpg`,
            bio: "Hacker Piauiense, fã de cajuína e jogador de CTF.",
            socialLinks: [
              { type: "twitter", url: "https://www.twitter.com/cajuinaoverflow" },
              { type: "github", url: "https://www.github.com/renatoalencar" },
              { type: "bluesky", url: "https://bsky.app/profile/cajuinaoverflow.bsky.social" },
            ],
          },
        ]}
      >
        Como explorar e achar vulnerabilidades em um roteador em uma situação real. Vamos pegar vários roteadores, abrir, extrair firmware, fazer engenharia reversa e tentar conseguir um shell.
      </TimeSlot>

      <TimeSlot
        title="Painel: Urna Eletrônica e Segurança Eleitoral"
        date="2024-11-03"
        hours="18:00"
        duration={45}
        members={[
          {
            name: "Pedro Castilho (líder do painel)",
            image: `${assets}/speakers/pedro-castilho.jpeg`,
            bio: 'Pedro Castilho (<a href="https://bsky.app/profile/coprodu.to">@coproduto</a>) é um desenvolvedor de software. Ele passa a maior parte de seu tempo trabalhando na <a href="https://www.cumbuca.com">Cumbuca</a>, escrevendo código em Elixir ou pensando um pouco sobre computadores rodando silenciosamente dentro de suas fontes.',
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/coproduto" },
              { type: "github", url: "https://www.github.com/coproduto"},
              { type: "linkedin", url: "https://www.linkedin.com/in/pcstl"},
              { type: "bluesky", url: "https://bsky.app/profile/coprodu.to"},
            ],
          },
          {
            name: "Lucas Lago",
            image: `${assets}/speakers/lucas-lago.jpeg`,
            bio: "Mestre em Engenharia da Computação, ativista no Instituto Aaron Swartz e co-autor de dois relatórios desmascarando ataques às urnas nas eleições de 2022.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/lucaslago" },
              { type: "bluesky", url: "https://bsky.app/profile/lucaslago.projeto7c0.com.br" },
            ],
          },
          {
            name: "Marcos Simplicio",
            image: `${assets}/speakers/marcos-simplicio.png`,
            bio: "Recebeu doutorado em Engenharia Elétrica/Computação na USP (2010) - Universidade de São Paulo, Escola Politécnica, e atualmente é Professor Associado e pesquisador na mesma instituição. Está envolvido em projetos relacionados à cibersegurança desde 2007, cobrindo cenários como sistemas de votação eletrônica, redes veiculares, computação em nuvem, sistemas de transmissão de dados multimídia, redes peer-to-peer (P2P), mobile health, armazenamento seguro de senhas, transações bancárias, blockchain, e IoT. Resultou em mais de cem publicações relacionadas à cibersegurança, incluindo artigos acadêmicos premiados, patentes internacionais e padrões internacionais. ",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/marcos-simplicio-a2263822" },
              { type: "googleScholar", url: "https://scholar.google.com.br/citations?user=E7n_ohsAAAAJ"}
            ],
          },
          {
            name: "Eduardo Lopes Cominetti",
            image: `${assets}/speakers/eduardo-lopes-cominetti.jpg`,
            bio: "Doutor em Engenharia da Computação pela Escola Politécnica da USP. Sua tese de doutorado trata da elaboração de sistemas de verificação fim-a-fim para o aprimoramento do sistema de votação brasileiro. É participante do projeto USP-TSE com enfoque na segurança do sistema eletrônico de votação. Além deste projeto, trabalha no desenvolvimento e implementação de algoritmos de criptografia resistentes a ataques de computadores quânticos, conhecidos como algoritmos pós-quânticos.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/ECominetti" },
              { type: "googleScholar", url: "https://scholar.google.com/citations?user=CVwL_CgAAAAJ" },
            ],
          },
        ]}
      >
        <p>Estamos cheios de eleições esse ano!</p>
        <p>Tivemos as polêmicas na eleição da Venezuela, em Outubro teremos eleição no Brasil, e em Novembro a eleição nos EUA.</p>
        <p>No meio do turbilhão de informação e desinformação, nós precisamos ser serenos e discutir esse assunto do ponto de vista técnico, com pesquisadores de urna eletrônica e segurança eleitoral.</p>
      </TimeSlot>
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

  a {
    color: rgb(159, 91, 1);
  }
</style>
