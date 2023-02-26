<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { t } from "../store/locale"
  import Calendar from "./Calendar.svelte"
  import Window from "./Window.svelte"
</script>

<Window title={$t("where-and-when--title")}>
  <div class="content">
    <div class="calendar">
      <Calendar />
    </div>

    <div>
      <p>
        <Localized id="where-and-when--body-paragraph-1" />
      </p>

      <p>
        <Overlay id="where-and-when--body-paragraph-2">
          <a data-l10n-name="link" href="https://www.youtube.com/@gambiconf" />
        </Overlay>
      </p>
    </div>
  </div>
</Window>

<style>
  .content {
    display: flex;
    flex-direction: column;

    padding: 25px;
  }

  .calendar {
    align-self: center;
    margin-bottom: 15px;
  }

  .content p:first-of-type {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    .content {
      flex-direction: row;
    }

    .calendar {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
</style>
