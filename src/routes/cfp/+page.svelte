<script lang="ts">
  import { onMount } from "svelte"
  import { base } from "$app/paths"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { Circle } from "svelte-loading-spinners"
  import { getSubmissions, postSubmissions, putSubmissions } from "../../network/submissions"
  import Alert from "../../components/Alert.svelte"
  import Tweet from "../../components/Tweet.svelte"
  import type { TweetStatus } from "../../components/Tweet.svelte"
  import Window from "../../components/Window.svelte"
  import { tweetLength } from "../../utils/tweet"
  import { t } from "../../store/locale"
  import { capitalize } from "../../utils/capitalize"
  import { theme } from "../../store/theme"

  let currentSubmissionId = ""
  let showSubmitNewEntryButton = false

  let speakerName = ""
  let twitterHandler = ""
  let type = ""
  let title = ""
  let description = ""
  let duration = ""
  let language = ""
  let speakerBio = ""
  let speakerSocialMedias = ""
  let speakerEmail = ""
  let notes = ""

  // splitted the process into parts
  let steps = ["entry", "aboutYou", "contactInfo"]
  // watch the current step of the process
  $: currentStep = 0

  const errorMessages = {
    speakerName: "O nome deve conter pelo menos 2 caracteres",
    title: "O título deve conter pelo menos 3 caracters",
    description: "A descrição deve conter pelo menos 20 caracteres",
    speakerBio: "A sua bio deve conter pelo menos 20 caracteres",
    speakerSocialMedias: "Insira alguma forma de contato. Pelo menos 5 caracteres",
    speakerEmail: "Email inválido",
  }

  let tweetTalkOnAlert: TweetStatus = "ok"
  let tweetBioOnAlert: TweetStatus = "ok"

  $: talkTweetPreview =
    language === "only_english"
      ? `${capitalize(type)} "${title}" by ${
          twitterHandler || speakerName
        } (in 🇺🇸)\n\n${description}`
      : `${capitalize(type)} "${title}" por ${twitterHandler || speakerName}\n\n${description}`

  $: speakerTweetPreview =
    language === "only_english"
      ? `About the speaker:\n${speakerBio}`
      : `Sobre o palestrante:\n${speakerBio}`

  let submitState:
    | { status: "submitting" }
    | { status: "idle" }
    | {
        status: "success" | "error"
        message: string
      } = { status: "idle" }

  const handleSubmit = async () => {
    if (tweetLength(talkTweetPreview) > 270) {
      submitState = { status: "error", message: "Tweet talk exceeds 270 characters" }
      return
    }

    if (tweetLength(speakerTweetPreview) > 270) {
      submitState = { status: "error", message: "Tweet bio exceeds 270 characters" }
      return
    }

    submitState = { status: "submitting" }

    if (currentSubmissionId) {
      const result = await putSubmissions({
        id: currentSubmissionId,
        speakerName,
        twitterHandler,
        type,
        title,
        description,
        duration: Number(duration),
        language,
        speakerBio,
        speakerSocialMedias,
        speakerEmail,
        notes,
      })

      if (result) {
        submitState = { status: "success", message: $t("cfp--submit-success") }
      } else {
        submitState = { status: "error", message: $t("cfp--submit-error") }
      }
    } else {
      const result = await postSubmissions({
        speakerName,
        twitterHandler,
        type,
        title,
        description,
        duration: Number(duration),
        language,
        speakerBio,
        speakerSocialMedias,
        speakerEmail,
        notes,
      })

      if (result) {
        showSubmitNewEntryButton = true

        currentSubmissionId = result.id
        const url = new URL(window.location.toString())
        url.searchParams.set("id", result.id)
        window.history.pushState(null, "", url.toString())

        submitState = { status: "success", message: $t("cfp--submit-success") }
      } else {
        submitState = { status: "error", message: $t("cfp--submit-error") }
      }
    }
  }

  const clearForm = () => {
    currentSubmissionId = ""

    showSubmitNewEntryButton = false

    speakerName = ""
    twitterHandler = ""
    type = ""
    title = ""
    description = ""
    duration = ""
    language = ""
    speakerBio = ""
    speakerSocialMedias = ""
    speakerEmail = ""
    notes = ""

    submitState = { status: "idle" }

    const url = new URL(window.location.toString())
    url.searchParams.delete("id")
    window.history.pushState(null, "", url.toString())
  }

  const loadGivenSubmission = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const givenSubmissionId = urlParams.get("id")
    if (givenSubmissionId) {
      currentSubmissionId = givenSubmissionId

      const givenSubmission = await getSubmissions(givenSubmissionId)

      if (!givenSubmission) {
        window.alert(
          "We could not load a submission with the given id. Please, report the issue by sending us an email (mambi@gambiconf.dev) or opening an issue on https://github.com/gambiconf/gambiconf.github.io"
        )
        return
      }

      speakerName = givenSubmission.speakerName
      twitterHandler = givenSubmission.twitterHandler
      type = givenSubmission.type
      title = givenSubmission.title
      description = givenSubmission.description
      duration = `${givenSubmission.duration}`
      language = givenSubmission.language
      speakerBio = givenSubmission.speakerBio
      speakerSocialMedias = givenSubmission.speakerSocialMedias
      speakerEmail = givenSubmission.speakerEmail
      notes = givenSubmission.notes
    }
  }

  const validateEmail = (mail: string) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)

  onMount(() => {
    loadGivenSubmission()
  })
