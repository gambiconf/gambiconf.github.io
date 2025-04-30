<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { assets } from "$app/paths"
  import { base } from "$app/paths"
  import Link from "./Link.svelte"
  import Window from "./Window.svelte"
  import { t } from "../store/locale.svelte"
</script>

<Window title={t("call-for-proposal--title")}>
  <div class="content">
    <div class="row">
      <div class="icon">
        <img height="128px" src={`${assets}/writing-on-paper.png`} />
      </div>

      <div>
        <p>
          <Localized id="call-for-proposal--body-paragraph-1-part-1" />
          <strong><Localized id="call-for-proposal--body-paragraph-1-talk" /></strong>
          <Localized id="call-for-proposal--body-paragraph-1-part-2" />
        </p>

        <p>
          <Localized id="call-for-proposal--body-paragraph-2-part-1" />
          <strong><Localized id="call-for-proposal--body-paragraph-2-workshop" /></strong>
          <Localized id="call-for-proposal--body-paragraph-2-part-2" />
        </p>

        <p>
          <Localized id="call-for-proposal--body-paragraph-3-part-1" />
          <Link l10n="link" href="/previous-editions">
            <Localized id="call-for-proposal--body-paragraph-3-link" />
          </Link>
          <Localized id="call-for-proposal--body-paragraph-3-part-2" />
        </p>

        <p>
          <Localized id="call-for-proposal--body-paragraph-4" />
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
