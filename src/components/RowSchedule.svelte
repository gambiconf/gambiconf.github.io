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
            bio: $t("schedule--presentation-opening-ceremony-first-day-bio"),
          },
        ]}
        image={`${assets}/speakers/bruno-macabeus.jpeg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/bmacabeus" },
          { type: "github", url: "https://github.com/macabeus" },
          { type: "website", url: "http://macabeus.github.io/" },
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
            bio: "Head of Gambiarra / entusiasta de software embarcado e de kernel dev",
          },
        ]}
        image={`${assets}/speakers/anne.jpeg`}
        socialLinks={[
          { type: "github", url: "https://github.com/retpolanne" },
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
            bio: "Dave é consultor de desenvolvimento de software semi-aposentado, palestrante internacional (e.g., GambiConf 2022), e cervejeiro de hidromel, perto de Washington, DC, EUA.  Ele está aprendendo o português, e fará sua primeira palestra fora do inglês!",
          },
        ]}
        image={`${assets}/speakers/dave-aronson.jpeg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/DaveAronson" },
          { type: "github", url: "https://github.com/DaveAronson" },
          { type: "linkedin", url: "https://www.linkedin.com/in/DaveAronson" },
          { type: "facebook", url: "https://www.facebook.com/dare2xl" }
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
            bio: "Mestre em Engenharia da Computação, ativista no Instituto Aaron Swartz e co-autor de dois relatórios desmascarando ataques as urnas nas eleições de 2022.",
          },
        ]}
        image={`${assets}/speakers/lucas-lago.jpeg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/lucaslago" },
          { type: "website", url: "https://bsky.app/profile/lucaslago.projeto7c0.com.br" },
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
            bio: "Profissional com 5 anos de experiência em Pentest Web, Mobile e AppSec. Professor na FIAP. Criação de conteúdo de InfoSec e interesse por Homebrew de consoles.",
          },
        ]}
        image={`${assets}/speakers/gabu.png`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/gabu_sec" },
          { type: "linkedin", url: "https://www.linkedin.com/in/gabrielbarbosasouza/" },
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
            bio: "Há 10 anos desenvolve programas de qualidade duvidosa. Nas horas vagas, jogador de RPG que nunca lembra dos nomes dos NPCs",
          },
        ]}
        image={`${assets}/speakers/marcus-limna.jpeg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/Marcsvll" },
          { type: "github", url: "https://www.github.com/marcsvll" },
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
            bio: "Fã de cajuína e hacking, programador OCaml diretamente do Piauí.",
          },
        ]}
        image={`${assets}/speakers/renato-alencar.jpg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/cajuinaoverflow" },
          { type: "github", url: "https://github.com/renatoalencar" },
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
            bio: "Bacharel em sistemas de informação, apaixonado por tecnologia e cultura maker. Streamer nas horas vagas. GaMbIaRa Is My PaSsIoN",
          },
        ]}
        image={`${assets}/speakers/danillo-bosco.jpeg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/Tearing5tv" },
          { type: "github", url: "https://github.com/danillo523" },
          { type: "twitch", url: "https://www.twitch.tv/tearing5" },
          { type: "instagram", url: "https://www.instagram.com/danillobosco" },
          { type: "linkedin", url: "https://www.linkedin.com/in/danillobosco" },
          { type: "website", url: "https://5tr.in" },
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
            bio: "Programador veterano e entusiasta em modelos de computação, Victor Taelin busca sempre questionar a maneira como as coisas são feitas, utilizando a elegância matemática como principal heurística em sua busca por ideias inovadoras.",
          },
        ]}
        image={`${assets}/speakers/victor-taelin.png`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/VictorTaelin" },
          { type: "github", url: "https://github.com/VictorTaelin" },
        ]}
      >
        Tudo que você precisa saber sobre o modelo computacional que almeja redefinir a maneira como computadores são arquitetados.
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <div class="break">
        <Localized id="schedule--upcoming" />

        <div class="social-links-container">
          <a
            href="https://twitter.com/gambiconf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="social-media-icon"
          >
            <FaLayers size="2x">
              <Fa icon={faTwitter} />
            </FaLayers>
          </a>

          <a
            href="https://www.linkedin.com/company/gambiconf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            class="social-media-icon"
          >
            <FaLayers size="2x">
              <Fa icon={faLinkedin} />
            </FaLayers>
          </a>

          <a
            href="https://www.instagram.com/gambiconf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="social-media-icon"
          >
            <FaLayers size="2x">
              <Fa icon={faInstagram} />
            </FaLayers>
          </a>
        </div>
      </div>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <h3><Localized id="schedule--26-november" /></h3>

      <TimeSlot
        title={$t("schedule--presentation-opening-ceremony-second-day-title")}
        date="2023-11-26"
        hours="14:00"
        duration={20}
        members={[
          {
            name: "Bruno Macabeus",
          },
        ]}
        image={`${assets}/speakers/bruno-macabeus.jpeg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/bmacabeus" },
          { type: "github", url: "https://github.com/macabeus" },
          { type: "website", url: "http://macabeus.github.io/" },
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
        hours="14:25"
        duration={180}
        members={[
          {
            name: "Eduardo Rafael",
            bio: "Programador, Hacker e anti floating point. Trabalhando muito para matar o JavaEscripto.",
          },
        ]}
        image={`${assets}/speakers/eduardo-rafael.jpeg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/TheEduardoRFS" },
          { type: "github", url: "https://github.com/EduardoRFS" },
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
        hours="14:25"
        duration={180}
        members={[
          {
            name: "Gabriel Pereira Falcão",
            bio: "Estudante de Ciência da Computação na UFMS, Desenvolvedor de bots, entusiasta de Robótica, Open-source e Programação Competitiva e dono de gato!",
          },
        ]}
        image={`${assets}/speakers/gabriel-pereira.jpeg`}
        socialLinks={[
          { type: "twitter", url: "https://twitter.com/falcao__g" },
          { type: "github", url: "https://github.com/falcao-g"},
          { type: "linkedin", url: "https://www.linkedin.com/in/falcao-g" },
        ]}
      >
        Aprenda como funcionam bots do Discord e contribua com o Falbot, um bot open-source com foco em economia usando Javascript e MongoDB!
      </TimeSlot>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <div class="break">
        <Localized id="schedule--upcoming" />

        <div class="social-links-container">
          <a
            href="https://twitter.com/gambiconf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="social-media-icon"
          >
            <FaLayers size="2x">
              <Fa icon={faTwitter} />
            </FaLayers>
          </a>

          <a
            href="https://www.linkedin.com/company/gambiconf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            class="social-media-icon"
          >
            <FaLayers size="2x">
              <Fa icon={faLinkedin} />
            </FaLayers>
          </a>

          <a
            href="https://www.instagram.com/gambiconf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="social-media-icon"
          >
            <FaLayers size="2x">
              <Fa icon={faInstagram} />
            </FaLayers>
          </a>
        </div>
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
