<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import Link from "./Link.svelte"
  import GambiConfSocialLinks from "./GambiConfSocialLinks.svelte"
</script>

<footer>
  <div class="content-wrapper">
    <div class="column contact-col">
      <a href="/">
        <img src={asset("/logo.png")} alt="GambiConf" class="logo-small" />
      </a>
      <h3><Localized id="footer--contacts" /></h3>
      <Link href="mailto:mambi@gambiconf.dev" variant="secondary">mambi@gambiconf.dev</Link>
    </div>

    <div class="column">
      <h3><Localized id="footer--links" /></h3>
      <nav>
        <Link href="https://gambiconf.substack.com" variant="secondary" target="_blank" rel="noopener noreferrer">
          <Localized id="footer--blog" />
        </Link>
        <Link href="/previous-editions" variant="secondary"><Localized id="footer--previous-editions" /></Link>
        <Link href="/code-of-conduct" variant="secondary"><Localized id="footer--code-of-conduct" /></Link>
      </nav>
    </div>

    <div class="column social-col">
      <div class="social-icons">
        <GambiConfSocialLinks largeScreenRows={2} smallScreenRows={1} exclude={["substack"]} />
      </div>
    </div>

    <div class="partner-col">
      <a href="/mediakit.pdf" target="_blank" rel="noopener noreferrer">
        <img src={asset("/seja-parceiro.png")} alt="Seja nosso parceiro" class="partner-image" />
      </a>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 40px 0 32px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 10vw;
  }

.column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    text-align: center;
  }

  h3 {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 0 4px;
    opacity: 0.45;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .logo-small {
    height: 56px;
    display: block;
  }

  .social-col {
    gap: 12px;
    align-items: center;
  }

  .contact-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .social-icons :global(.social-links-container) {
    gap: 8px;
  }

  .social-icons :global(.social-media-icon) {
    font-size: 1.05em;
  }

  .partner-col {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .partner-image {
    height: 110px;
    display: block;
    transition: opacity 0.2s;
  }

  .partner-image:hover {
    opacity: 0.85;
  }

  :global(footer a) {
    font-size: 0.95rem;
  }

  @media screen and (min-width: 768px) {
    .content-wrapper {
      flex-direction: row;
      align-items: flex-start;
      gap: 48px;
      padding: 0;
    }

    .column {
      text-align: left;
      width: auto;
      flex: 1;
    }

    .social-col {
      align-items: flex-start;
    }

    .contact-col {
      text-align: left;
      align-items: flex-start;
    }

    .partner-col {
      flex-shrink: 0;
      align-items: flex-start;
    }
  }
</style>
