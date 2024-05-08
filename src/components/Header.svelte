<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { base, assets } from "$app/paths"
  import LanguageSwitcher from "./LanguageSwitcher.svelte"
  import Link from "./Link.svelte"
  import ThemeSwitcher from "./ThemeSwitcher.svelte"
</script>

<header>
  <a href={`${base}/`}>
    <img src={`${assets}/logo.png`} alt="logo" />
  </a>

  <nav>
    <Link href={`${base}/`} variant="secondary"><Localized id="header--home" /></Link>
    <Link href={`${base}/#about`} variant="secondary"><Localized id="header--about" /></Link>
    <Link href={`${base}/cfp`} variant="secondary"><Localized id="header--cfp" /></Link>
    <LanguageSwitcher />
    <ThemeSwitcher />
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
    height: var(--header-height);
    box-sizing: border-box;
  }

  img {
    position: absolute;
    top: 10px;
    left: 3vw;

    height: 50px;

    filter: drop-shadow(0px 17px 17px rgba(0, 0, 0, 11%));
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    margin-right: 5vw;
    max-width: 100%;
    gap: 18px;
  }

  @media screen and (min-width: 768px) {
    img {
      top: 10px;
      left: 10vw;

      height: 70px;
    }

    nav {
      margin-right: 10vw;
      gap: 25px;
    }
  }
</style>
