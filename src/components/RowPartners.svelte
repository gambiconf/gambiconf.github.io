<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale"
  import { theme } from "../store/theme"
  import Window from "./Window.svelte"
</script>

<Window title={$t("partners--title")}>
  <div class="content">
    <a
      href="https://codelab.ime.usp.br/"
      target="_blank"
      rel="noopener"
    >
      <img src={`${assets}/codelab-${$theme}.svg`} alt="Codelab" />
    </a>

    <Localized id="partners--become-a-partner" args={{ assets }} let:attrs>
      <a
        href="https://docs.google.com/presentation/d/1beZavMrKfFFwblVRevZbxyq9UH4rS717q9oJrTVOCxI/edit?usp=sharing"
        target="_blank"
        rel="noopener"
      >
        <img src={attrs.src.replace(/\p{C}/gu, "")} alt={attrs.alt} />
      </a>
    </Localized>
  </div>
</Window>

<style>
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 25px;

    padding: 25px;
  }

  .content img {
    height: 175px;
    transition: filter 0.75s;
    filter: grayscale(1);
  }

  .content img:hover {
    filter: grayscale(0);
  }
</style>
