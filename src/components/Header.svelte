<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { base, assets } from "$app/paths"
  import LanguageSwitcher from "./LanguageSwitcher.svelte"
  import ThemeSwitcher from "./ThemeSwitcher.svelte"
  import { useLazyImage as lazyImage } from 'svelte-lazy-image';
</script>

<header>
  <a href={`${base}/`}>
    <img class="logo-header" src={`${assets}/logo.png`} alt="logo" use:lazyImage />
  </a>

  <nav>
    <a href={`${base}/`}><Localized id="header--home" /></a>
    <a href={`${base}/#about`}><Localized id="header--about" /></a>
    <a href={`${base}/#schedule`}><Localized id="header--schedule" /></a>
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
  }

  img {
    position: absolute;
    top: 15px;
    left: 5vw;

    height: 60px;
    width: 90px;

    filter: drop-shadow(0px 17px 17px rgba(0, 0, 0, 11%));
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    margin-right: 5vw;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    img {
      top: 10px;
      left: 10vw;

      height: 70px;
      width: 90px;
    }

    nav {
      margin-right: 10vw;
      gap: 25px;
    }
  }
</style>
