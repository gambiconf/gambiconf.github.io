<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import Fa from "svelte-fa/src/fa.svelte"
  import FaLayers from "svelte-fa/src/fa-layers.svelte"
  import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane"
  import { base } from "$app/paths"
  import { t } from "../store/locale"
  import Window from "./Window.svelte"
</script>

<Window title={$t("call-for-proposal--title")}>
  <div class="content">
    <div class="row">
      <div class="icon">
        <FaLayers size="4x">
          <Fa color="#0271b8" icon={faPaperPlane} />
        </FaLayers>
      </div>

      <div>
        <p>
          <Localized id="call-for-proposal--body-paragraph-1" />
        </p>

        <p>
          <Overlay id="call-for-proposal--body-paragraph-2">
            <a
              data-l10n-name="link"
              href="https://threadreaderapp.com/thread/1518259526243393536.html"
              target="_blank"
              rel="noopener"
            />
          </Overlay>
        </p>

        <p>
          <Localized id="call-for-proposal--body-paragraph-3" />
        </p>
      </div>
    </div>

    <div class="button">
      <a class="button-cfp" href={`${base}/cfp`}><Localized id="call-for-proposal--cta" /></a>
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

  .button {
    display: flex;
    justify-content: center;
  }

  .button-cfp {
    background-color: #f34b21;
    padding: 10px;
    border-radius: 4px;
    min-width: 25%;

    color: white;
    text-decoration: none;
    text-align: center;

    transition: 0.4s;
  }
  .button-cfp:visited {
    color: white;
  }
  .button-cfp:hover {
    transform: scale(0.99);
    filter: brightness(0.9);
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
