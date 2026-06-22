<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import LanguageSwitcher from "./LanguageSwitcher.svelte"
  import Link from "./Link.svelte"
  import ThemeSwitcher from "./ThemeSwitcher.svelte"

  let menuOpen = $state(false)

  const closeMenu = () => { menuOpen = false }
</script>

<header>
  <Link class="logo-link" href="/" onclick={closeMenu}>
    <img src={asset("/logo.png")} alt="logo" />
  </Link>

  <button
    class="hamburger"
    class:open={menuOpen}
    type="button"
    aria-label="Toggle menu"
    aria-expanded={menuOpen}
    onclick={() => { menuOpen = !menuOpen }}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav class:open={menuOpen}>
    <Link class="nav-link" href="/" variant="secondary" onclick={closeMenu}><Localized id="header--home" /></Link>
    <Link class="nav-link" href="/#about" variant="secondary" onclick={closeMenu}><Localized id="header--who-we-are" /></Link>
    <Link class="nav-link" href="/#tickets" variant="secondary" onclick={closeMenu}><Localized id="header--tickets" /></Link>
    <Link class="nav-link" href="https://gambiconf.substack.com" variant="secondary" onclick={closeMenu}>
      <Localized id="header--blog" />
    </Link>
    <div class="nav-controls">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 50;
    height: var(--header-height);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    display: block;
    height: 50px;
    margin-left: 3vw;
    filter: drop-shadow(0px 17px 17px rgba(0, 0, 0, 11%));
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 44px;
    height: 44px;
    margin-right: 3vw;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 60;
    border-radius: 8px;
    transition: background 0.2s;
  }

  .hamburger:active {
    background: rgba(128, 128, 128, 0.15);
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.2s ease;
    transform-origin: center;
  }

  .hamburger.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }

  .hamburger.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
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

  .nav-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (max-width: 767px) {
    .hamburger {
      display: flex;
    }

    nav {
      display: flex;
      position: fixed;
      top: var(--header-height);
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      height: auto;
      margin: 0;
      padding: 0.5rem 0 1rem;
      gap: 0;
      background-color: inherit;
      border-top: 1px solid rgba(128, 128, 128, 0.15);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-6px);
      transition: visibility 0.22s, opacity 0.22s ease, transform 0.22s ease;
    }

    nav.open {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    :global(.nav-link) {
      display: block;
      padding: 0.85rem 1.5rem;
      text-align: left;
      font-size: 1.05rem;
      border-bottom: 1px solid rgba(128, 128, 128, 0.08);
    }

    .nav-controls {
      padding: 0.85rem 1.5rem 0.25rem;
      justify-content: flex-start;
      gap: 4px;
    }
  }

  @media screen and (min-width: 768px) {
    :global(.logo-link) {
      align-self: flex-start;
      margin-top: calc(var(--header-height) / 2);
    }

    img {
      height: 80px;
      margin-left: 10vw;
    }

    nav {
      margin-right: 10vw;
      gap: 4px;
    }

    :global(.nav-link) {
      position: relative;
      padding: 8px 14px;
      border-radius: 8px;
      font-weight: 500;
      font-size: 1rem;
      letter-spacing: 0.02em;
      transition: color 0.2s;
    }

    :global(.nav-link)::after {
      content: '';
      position: absolute;
      left: 14px;
      right: 14px;
      bottom: 4px;
      height: 2px;
      background: #ff8915;
      border-radius: 1px;
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.22s ease;
    }

    :global(.nav-link:hover)::after {
      transform: scaleX(1);
    }

    .nav-controls {
      margin-left: 12px;
      padding-left: 18px;
      border-left: 1px solid rgba(128, 128, 128, 0.25);
    }
  }
</style>
