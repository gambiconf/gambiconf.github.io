<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { asset } from "$app/paths"
  import { t } from "../store/locale.svelte"
  import Window from "./Window.svelte"
  import GambiConfSocialLinks from "./GambiConfSocialLinks.svelte"
</script>

<Window title={t("call-for-proposal--title")}>
  <div class="content">
    <div class="row">
      <div class="icon">
        <img height="128px" src={asset("/writing-on-paper.png")} alt="" />
      </div>

      <div>
        <p>
          <Localized id="call-for-proposal--body-closed-1" />
        </p>

        <p>
          <Localized id="call-for-proposal--body-closed-2" />
        </p>

        <div class="social-links-container">
          <GambiConfSocialLinks largeScreenRows={1} exclude={["substack", "github"]} />
        </div>
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

  .social-links-container {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
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
