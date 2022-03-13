<script lang="ts">
  import { localeState, setLocale, type Locale } from "../store/locale.svelte"

  const languages: ReadonlyArray<{ code: Locale; label: string }> = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
  ]

  const toggleLanguage = () => {
    setLocale(localeState.locale === "pt" ? "en" : "pt")
  }

  const flag = (code: Locale) => (code === "pt" ? "br" : "us")
</script>

<button type="button" class="switcher" onclick={toggleLanguage}>
  {#if flag(localeState.locale) === "br"}
    <svg viewBox="0 0 640 480" aria-hidden="true">
      <rect width="640" height="480" fill="#009b3a" />
      <path d="M320 60 60 240l260 180 260-180z" fill="#fedf00" />
      <circle cx="320" cy="240" r="105" fill="#002776" />
      <path d="M225 230a190 190 0 0 1 190 0" stroke="#fff" stroke-width="14" fill="none" />
    </svg>
  {:else}
    <svg viewBox="0 0 640 480" aria-hidden="true">
      <!-- 13 stripes: 7 red at rows 0,2,4,6,8,10,12 on a white background. -->
      <rect width="640" height="480" fill="#fff" />
      {#each Array(7) as _, i (i)}
        <rect y={(i * 2 * 480) / 13} width="640" height={480 / 13} fill="#b22234" />
      {/each}
      <!-- Canton covers the top 7 stripes (i.e. rows 0..6 of 13). -->
      <rect width="256" height={(480 / 13) * 7} fill="#3c3b6e" />
    </svg>
  {/if}

  <span>{languages.find((l) => l.code === localeState.locale)?.label ?? "PT"}</span>
</button>

<style>
  .switcher {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    height: 36px;
    padding: 0 12px;

    background: none;
    border: none;
    cursor: pointer;

    font: inherit;
    color: inherit;
  }

  .switcher:hover {
    opacity: 0.7;
  }

  svg {
    width: 24px;
    height: 18px;
    border-radius: 2px;
  }
</style>
