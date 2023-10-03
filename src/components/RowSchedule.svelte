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
