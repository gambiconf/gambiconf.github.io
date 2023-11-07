<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import Fa from "svelte-fa/src/fa.svelte"
  import FaLayers from "svelte-fa/src/fa-layers.svelte"
  import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
  import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
  import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
  import { t } from "../store/locale"
  import Window from "./Window.svelte"
  import TimeSlot from "./TimeSlot.svelte"
</script>

<div id="schedule">
  <Window title={$t("schedule--title")}>
    <article class="content">
      <h3><Localized id="schedule--25-november" /></h3>

      <TimeSlot
        title={$t("schedule--presentation-opening-ceremony-first-day-title")}
        date="2023-11-25"
        hours="10:00"
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
        ]}
      >
        <Localized id="schedule--presentation-opening-ceremony-first-day-description" />
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Serial Experiments Anne"
        date="2023-11-25"
        duration={45}
        members={[
          {
            name: "Anne",
            image: `${assets}/speakers/anne.jpeg`,
            bio: "Head of Gambiarra / entusiasta de software embarcado e de kernel dev",
            socialLinks: [
              { type: "github", url: "https://github.com/retpolanne" },
            ],
          },
        ]}
      >
        Um monte de aventuras aleatórias envolvendo COM ports, RS232, UART e outras gambiarras.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Multi-Talking (não é um typo!) com Genaver"
        date="2023-11-25"
        duration={30}
        members={[
          {
            name: "Dave Aronson",
            image: `${assets}/speakers/dave-aronson.jpeg`,
            bio: "Dave é consultor de desenvolvimento de software semi-aposentado, palestrante internacional (e.g., GambiConf 2022), e cervejeiro de hidromel, perto de Washington, DC, EUA.  Ele está aprendendo o português, e fará sua primeira palestra fora do inglês!",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/DaveAronson" },
              { type: "github", url: "https://github.com/DaveAronson" },
              { type: "linkedin", url: "https://www.linkedin.com/in/DaveAronson" },
              { type: "facebook", url: "https://www.facebook.com/dare2xl" }
            ],
          },
        ]}
      >
        Genaver é uma gambiarra para gerar rapidamente uma versão de uma palestra, customizada para uma conferência e
        cabendo numa duração. Isto é a historia de por que eu a criei, como funciona, e como usá-la.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Imprimir voto é gambiarra?"
        date="2023-11-25"
        duration={45}
        members={[
          {
            name: "Lucas Lago",
            image: `${assets}/speakers/lucas-lago.jpeg`,
            bio: "Mestre em Engenharia da Computação, ativista no Instituto Aaron Swartz e co-autor de dois relatórios desmascarando ataques as urnas nas eleições de 2022.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/lucaslago" },
              { type: "website", url: "https://bsky.app/profile/lucaslago.projeto7c0.com.br" },
            ],
          },
        ]}
      >
        Vamos fazer um giro sobre o mundo das tecnologias eleitorais, passando por boas ideias,
        péssimas ideias, criptografia de ponta e péssimas metáforas.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Sim, existe almoço grátis: Como hackeamos uma vending machine em 3 dias"
        date="2023-11-25"
        duration={20}
        members={[
          {
            name: "Gabriel Barbosa (Gabu)",
            image: `${assets}/speakers/gabu.png`,
            bio: "Profissional com 5 anos de experiência em Pentest Web, Mobile e AppSec. Professor na FIAP. Criação de conteúdo de InfoSec e interesse por Homebrew de consoles.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/gabu_sec" },
              { type: "linkedin", url: "https://www.linkedin.com/in/gabrielbarbosasouza/" },
            ],
          },
        ]}
      >
        Como burlamos o processo de compra numa vending machine através de vulnerabilidades encontradas na implementação do Bluetooth da máquina
        - assim conseguindo snacks grátis :)
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="WAF Wars: A arte de bloquear ataques enquanto toma um cafezinho"
        date="2023-11-25"
        duration={20}
        members={[
          {
            name: "Marcus Limna",
            image: `${assets}/speakers/marcus-limna.jpeg`,
            bio: "Há 10 anos desenvolve programas de qualidade duvidosa. Nas horas vagas, jogador de RPG que nunca lembra dos nomes dos NPCs",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/Marcsvll" },
              { type: "github", url: "https://www.github.com/marcsvll" },
            ],
          },
        ]}
      >
        Mergulhe no mundo de webassembly para proxies e descubra como um WAF pode dançar salsa com diferentes tecnologias de proxy 🕺💃 
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Hackeando roteadores domesticos"
        date="2023-11-25"
        duration={30}
        members={[
          {
            name: "Renato Alencar",
            image: `${assets}/speakers/renato-alencar.jpg`,
            bio: "Fã de cajuína e hacking, programador OCaml diretamente do Piauí.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/cajuinaoverflow" },
              { type: "github", url: "https://github.com/renatoalencar" },
            ],
          },
        ]}
      >
        Achando um roteador comum shodan, comprando ele no mercado livre e achando uma vulnerabilidade facilmente.
        Nessa talk faço um breve introdução a hardware hacking.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Da para fazer QR code na mão, Igual aos incas e os maias?"
        date="2023-11-25"
        duration={30}
        members={[
          {
            name: "Danillo Bosco",
            image: `${assets}/speakers/danillo-bosco.jpeg`,
            bio: "Bacharel em sistemas de informação, apaixonado por tecnologia e cultura maker. Streamer nas horas vagas. GaMbIaRa Is My PaSsIoN",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/Tearing5tv" },
              { type: "github", url: "https://github.com/danillo523" },
              { type: "twitch", url: "https://www.twitch.tv/tearing5" },
              { type: "instagram", url: "https://www.instagram.com/danillobosco" },
              { type: "linkedin", url: "https://www.linkedin.com/in/danillobosco" },
              { type: "website", url: "https://5tr.in" },
            ],
          },
        ]}
      >
        Quem precisa de gerador de QR Code, né? Bora destrinchar os QR codes a fundo e no fim ser capaz de fazer um na mão.
        Habilidate inútil? Até você precisar.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="HVM - uma arquitetura massivamente paralela"
        date="2023-11-25"
        duration={45}
        members={[
          {
            name: "Victor Taelin",
            image: `${assets}/speakers/victor-taelin.png`,
            bio: "Programador veterano e entusiasta em modelos de computação, Victor Taelin busca sempre questionar a maneira como as coisas são feitas, utilizando a elegância matemática como principal heurística em sua busca por ideias inovadoras.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/VictorTaelin" },
              { type: "github", url: "https://github.com/VictorTaelin" },
            ],
          },
        ]}
      >
        Tudo que você precisa saber sobre o modelo computacional que almeja redefinir a maneira como computadores são arquitetados.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="A Rust desenferrujou o Flash Player"
        date="2023-11-25"
        duration={30}
        members={[
          {
            name: "Leo Cavalcante",
            image: `${assets}/speakers/leo-cavalcante.jpeg`,
            bio: "Há mais de 15 anos atuando com engenharia de software, é Staff Engineer na PicPay, evangelista do PHP, membro dos projetos Swoole e Hyperf, representante na PHP-FIG (PHP Framework Interop Group) e idealizador da organização OpenCodeCo.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/leocavalcante" },
              { type: "github", url: "https://github.com/leocavalcante" },
              { type: "linkedin", url: "https://www.linkedin.com/in/leocavalcantee" },
            ],
          },
        ]}
      >
        Apresentando a Ruffle: como a linguagem Rust emulou o Flash Player nos navegadores usando WebAssembly.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Arquiteturas Antigas"
        date="2023-11-25"
        duration={30}
        members={[
          {
            name: "Jecel Mattos",
            image: `${assets}/speakers/jecel-mattos.jpeg`,
            bio: "Depois de desenvolver vários computadores originais nos anos 1980 (o que era raro no Brasil) se formou em microeletrônica pela Poli-USP em 1990. Continua criando computadores e circuitos integrados.",
            socialLinks: [
              { type: "github", url: "https://github.com/jeceljr" },
              { type: "hackerNews", url: "https://news.ycombinator.com/user?id=jecel" },
              { type: "website", url: "https://slashdot.org/~Jecel+Assumpcao+Jr" },
            ],
          },
        ]}
      >
        "Arquitetura de computador" é como o programador vê a máquina independentemente de como ela realmente é implementada.
        Conhecer o passado ajuda a imaginar o futuro - como surgiram o que usamos hoje?
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Keynote: Como dizia um sábio chinês: malware bom usa BPF"
        date="2023-11-25"
        duration={30}
        members={[
          {
            name: "Fernando Mercês",
            image: `${assets}/speakers/fernando-merces.png`,
            bio: 'Fernando é Pesquisador de Ameaças na Trend Micro, onde atua como investigador de ciber crime, utilizando engenharia reversa e técnicas de inteligência de ameaças no time de Pesquisa de Ameaças Futuras (FTR). Criador de várias ferramentas livres na área, com frequência apresenta suas pesquisas nos principais eventos de segurança no Brasil e no exterior. É também professor e fundador da Mente Binária, uma instituição de ensino e pesquisa sem fins lucrativos comprometida com o ensino de computação no Brasil.',
            socialLinks: [
              { type: "github", url: "https://github.com/merces" },
              { type: "twitter", url: "https://twitter.com/mer0x36" },
              { type: "googleScholar", url: "https://scholar.google.com/citations?user=R0gYgvoAAAAJ" },
              { type: "website", url: "https://www.mentebinaria.com.br/" },
            ],
          },
        ]}
      >
        <p>Certamente você já ouviu falar em BPF. Mesmo que não tenha ouvido, já usou com certeza.</p>
        <p>Do ponto de vista dos sysadmins, BPF é uma bênção desde a rapidez com que este tipo de código inspeciona pacotes, na sua versão clássica, até as capacidades incríveis de observabilidade com baixa interferência de desempenho do eBPF.</p>
        <p>No entanto, não é só sysadmin que gosta. Nesta palestra, vou explicar como um grupo de ataque atribuído à China passou a usar BPF para esconder suas backdoors instaladas em servidores de grandes empresas de telecomunicações em países como Turquia e Hong Kong. Mostrarei também como analisei os diversos samples que encontrei e como os categorizei de acordo com o código BPF clássico que eles inserem no kernel. No momento de escrita desta palestra, a backdoor segue ativa e vitimizando.</p>
        <p>Acredito que qualquer administrador de sistema Linux preocupado com a segurança de seus sistemas precisa saber mais sobre ela, uma vez que a técnica já migrou para outros malwares, inclusive no Brasil!</p>
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <h3><Localized id="schedule--26-november" /></h3>

      <TimeSlot
        title={$t("schedule--presentation-opening-ceremony-second-day-title")}
        date="2023-11-26"
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
        title="Teika From Scratch"
        date="2023-11-26"
        hours="14:00"
        duration={210}
        members={[
          {
            name: "Eduardo Rafael",
            image: `${assets}/speakers/eduardo-rafael.jpeg`,
            bio: "Programador, Hacker e anti floating point. Trabalhando muito para matar o JavaEscripto.",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/TheEduardoRFS" },
              { type: "github", url: "https://github.com/EduardoRFS" },
            ],
          },
        ]}
      >
        Implementando estruturas de dados e integrações básicas para uma linguagem nova e um pouco diferente.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Contribuindo com um Bot do Discord"
        date="2023-11-26"
        hours="14:00"
        duration={210}
        members={[
          {
            name: "Gabriel Pereira Falcão",
            image: `${assets}/speakers/gabriel-pereira.jpeg`,
            bio: "Estudante de Ciência da Computação na UFMS, Desenvolvedor de bots, entusiasta de Robótica, Open-source e Programação Competitiva e dono de gato!",
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/falcao__g" },
              { type: "github", url: "https://github.com/falcao-g"},
              { type: "linkedin", url: "https://www.linkedin.com/in/falcao-g" },
            ],
          },
        ]}
      >
        Aprenda como funcionam bots do Discord e contribua com o Falbot, um bot open-source com foco em economia usando Javascript e MongoDB!
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Implementando RT ou reply no @sseramemes"
        date="2023-11-26"
        hours="14:00"
        duration={210}
        members={[
          {
            name: "Pedro Arantes",
            image: `${assets}/speakers/pedro-arantes.png`,
            bio: 'Criador do <a href="https://twitter.com/sseramemes">@sseramemes</a>. The zueira never ends.',
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/arantespp" },
              { type: "github", url: "https://github.com/arantespp"},
              { type: "linkedin", url: "https://linkedin.com/in/arantespp"},
              { type: "instagram", url: "https://instagram.com/arantespp_"},
              { type: "website", url: "https://arantespp.com/" },
            ],
          },
        ]}
      >
        Hoje o <a href="https://twitter.com/sseramemes">@sseramemes</a> não tem a funcionalidade de reply, apenas RT.
        Precisamos implementá-la porque replies geram muitas visualizações.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <TimeSlot
        title="Painel: Rinhas de Devs"
        date="2023-11-26"
        hours="18:00"
        duration={45}
        members={[
          {
            name: "Pedro Castilho (líder do painel)",
            image: `${assets}/speakers/pedro-castilho.jpeg`,
            bio: 'Pedro Castilho (<a href="https://twitter.com/coproduto">@coproduto</a>) é um desenvolvedor de software. Ele passa a maior parte de seu tempo trabalhando na <a href="https://twitter.com/appcumbuca">@appcumbuca</a>, escrevendo código em Elixir ou pensando um pouco sobre computadores rodando silenciosamente dentro de suas fontes.',
            socialLinks: [
              { type: "twitter", url: "https://twitter.com/coproduto" },
              { type: "github", url: "https://www.github.com/coproduto"},
              { type: "linkedin", url: "https://www.linkedin.com/in/pcstl"},
            ],
          },
          {
            name: "Sofia Rodrigues",
            image: `${assets}/speakers/sofia-rodrigues.jpeg`,
            bio: 'Programadora Rust entusiasta de compiladores e linguagens funcionais.',
            socialLinks: [
              { type: 'twitter', url: 'https://twitter.com/algebraic_sofia' },
              { type: 'github', url: 'https://github.com/algebraic-sofia' },
              { type: 'website', url: 'https://algebraic.dev/' },
            ],
          },
          {
            name: "Gabi Guimarães",
            image: `${assets}/speakers/gabi-guimaraes.jpeg`,
            bio: 'Eu sou uma garota trans e autista que é apaixonada por type theory, gosta de Rust e Clojure. E eu gosto de pão frances',
            socialLinks: [
              { type: 'twitter', url: 'https://twitter.com/algebraic_gabi' },
              { type: 'github', url: 'https://github.com/aripiprazole' },
              { type: 'linkedin', url: 'https://www.linkedin.com/in/aripiprazole' },
              { type: 'website', url: 'https://aripiprazole.dev/' },
            ],
          },
          {
            name: "Felippe Regazio",
            image: `${assets}/speakers/felippe-regazio.jpeg`,
            bio: 'Engenheiro de software, especialista frontend, generalista curioso, platform dx, open sourcerer, pai. Uma estranha forma de vida baseada em carbono.',
            socialLinks: [
              { type: 'twitter', url: 'https://twitter.com/FelippeRegazio' },
              { type: 'github', url: 'https://github.com/felippe-regazio' },
              { type: 'linkedin', url: 'https://www.linkedin.com/in/felippe-regazio' },
              { type: 'website', url: 'https://felipperegazio.com/' },
            ],
          },
          {
            name: "Francisco Zanfranceschi",
            image: `${assets}/speakers/francisco-zanfranceschi.png`,
            bio: 'Entusiasta da engenharia de software que passou a maior parte da vida trabalhando com arquitetura de sistemas e atualmente trabalha no Nubank sofrendo com Clojure e sistemas distribuídos.',
            socialLinks: [
              { type: 'twitter', url: 'https://twitter.com/zanfranceschi' },
              { type: 'linkedin', url: 'https://www.linkedin.com/in/francisco-zanfranceschi/' },
              { type: 'website', url: 'https://dev.to/zanfranceschi' },
            ],
          },
        ]}
      >
        <p>Nos últimos meses, começamos a ter algo divertido na comunidade tech: rinhas!</p>
        <p>Partindo da rinha de backend, passando pra de compiladores, e chegando na de front.</p>
        <p>Então, que tal a gente discutir sobre elas, junto de quem está por trás delas?</p>
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
</style>
