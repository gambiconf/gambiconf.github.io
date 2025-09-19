<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import Link from "./Link.svelte"
  import GambiConfSocialLinks from "./GambiConfSocialLinks.svelte"
</script>

<footer>
  <div class="content-wrapper">
    <div>
      <img src={`${assets}/logo.png`} alt="Logo" class="logo-image" />
    </div>

    <div class="column-content">
      <h1><Localized id="footer--site-map" /></h1>

      <div>
        <Link href="/" variant="secondary"><Localized id="footer--home" /></Link>
        <Link href="/#about" variant="secondary"><Localized id="footer--about" /></Link>
        <Link href="/previous-editions" variant="secondary"
          ><Localized id="footer--previous-editions" /></Link
        >
        <Link href="/code-of-conduct" variant="secondary"
          ><Localized id="footer--code-of-conduct" /></Link
        >
        <Link
          href={t("footer--media-kit-href", { assets }).replace(/\p{C}/gu, "")}
          variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Localized id="footer--media-kit" />
        </Link>
      </div>
    </div>

    <address class="column-content">
      <h1><Localized id="footer--contacts" /></h1>

      <div>
        <Link href="mailto:mambi@gambiconf.dev" variant="secondary">mambi@gambiconf.dev</Link>

        <GambiConfSocialLinks largeScreenRows={3} smallScreenRows={1} />
      </div>
    </address>
  </div>
</footer>

<style>
  footer {
    padding-top: 10px;
    padding-bottom: 20px;
    text-align: center;
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;

    max-width: 1140px;

    margin-left: 10vw;
    margin-right: 10vw;
  }

  .logo-image {
    height: 75px;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0;
  }

  :global(footer a) {
    font-size: 16px;
  }

  address {
    font-style: normal;
  }

  .column-content > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media screen and (min-width: 768px) {
    footer {
      text-align: left;
    }

    .content-wrapper {
      flex-direction: row;

      margin-right: auto;
      margin-left: auto;
    }

    .logo-image {
      height: 150px;
    }
  }
</style>