</script>

<div class="page">
  <Window title={$t("cfp--title")}>
    <form on:submit|preventDefault={handleSubmit}>
      <!-- ENTRY START -->
      {#if currentStep === 0}
        <h4><Localized id="cfp--section-main" /></h4>

        <div class="field">
          <label for="name"><Localized id="cfp--field-name" /></label>
          <input name="name" type="text" required bind:value={speakerName} />
        </div>
        <!-- NAME INPUT ERROR MESSAGE - START -->
        {#if speakerName.length === 1}
          <span class="error-message">{errorMessages.speakerName}</span>
        {/if}
        <!-- NAME INPUT ERROR MESSAGE - END -->

        <div class="field">
          <Localized id="cfp--field-twitter-handler" let:attrs>
            <label for="name">{attrs.label}</label>
            <input
              name="name"
              type="text"
              placeholder={attrs.placeholder}
              bind:value={twitterHandler}
              disabled={speakerName.length < 2}
            />
          </Localized>
        </div>

        <div class="field">
          <Localized id="cfp--field-language" let:attrs>
            <label for="language">{attrs.label}</label>
            <select
              name="language"
              required
              bind:value={language}
              disabled={speakerName.length < 2}
            >
              <option value="only_portuguese">{attrs.optionPortuguese}</option>
              <option value="only_english">{attrs.optionEnglish}</option>
              <option value="portuguese_or_english">{attrs.optionPortugueseOrEnglish}</option>
            </select>
          </Localized>
        </div>

        <div class="field">
          <Localized id="cfp--field-type" let:attrs>
            <label for="type">{attrs.label}</label>
            <select name="type" required bind:value={type} disabled={language.length <= 0}>
              <option value="talk">{attrs.optionTalk} </option>
              <option value="sprint">{attrs.optionSprint} </option>
            </select>
            <label for="type" class="sublabel">{attrs.sublabel}</label>
          </Localized>
        </div>

        <div class="field">
          <label for="title"><Localized id="cfp--field-title" /></label>
          <input
            name="title"
            type="text"
            required
            bind:value={title}
            disabled={type.length <= 0}
          />
        </div>
        <!-- TITLE INPUT ERROR MESSAGE - START -->
        {#if title.length >= 1 && title.length < 3}
          <span class="error-message">{errorMessages.title}</span>
        {/if}
        <!-- TITLE INPUT ERROR MESSAGE - END -->

        <div class="field">
          <label for="description"><Localized id="cfp--field-description" /></label>
          <textarea
            name="description"
            rows="4"
            required
            bind:value={description}
            disabled={title.length < 3}
          />
        </div>
        <!-- DESCRIPTION INPUT ERROR MESSAGE - START -->
        {#if description.length >= 1 && description.length < 20}
          <span class="error-message">{errorMessages.description}</span>
        {/if}
        <!-- DESCRIPTION INPUT ERROR MESSAGE - END -->

        {#if type === "talk" && description.length >= 20}
          <div class="field">
            <Localized id="cfp--field-ideal-duration" let:attrs>
              <label for="duration">{attrs.label}</label>
              <select name="duration" required bind:value={duration}>
                <option value="15">{attrs.option15minutes} </option>
                <option value="20">{attrs.option20minutes} </option>
                <option value="30">{attrs.option30minutes} </option>
                <option value="45">{attrs.option45minutes} </option>
              </select>
            </Localized>
          </div>
        {/if}

        <span>
          <Localized id="cfp--tweet-preview" />
          <span
            class:warning-limit={tweetTalkOnAlert === "warning"}
            class:exceeded-limit={tweetTalkOnAlert === "exceeded"}
          >
            ({tweetLength(talkTweetPreview)}/270)
          </span>
        </span>

        <Tweet
          body={talkTweetPreview}
          on:tweetStatusChanged={(event) => {
            tweetTalkOnAlert = event.detail.tweetStatus
          }}
        />
        <div class="step-buttons">
          <button
            type="submit"
            on:click={() => {
              currentStep = 1
            }}
            disabled={speakerName.length < 2 ||
              language.length <= 0 ||
              type.length <= 0 ||
              title.length < 3 ||
              description.length <= 10 ||
              (type === "talk" && duration.length <= 0)}
          >
            <Localized id="Próximo" />
          </button>
        </div>
      {/if}
      <!-- ENTRY - END -->
      <!-- ABOUT - START -->
      {#if currentStep === 1}
        <h4><Localized id="cfp--section-about-you" /></h4>

        <div class="field">
          <label for="bio"><Localized id="cfp--field-bio" /></label>
          <textarea name="bio" rows="4" required bind:value={speakerBio} />
        </div>

        <!-- BIO INPUT ERROR MESSAGE - START -->
        {#if speakerBio.length >= 1 && speakerBio.length < 20}
          <span class="error-message">{errorMessages.speakerBio}</span>
        {/if}
        <!-- BIO INPUT ERROR MESSAGE - END -->

        <span>
          <Localized id="cfp--tweet-preview" />
          <span
            class:warning-limit={tweetBioOnAlert === "warning"}
            class:exceeded-limit={tweetBioOnAlert === "exceeded"}
          >
            ({tweetLength(speakerTweetPreview)}/270)
          </span>
        </span>

        <Tweet
          body={speakerTweetPreview}
          on:tweetStatusChanged={(event) => {
            tweetBioOnAlert = event.detail.tweetStatus
          }}
        />
        <div class="step-buttons">
          <button
            class="outline"
            type="submit"
            on:click={() => {
              currentStep = 0
            }}
          >
            <Localized id="Anterior" />
          </button>
          <button
            type="submit"
            on:click={() => {
              currentStep = 2
            }}
            disabled={speakerBio.length < 20}
          >
            <Localized id="Próximo" />
          </button>
        </div>
      {/if}
      <!-- ABOUT - END -->
      <!-- CONTACT - START -->
      {#if currentStep === 2}
        <h4><Localized id="cfp--section-contacts" /></h4>

        <div class="field">
          <label for="social"><Localized id="cfp--field-social-medias" /></label>
          <textarea
            name="social"
            placeholder={"GitHub: macabeus\nStack Overflow: macabeus\n..."}
            rows="3"
            required
            bind:value={speakerSocialMedias}
          />
        </div>
        <!-- SOCIAL INPUT ERROR MESSAGE - START -->
        {#if speakerSocialMedias.length >= 1 && speakerSocialMedias.length < 5}
          <span class="error-message">{errorMessages.speakerSocialMedias}</span>
        {/if}
        <!-- SOCIAL INPUT ERROR MESSAGE - END -->

        <div class="field">
          <label for="email"><Localized id="cfp--field-email" /></label>
          <input
            name="email"
            type="email"
            required
            bind:value={speakerEmail}
            disabled={speakerSocialMedias.length < 5}
          />
        </div>

        <!-- EMAIL INPUT ERROR MESSAGE - START -->
        {#if speakerEmail.length >= 1 && !validateEmail(speakerEmail)}
          <span class="error-message">{errorMessages.speakerEmail}</span>
        {/if}
        <!-- EMAIL INPUT ERROR MESSAGE - END -->

        <div class="field">
          <label for="notes"><Localized id="cfp--field-notes" /></label>
          <textarea
            name="notes"
            rows="3"
            bind:value={notes}
            disabled={!validateEmail(speakerEmail)}
          />
        </div>

        {#if submitState.status === "success" || submitState.status === "error"}
          <div class="alert-wrapper">
            <Alert status={submitState.status} message={submitState.message} />
          </div>
        {/if}

        <button
          type="submit"
          disabled={submitState?.status === "submitting" ||
            !validateEmail(speakerEmail) ||
            speakerSocialMedias === ""}
        >
          {#if submitState?.status === "submitting"}
            <Circle color="white" size={16} />
          {:else if currentSubmissionId}
            <Localized id="cfp--update" />
          {:else}
            <Localized id="cfp--submit" />
          {/if}
        </button>

        {#if showSubmitNewEntryButton}
          <button type="submit" class="outline" on:click={clearForm}>
            <Localized id="cfp--clear-form" />
          </button>
        {/if}
      {/if}
      <!-- CONTACT - END -->
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
    margin-top: 60px;
    margin-bottom: 30px;
  }

  h4:first-child {
    margin-top: 0;
  }

  form {
    display: flex;
    flex-direction: column;

    max-width: 1140px;

    padding: 25px;
  }

  label {
    font-weight: bold;
    margin-bottom: 4px;
  }

  .field {
    display: flex;
    flex-direction: column;

    margin-bottom: 20px;
  }

  .sublabel {
    font-size: 12px;
  }

  .warning-limit {
    color: #ff7720;
    font-weight: bold;
  }

  .exceeded-limit {
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
    width: 50%;

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

  .step-buttons {
    display: flex;
    gap: 15px;
    justify-content: end;
  }

  button:disabled {
    color: #b3b2b1;
    background-color: rgb(150, 150, 150);
  }

  .error-message {
    background-color: #fdb8a6;
    border: solid 1px #f34b21;
    border-radius: 3px;
    color: #f34b21;
    font-size: 0.8em;
    margin-bottom: 15px;
    padding: 10px;
  }

  @media screen and (min-width: 768px) {
    button {
      width: 25%;
    }
  }
</style>
