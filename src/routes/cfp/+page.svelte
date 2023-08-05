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
    }
  }

  onMount(() => {
    loadGivenSubmission()
  })
</script>

<div class="page">
  <Window title={$t("cfp--title")}>
    <form on:submit|preventDefault={handleSubmit}>
      <h4><Localized id="cfp--section-main" /></h4>

      <div class="field">
        <label for="name"><Localized id="cfp--field-name" /></label>
        <input name="name" type="text" required bind:value={speakerName} />
      </div>

      <div class="field">
        <Localized id="cfp--field-twitter-handler" let:attrs>
          <label for="name">{attrs.label}</label>
          <input
            name="name"
            type="text"
            placeholder={attrs.placeholder}
            bind:value={twitterHandler}
          />
        </Localized>
      </div>

      <div class="field">
        <Localized id="cfp--field-language" let:attrs>
          <label for="language">{attrs.label}</label>
          <select name="language" required bind:value={language}>
            <option value="only_portuguese">{attrs.optionPortuguese}</option>
            <option value="only_english">{attrs.optionEnglish}</option>
            <option value="portuguese_or_english">{attrs.optionPortugueseOrEnglish}</option>
          </select>
        </Localized>
      </div>

      <div class="field">
        <Localized id="cfp--field-type" let:attrs>
          <label for="type">{attrs.label}</label>
          <select name="type" required bind:value={type}>
            <option value="talk">{attrs.optionTalk} </option>
            <option value="sprint">{attrs.optionSprint} </option>
          </select>
          <label for="type" class="sublabel">{attrs.sublabel}</label>
        </Localized>
      </div>

      <div class="field">
        <label for="title"><Localized id="cfp--field-title" /></label>
        <input name="title" type="text" required bind:value={title} />
      </div>

      <div class="field">
        <label for="description"><Localized id="cfp--field-description" /></label>
        <textarea name="description" rows="4" required bind:value={description} />
      </div>

      {#if type === "talk"}
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

      <h4><Localized id="cfp--section-about-you" /></h4>

      <div class="field">
        <label for="bio"><Localized id="cfp--field-bio" /></label>
        <textarea name="bio" rows="4" required bind:value={speakerBio} />
      </div>

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

      <div class="field">
        <label for="email"><Localized id="cfp--field-email" /></label>
        <input name="email" type="email" required bind:value={speakerEmail} />
      </div>

      {#if submitState.status === "success" || submitState.status === "error"}
        <div class="alert-wrapper">
          <Alert status={submitState.status} message={submitState.message} />
        </div>
      {/if}

      <button type="submit" disabled={submitState?.status === "submitting"}>
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

  @media screen and (min-width: 768px) {
    button {
      width: 25%;
    }
  }
</style>
