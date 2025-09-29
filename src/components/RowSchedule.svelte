<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import { utmSource } from "../utils/constants"
  import Window from "./Window.svelte"
  import TimeSlot from "./TimeSlot.svelte"
  import Link from "./Link.svelte"
  import GambiConfSocialLinks from "./GambiConfSocialLinks.svelte"
  import Fa from "svelte-fa"
  import { faMapLocation } from "@fortawesome/free-solid-svg-icons"
</script>

<div id="schedule">
  <Window title={t("schedule--title")}>
    <article class="content">
      <h3><Localized id="schedule--first-day" /></h3>

      <TimeSlot
        title="Abertura dos portões"
        date="2024-11-02"
        hours="9:00"
        duration={20}
        members={[]}
      >
        Nesse dia, o evento acontecerá na TOTVS - <Link
          href="https://maps.app.goo.gl/PadW6Y4RLhYqxz796"
          externalIcon
        >
          <Fa icon={faMapLocation} />
          Ver Mapa
        </Link>
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title={t("schedule--presentation-opening-ceremony-first-day-title")}
        date="2024-11-02"
        hours="9:20"
        duration={25}
        members={[
          {
            name: "Bruno Macabeus",
            image: `${assets}/speakers/bruno-macabeus.jpeg`,
            bio: t("schedule--presentation-opening-ceremony-first-day-bio"),
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
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Usando Clojure para Gerar Javascript para rodar Clojure que Executa Ruby (e Python)"
        date="2024-11-29"
        hours="9:50"
        duration={30}
        members={[
          {
            name: "Maurício Szabo",
            image: `${assets}/speakers/mauricio-szabo.jpg`,
            bio: "Desenvolvedor poliglota, apaixonado por desenvolvimento interativo e feedback cycles minúsculos, sigo tentando mudar alguns paradigmas sobre desenvolvimento.",
            socialLinks: [
              { type: "gitlab", url: "https://gitlab.com/mauricioszabo" },
              { type: "bluesky", url: "https://bsky.app/profile/mauricioszabo.bsky.social" },
            ],
          },
        ]}
      >
        Interactive coding (estilo LISP/Smalltalk) para linguagens tipo Ruby e Python? Sim, é
        possível, é melhor do que você imagina, já existe, e você já pode usar!
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Usando a VM do SQLite para criar uma linguagem de programação"
        date="2024-11-29"
        hours="10:25"
        duration={30}
        members={[
          {
            name: "Diego Reis",
            image: `${assets}/speakers/diego-reis.jpg`,
            bio: 'Estudante de Ciência da Computação, trabalha na <a href="https://x.com/tursodatabase">@tursodatabase</a> no desenvolvimento do Limbo, rewrite assíncrono do SQLite em Rust. Apaixonado por paçoca e usar ferramentas de forma que não foram pensadas.',
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/el_yawd" },
              { type: "github", url: "https://github.com/el-yawd" },
              { type: "linkedin", url: "https://www.linkedin.com/in/the-diego-reis" },
            ],
          },
        ]}
      >
        SQLite é o banco de dados mais utilizado do mundo e, internamente, uma VM é usada para
        executar as queries SQL. Assim, e se usássemos essa VM para criar uma linguagem de
        programação?
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Criando um MMO RPG com Erlang, PostgreSQL, Zig, Nix e muita gambiarra"
        date="2024-11-29"
        hours="11:00"
        duration={35}
        members={[
          {
            name: "Marcos Benevides",
            image: `${assets}/speakers/marcos-benevides.png`,
            bio: "Programador F#/OCaml, apreciador de Haskell, maximalista de Nix/NixOS",
            socialLinks: [
              { type: "github", url: "https://github.com/schonfinkel" },
              { type: "linkedin", url: "https://www.linkedin.com/in/schonfinkel" },
              {
                type: "stackoverflow",
                url: "https://stackoverflow.com/users/4614840/schonfinkel",
              },
            ],
          },
        ]}
      >
        A experiência (e os perrengues) de criar um MMO RPG utilizando uma combinação pouco
        convencional: Erlang, PostgreSQL, Zig e Nix. Gambiarras declarativas são inevitáveis.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Sala Secreta? Como verificar as eleições por você mesmo"
        date="2024-11-29"
        hours="11:40"
        duration={30}
        members={[
          {
            name: "Leonardo Toshinobu Kimura",
            image: `${assets}/speakers/leonardo-kimura.jpg`,
            bio: "Doutorando em Engenharia de Computação pela USP, pesquisando como deixar as eleições mais seguras e transparentes.",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/leonardo-kimura/" },
            ],
          },
        ]}
      >
        Muitas pessoas acreditam que o TSE manipula os votos durante a contagem. Nessa palestra,
        vamos ver na prática se isso é verdade.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <div class="break">
        <Localized id="schedule--lunch" />
      </div>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Games in PostScript – Play Chess Against Your Printer"
        date="2024-11-29"
        hours="13:40"
        duration={30}
        members={[
          {
            name: "Nicolas Seriot",
            image: `${assets}/speakers/nicolas-seriot.jpg`,
            bio: "Swiss software engineering manager. Fascinated by weird stuff and broken process. Nature lover, ultra-trail runner.",
            socialLinks: [
              { type: "twitter", url: "https://x.com/nst021" },
              { type: "github", url: "https://github.com/nst" },
              { type: "linkedin", url: "https://www.linkedin.com/in/nseriot" },
            ],
          },
        ]}
      >
        Write games in PostScript, the '80s printer language. Sokoban & Tetris running on desktop,
        Tic-Tac-Toe & Chess on printer, printer vs human.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="LEAN Fullstack: Codando no Assistente de Provas."
        date="2024-11-29"
        hours="14:15"
        duration={30}
        members={[
          {
            name: "Sofia Rodrigues",
            image: `${assets}/speakers/sofia-rodrigues.png`,
            bio: 'Oi!! Eu sou a Sofia, uma desenvolvedora de 22 anos apaixonada por compiladores e linguagens funcionais. Vivo estudando teoria de tipos e tentando aplicar na programação "real" especialmente nas minhas linguagens favoritas: Haskell e LEAN.',
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/algebraic_dev" },
              { type: "github", url: "https://github.com/algebraic-dev" },
            ],
          },
        ]}
      >
        Nessa talk, vamos ver os avanços recentes da Std da linguagem LEAN e como esses avanços a
        tornam não só um excelente assistente de prova, mas também uma ferramenta viável para
        programação.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Como tocar música com um monitor LCD e um rádio"
        date="2024-11-29"
        hours="14:50"
        duration={30}
        members={[
          {
            name: "Luana Barbosa",
            image: `${assets}/speakers/luana-barbosa.jpg`,
            bio: "Luana Barbosa (ela/dela) - formada em Ciência da Computação pelo IME-USP.",
            socialLinks: [{ type: "github", url: "https://github.com/luamfb" }],
          },
        ]}
      >
        Além de luz, monitores LCD também emitem ondas de rádio.<br />
        Usando um rádio AM e imagens específicas, é possível tocar uma sequência de notas.<br />
        Repositório no GitHub:
        <Link href="https://github.com/luamfb/tempest-lcd"
          >https://github.com/luamfb/tempest-lcd</Link
        >
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Web-Cafeteiras em Haskell: Implementando a RFC 2324"
        date="2024-11-29"
        hours="15:25"
        duration={30}
        members={[
          {
            name: "Pablo Gustavo Fernandes Maia",
            image: `${assets}/speakers/pablo-gustavo.jpeg`,
            bio: "Sou de Natal-RN, estudante de Tecnologia da Informação na UFRN, desenvolvedor full stack e curioso por natureza. Estou constantemente flertando com Ciências da Computação e Matemática.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/pablo1gustavo" },
              { type: "github", url: "https://github.com/Pablo1Gustavo" },
              { type: "linkedin", url: "https://www.linkedin.com/in/pablo-gustavo" },
            ],
          },
        ]}
      >
        Exploraremos a história do erro 418 "I'm a teapot", implementando um servidor web em
        Haskell e abordando temas como programação funcional e o protocolo HTTP.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <div class="break">
        <Localized id="schedule--coffe-break" />
      </div>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Go no PlayStation 2: como virar um péssimo dev de jogos"
        date="2024-11-29"
        hours="16:35"
        duration={40}
        members={[
          {
            name: "Ricardo Gomes",
            image: `${assets}/speakers/ricardo-gomes.jpg`,
            bio: "Dev backend formado em Ciência da Computação pela UFRGS e TU Berlin. Autor de infinitos projetos inacabados, faço mais gambiarras do que deveria ser permitido por lei e modifico eletrônicos por pura diversão - e até hoje só um pegou fogo!",
            socialLinks: [
              { type: "bluesky", url: "https://bsky.app/profile/rgsilva.com" },
              { type: "mastodon", url: "https://mas.to/@debugweshell" },
              { type: "website", url: "https://rgsilva.com/" },
            ],
          },
        ]}
      >
        Quem nunca pensou em desenvolver jogos né? E que tal usar Go e um PS2 para isso? É isso
        que vamos explorar nesta talk sobre gambiarras baremetal, hacks no compilador e até mesmo
        bugs da Sony!
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="ABC: Onde Python começou"
        date="2024-11-29"
        hours="17:20"
        duration={20}
        members={[
          {
            name: "Luciano Ramalho",
            image: `${assets}/speakers/luciano-ramalho.jpg`,
            bio: "Luciano Ramalho escreveu Fluent Python e ajudou a criar o Garoa Hacker Clube. Ramalho é foragido do IME/USP, de onde escapou logo no início de sua pena.",
            socialLinks: [
              { type: "github", url: "https://github.com/ramalho" },
              { type: "mastodon", url: "https://ciberlandia.pt/@lr" },
              { type: "website", url: "https://ramalho.org" },
            ],
          },
        ]}
      >
        Antes de criar Python, Guido van Rossum trabalhou anos na linguagem ABC, criada no centro
        de pesquisa CWI em Amsterdam.<br />
        Conheça ABC e veja a origem de ideias centrais de Python, como tuplas, o laço for e muito mais.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Dirty Hacks e Gambiarras Elegantes"
        date="2024-11-29"
        hours="17:45"
        duration={30}
        members={[
          {
            name: 'Felipe "Juca" Sanches',
            image: `${assets}/speakers/felipe-sanches.jpg`,
            bio: "Desenvolvedor de software livre, tanto profissionalmente, como também no tempo de lazer, desenvolvendo emuladores junto ao Projeto MAME.\nÉ co-fundador do Garoa Hacker Clube.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/juca_gnu" },
              { type: "github", url: "https://github.com/felipesanches" },
              { type: "youtube", url: "https://www.youtube.com/c/HappyHackingVideoBlog" },
              { type: "website", url: "https://forum.fiozera.com.br/" },
            ],
          },
        ]}
      >
        História de um apanhado de diversos projetos pessoais, desde a adolescência até os dias
        atuais.<br />
        Parte foi engavetada, outra concluída, e até houve casos que se transformaram em atuação profissional!
      </TimeSlot>

      <!-- <div class="break">
        <Localized id="schedule--upcoming" />

        <div class="gambiconf-social-links">
          <GambiConfSocialLinks
            largeScreenRows={1}
            smallScreenRows={1}
            exclude={["github", "youtube", "substack"]}
          />
        </div>
      </div> -->

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <h3><Localized id="schedule--second-day" /></h3>

      <TimeSlot
        title="Abertura dos portões"
        date="2024-11-02"
        hours="13:00"
        duration={30}
        members={[]}
      >
        Nesse dia, o evento acontecerá na USP, Campus Butantã, no auditório do IME - <Link
          href="https://maps.app.goo.gl/wYoFmYs39tzzmytn7"
          externalIcon
        >
          <Fa icon={faMapLocation} />
          Ver Mapa
        </Link>
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title={t("schedule--presentation-opening-ceremony-second-day-title")}
        date="2024-11-02"
        hours="13:30"
        duration={35}
        members={[
          {
            name: "Bruno Macabeus",
            image: `${assets}/speakers/bruno-macabeus.jpeg`,
            bio: t("schedule--presentation-opening-ceremony-first-day-bio"),
            socialLinks: [
              { type: "bluesky", url: "https://bsky.app/profile/macabeus.bsky.social" },
              { type: "twitter", url: "https://twitter.com/bmacabeus" },
              { type: "github", url: "https://github.com/macabeus" },
              { type: "website", url: "http://macabeus.github.io/" },
            ],
          },
        ]}
      >
        <Localized id="schedule--presentation-opening-ceremony-first-day-description" />
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <div class="break">
        <strong>Observação sobre os workshops:</strong>
        <span>
          Todos acontecerão simultaneamente. Então, no dia do evento, escolha apenas um para
          participar. Além disso, traga o seu notebook.
        </span>
      </div>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Videogames: das portas lógicas ao software"
        date="2024-11-30"
        hours="14:10"
        duration={210}
        members={[
          {
            name: "Jecel Mattos de Assumpção Júnior",
            image: `${assets}/speakers/jecel-mattos.jpg`,
            bio: "Depois de desenvolver vários computadores originais nos anos 1980 (o que era raro no Brasil), Jecel se formou em microeletrônica pela Poli-USP em 1990. Continua criando computadores e circuitos integrados.",
            socialLinks: [{ type: "github", url: "https://github.com/jeceljr" }],
          },
          {
            name: "Mário Gazziro",
            image: `${assets}/speakers/mario-gazziro.jpg`,
            bio: "Mario Gazziro é doutor em Física Computacional pela USP. É professor na Universidade Federal do ABC. Tem experiência na área de instrumentação eletrônica e ciência da computação, com ênfase em arquitetura de sistemas de computação.",
            socialLinks: [{ type: "youtube", url: "https://www.youtube.com/@mario.gazziro" }],
          },
        ]}
      >
        Este workshop usa o simulador Digital para mostrar como as portas lógicas podem ser usadas
        em blocos maiores até formar um videogame implementado numa placa FPGA.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Contribuindo com Open Source com a ajuda do GitHub Copilot"
        date="2024-11-30"
        hours="14:10"
        duration={210}
        members={[
          {
            name: "Pachi Parra",
            image: `${assets}/speakers/pachi-parra.jpg`,
            bio: "Pachi Parra atua como Developer Advocate no GitHub.  Palestra e cria pontes para tornar a tecnologia mais acessível, diversa e colaborativa.",
            socialLinks: [
              { type: "twitter", url: "http://twitter.com/pachicodes" },
              { type: "linkedin", url: "https://www.linkedin.com/in/pachicodes" },
              { type: "bluesky", url: "https://bsky.app/profile/abacatinhos.dev" },
              { type: "github", url: "https://github.com/pachicodes" },
            ],
          },
          {
            name: "Morganna Giovanelli",
            image: `${assets}/speakers/morganna-giovanelli.jpg`,
            bio: "Morganna espalha a palavra da Ada Lovelace por aí e, para ela, Pessoas > Tecnologia. Trabalha como Developer Advocate com plataformas de Inteligência Artificial e é reconhecida como Embaixadora LINUXtips.",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/morgannadev/" },
              { type: "bluesky", url: "https://bsky.app/profile/morgannadev.bsky.social" },
              { type: "github", url: "https://github.com/morgannadev" },
              { type: "website", url: "https://morganna.dev/" },
            ],
          },
          {
            name: "Samuel Henrique",
            image: `${assets}/speakers/samuel-henrique.jpg`,
            bio: "Samuel atua como Desenvolvedor Full-Stack e é membro ativo em várias comunidades de tecnologia. Está sempre buscando aprender mais, trocar experiências e colaborar com o crescimento coletivo do ecossistema tech.",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/sanarielsen/" },
              { type: "github", url: "https://github.com/Sanarielsen" },
            ],
          },
        ]}
      >
        Vamos aprendera usar o GitHub Copilot para contribuir com um projeto Open Source,
        passo-a-passo.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Extensibilidade do PostgreSQL"
        date="2024-11-30"
        hours="14:10"
        duration={210}
        members={[
          {
            name: "Fabrízio de Royes Mello",
            image: `${assets}/speakers/fabrizio-mello.jpg`,
            bio: "Sócio da Timbira Inteligência em PostgreSQL e Engenheiro de Software na TigerData desenvolvendo o TimescaleDB, uma extensão PostgreSQL para análises de alto desempenho em tempo real em séries temporais e dados de eventos.",
            socialLinks: [
              { type: "twitter", url: "http://twitter.com/fabriziomello" },
              { type: "linkedin", url: "https://www.linkedin.com/in/fabriziomello" },
              { type: "github", url: "http://github.com/fabriziomello" },
            ],
          },
          {
            name: "Dickson Guedes",
            image: `${assets}/speakers/dickson-guedes.jpg`,
            bio: "Consultor pela Timbira Inteligência em Postgres, atua na área de tecnologia há mais de 20 anos, experiência em software livre, banco de dados PostgreSQL e análise de dados. Entusiasta de IA e Computação Quântica, desenvolve em Python, Ruby e Rust.",
            socialLinks: [{ type: "linkedin", url: "https://www.linkedin.com/in/dicksonguedes" }],
          },
        ]}
      >
        O Postgres oferece inúmeros mecanismos de extensibilidade onde é possível, sem alterar seu
        núcleo, adicionar novas funcionalidades e até mesmo modificar comportamento existente.
        Bora criar uma extensão juntos?
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Minicurso de Kubernetes por Magalu Cloud"
        date="2024-11-30"
        hours="14:10"
        duration={210}
        members={[
          {
            name: "Fernando Ravagnani",
            image: `${assets}/speakers/fernando-ravagnani.jpeg`,
            bio: "Fernando está na área tech há mais de 25 anos, sendo que 22 foram na Magalu e Magalu Cloud. Pegou desde o começo do surgimento do devops e tem muita vivência para compartilhar.",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/fernando-ravagnani" },
            ],
          },
          {
            name: "Erivaldo Lopes",
            image: `${assets}/speakers/erivaldo-lopes.jpeg`,
            bio: "Erivaldo está há 19 anos no mercado de tecnologia, dos quais 13 foram dedicados em aprimorar ambientes de datacenter, com foco especial em cloud.",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/in/erivaldolopes" },
              { type: "website", url: "https://erivaldolopes.io" },
            ],
          },
        ]}
      >
        Veja na prática como usar kubernetes, do básico ao deploy na Magalu Cloud.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Introdução à programação com Python"
        date="2024-11-30"
        hours="14:10"
        duration={210}
        members={[
          {
            name: "PyLadies São Paulo",
            image: `${assets}/speakers/pyladies-saopaulo.png`,
            bio: "A PyLadies é uma comunidade global focada em aumentar a atividade e a liderança das mulheres na comunidade Python. O capítulo de SP nasceu em 2015, e desde então buscamos cumprir este objetivo através de encontros para ensinar e aprender Python ❤️",
            socialLinks: [
              { type: "linkedin", url: "https://www.linkedin.com/company/pyladiessp" },
              { type: "instagram", url: "https://www.instagram.com/pyladies.saopaulo" },
            ],
          },
        ]}
      >
        Neste workshop vamos introduzir conceitos básicos da programação como condição, repetição,
        funções e variáveis, utilizando o Python! Não é necessário saber programar em outras
        linguagens!
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Impressão 3d completo: modelagem, fatiamento, acabamento, e comércio"
        date="2024-11-30"
        hours="14:10"
        duration={210}
        members={[
          {
            name: "Marco Worms",
            image: `${assets}/speakers/marco-worms.jpg`,
            bio: "Trabalho há mais de 10 anos no setor de tecnologia, ja trabalhei como desenvolvedor, gestor, recrutador, e até em lugares onde quase todos são anônimos, gosto muito de Ethereum, Bitcoin, Impressão 3d, Drones, e IA, não necessariamente nessa ordem!",
            socialLinks: [
              { type: "github", url: "https://www.github.com/MarcoWorms" },
              { type: "instagram", url: "https://www.instagram.com/worms.fpv" },
            ],
          },
        ]}
      >
        Um guia completo de como funciona o processo de criação de uma peça em 3d, quais
        ferramentas aprender, e como cada passo impacta a comercialização de uma peça.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="Linguagens de Domínio Específico Embarcadas"
        date="2024-11-30"
        hours="14:10"
        duration={210}
        members={[
          {
            name: "Pedro Castilho",
            image: `${assets}/speakers/pedro-castilho.jpeg`,
            bio: "Castilho programa há mais de 15 anos, é viciado em programação funcional e acredita veementemente que é possível melhorar como criamos software. Aplica programação funcional no mundo real como CTO da Cumbuca.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/coproduto" },
              { type: "github", url: "https://github.com/coproduto" },
              { type: "linkedin", url: "https://www.linkedin.com/in/pcstl" },
              { type: "bluesky", url: "https://bsky.app/profile/coprodu.to" },
            ],
          },
        ]}
      >
        Linguagens de Domínio Específico são uma das técnicas mais poderosas e robustas de
        construção de software complexo. Vamos aprender na prática como e quando criá-las <strong
          >dentro da sua lang favorita</strong
        >.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <div class="break">
        <Localized id="schedule--coffe-break" />
      </div>

      <div class="division-wrapper">
        <div class="division"></div>
      </div>

      <TimeSlot
        title="[Painel]"
        date="2024-11-03"
        hours="18:20"
        duration={45}
        hasParagraph
        members={[]}
      >
        O painel será anunciado em Novembro. Siga nossas redes sociais para ser o primeiro a saber
        quando sair!

        <center>
          <div class="gambiconf-social-links">
            <GambiConfSocialLinks
              largeScreenRows={1}
              smallScreenRows={1}
              exclude={["github", "youtube", "substack"]}
            />
          </div>
        </center>
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

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .gambiconf-social-links {
    padding-top: 10px;
    max-width: 300px;
  }
</style>
