<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import Window from "./Window.svelte"
</script>

<div id="about">
  <Window title={t("row-typed--title")}>
    <div class="content">
      <div class="icons">
        <img class="icon" src={asset("/typed.avif")} alt="TYPED logo" />
        <img class="icon" src={asset("/cryptolar.png")} alt="Cryptolar logo" />
      </div>

      <p>
        <Localized id="row-typed--body-paragraph-1" />
      </p>

      <p>
        <Localized id="row-typed--body-paragraph-2" />
      </p>

      <div class="typed-tracks-block">
        <ul class="typed-tracks-list">
          <li><Localized id="row-typed--track-1" /></li>
          <li><Localized id="row-typed--track-2" /></li>
        </ul>
      </div>

      <p>
        <Localized id="row-typed--body-paragraph-4" />
      </p>

      <p>
        <Localized id="row-typed--body-paragraph-5" />
      </p>
    </div>
  </Window>
</div>

<style>
  .content {
    padding: 25px;
  }

  .icons {
    float: left;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .icon {
    width: 150px;
    margin-right: 8px;
  }

  .content p:first-of-type {
    margin-top: 0;
  }

  .content p:last-of-type {
    margin-bottom: 0;
  }

  .typed-tracks-list {
    margin: 0;
    padding-left: 1.25rem;
  }

  .typed-tracks-block {
    margin: 0;
  }

  .typed-tracks-list li + li {
    margin-top: 0.25rem;
  }
</style>
