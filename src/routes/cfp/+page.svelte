<script lang="ts">
  import { onMount } from "svelte"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import Alert from "../../components/Alert.svelte"
  import Window from "../../components/Window.svelte"
  import MainFields from "../../components/cfp/MainFields.svelte"
  import SpeakerFields from "../../components/cfp/SpeakerFields.svelte"
  import ContactFields from "../../components/cfp/ContactFields.svelte"
  import { t } from "../../store/locale.svelte"
  import {
    form,
    submitState,
    clearForm,
    submit,
    loadGivenSubmission,
  } from "../../store/cfp-submission.svelte"

  const submitMessages = {
    success: t("cfp--submit-success"),
    error: t("cfp--submit-error"),
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    submit(submitMessages)
  }

  onMount(() => {
    loadGivenSubmission()
  })
</script>

<div class="page">
  <Window title={t("cfp--title")}>
    <form class="cfp-form" onsubmit={handleSubmit}>
      <MainFields />
      <SpeakerFields />
      <ContactFields />

      {#if submitState.value.status === "success" || submitState.value.status === "error"}
        <div class="alert-wrapper">
          <Alert status={submitState.value.status} message={submitState.value.message} />
        </div>
      {/if}

      <button type="submit" disabled={submitState.value.status === "submitting"}>
        {#if submitState.value.status === "submitting"}
          <span class="spinner" aria-label="loading"></span>
        {:else if form.currentSubmissionId}
          <Localized id="cfp--update" />
        {:else}
          <Localized id="cfp--submit" />
        {/if}
      </button>

      {#if form.showSubmitNewEntryButton}
        <button type="submit" class="outline" onclick={clearForm}>
          <Localized id="cfp--clear-form" />
        </button>
      {/if}
    </form>
  </Window>
</div>

<style>
  :global(body) {
    background-position: center right;
    background-size: 100px;

    min-height: 100vh;
    min-width: 100vw;
  }

  .page {
    margin-top: 100px;
    margin-bottom: 30px;
  }

  /* Form-wide styles shared across MainFields / SpeakerFields / ContactFields.
     Scoped via the .cfp-form class; safe to :global since they only apply
     inside this form. */
  :global(.cfp-form) {
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    padding: 25px;
  }

  :global(.cfp-form h4:first-child) {
    margin-top: 0;
  }

  :global(.cfp-form label) {
    font-weight: bold;
    margin-bottom: 4px;
  }

  :global(.cfp-form .field) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  :global(.cfp-form .bio-header) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }

  :global(.cfp-form .bio-buttons) {
    display: flex;
    gap: 8px;
  }

  :global(.cfp-form .add-speaker) {
    width: 200px;
  }

  :global(.cfp-form .remove-speaker) {
    width: 33px;
  }

  :global(.cfp-form .add-speaker),
  :global(.cfp-form .remove-speaker) {
    height: 32px;
    border-radius: 12px;
    border: 2px solid #f34b21;
    background-color: white;
    color: #f34b21;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    transition: 0.2s;
  }

  :global(.cfp-form .add-speaker:hover),
  :global(.cfp-form .remove-speaker:hover) {
    transform: scale(0.99);
    filter: brightness(0.9);
  }

  :global(.cfp-form .sublabel) {
    font-size: 12px;
    text-align: justify;
    margin-top: 2px;
  }

  :global(.cfp-form .warning-limit) {
    color: #ff7720;
    font-weight: bold;
  }

  :global(.cfp-form .exceeded-limit) {
    color: red;
    font-weight: bold;
  }

  .alert-wrapper {
    margin-bottom: 5px;
  }

  button {
    display: flex;
    justify-content: center;

    cursor: pointer;

    background-color: #f34b21;
    padding: 10px;
    border: unset;
    border-radius: 4px;
    width: 100%;

    margin-top: 20px;
    color: white;
    text-decoration: none;

    transition: 0.4s;
  }
  button:hover {
    transform: scale(0.99);
    filter: brightness(0.9);
  }
  .outline {
    border: 1px solid #f34b21;
    background-color: transparent;
    color: #f34b21;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 768px) {
    button {
      width: 25%;
    }
  }
</style>
