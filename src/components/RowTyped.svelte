<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"
</script>

<div id="about">
  <Window title="GambiConf + TYPED">
    <div class="content">
      <div class="icons">
        <img class="icon" src={asset("/typed.avif")} alt="TYPED logo" />
        <img class="icon" src={asset("/cryptolar.png")} alt="Cryptolar logo" />
      </div>

      <p>
        Essa edição da GambiConf é feita em parceria com a Cryptolar e TYPED, comunidades de
        pessoas interessadas em verificação formal e desenvolvimento web3.
      </p>

      <p>
        Como palestrante, você pode escolher se tem preferência em apresentar na GambiConf ou na
        TYPED. Já como participante, escolha livremente quais palestras assistir no dia do evento!
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
</style>
