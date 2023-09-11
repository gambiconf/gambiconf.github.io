<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { t } from "../store/locale"
  import Window from "./Window.svelte"
</script>

<Window title={$t("call-for-proposal--title")}>
  <div class="content">
    <div class="row">
      <div class="icon">
        <img height="128px" src={`${assets}/writing-on-paper.png`} />
      </div>

      <div>
        <p>
          <Localized id="call-for-proposal--body-paragraph-1" />
        </p>

        <p>
          <Localized id="call-for-proposal--body-paragraph-2" />
        </p>
      </div>
    </div>
  </div>
</Window>

<style>
  .content {
    padding: 25px;
  }

  .icon {
    float: left;
    margin-right: 15px;
  }

  p {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    .icon {
      float: unset;
    }

    .row {
      display: flex;
    }
  }
</style>
