<script lang="ts">
  import { onMount } from "svelte"
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { Circle } from "svelte-loading-spinners"
  import { getSubmissions, postSubmissions, putSubmissions } from "../../network/submissions"
  import Alert from "../../components/Alert.svelte"
  import Tweet from "../../components/Tweet.svelte"
  import type { TweetStatus } from "../../components/Tweet.svelte"
  import Window from "../../components/Window.svelte"
  import { tweetLength } from "../../utils/tweet"
  import { t } from "../../store/locale.svelte"
  import { capitalize } from "../../utils/capitalize"

  let currentSubmissionId = $state("")
  let showSubmitNewEntryButton = $state(false)

  let speakerName = $state("")
  let twitterHandler = $state("")
  let type = $state("")
  let title = $state("")
  let description = $state("")
  let duration = $state("")
  let language = $state("")
  let speakerBio = $state([""])
  let speakerSocialMedias = $state("")
  let speakerEmail = $state("")
  let notes = $state("")

  let tweetTalkOnAlert: TweetStatus = $state("ok")
  let tweetBioOnAlert: TweetStatus[] = $state(["ok"])

  let talkTweetPreview = $derived(
    language === "only_english"
      ? `${capitalize(type)} "${title}" by ${
          twitterHandler || speakerName
        } (in 🇺🇸)\n\n${description}`
      : `${capitalize(type)} "${title}" por ${twitterHandler || speakerName}\n\n${description}`,
  )

  let speakerTweetPreviews = $derived(
    speakerBio.map((bio) =>
      language === "only_english" ? `About the speaker:\n${bio}` : `Sobre o palestrante:\n${bio}`,
    ),
  )

  let submitState:
    | { status: "submitting" }
    | { status: "idle" }
    | {
        status: "success" | "error"
        message: string
      } = $state({ status: "idle" })

  const submitSuccessMessage = t("cfp--submit-success")
  const submitErrorMessage = t("cfp--submit-error")

  const addSpeaker = () => {
    speakerBio = [...speakerBio, ""]
    tweetBioOnAlert = [...tweetBioOnAlert, "ok"]
  }

  const removeSpeaker = (index: number) => {
    if (speakerBio.length > 1) {
      speakerBio = speakerBio.filter((_, i) => i !== index)
      tweetBioOnAlert = tweetBioOnAlert.filter((_, i) => i !== index)
    }
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    if (tweetLength(talkTweetPreview) > 270) {
      submitState = { status: "error", message: "Tweet talk exceeds 270 characters" }
      return
    }

    const filteredSpeakerBios = speakerBio.filter((bio) => bio.trim())
    for (let i = 0; i < filteredSpeakerBios.length; i++) {
      const bioTweetPreview =
        language === "only_english"
          ? `About the speaker${filteredSpeakerBios.length > 1 ? ` ${i + 1}` : ""}:\n${filteredSpeakerBios[i]}`
          : `Sobre o palestrante${filteredSpeakerBios.length > 1 ? ` ${i + 1}` : ""}:\n${filteredSpeakerBios[i]}`

      if (tweetLength(bioTweetPreview) > 270) {
        submitState = {
          status: "error",
          message: `Tweet bio for speaker ${i + 1} exceeds 270 characters`,
        }
        return
      }
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
        speakerBio: speakerBio.filter((bio) => bio.trim()).join(" | "),
        speakerSocialMedias,
        speakerEmail,
        notes,
      })

      if (result) {
        submitState = { status: "success", message: submitSuccessMessage }
      } else {
        submitState = { status: "error", message: submitErrorMessage }
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
        speakerBio: speakerBio.filter((bio) => bio.trim()).join(" | "),
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

        submitState = { status: "success", message: submitSuccessMessage }
      } else {
        submitState = { status: "error", message: submitErrorMessage }
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
    speakerBio = [""]
    tweetBioOnAlert = ["ok"]
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
          "We could not load a submission with the given id. Please, report the issue by sending us an email (mambi@gambiconf.dev) or opening an issue on https://github.com/gambiconf/gambiconf.github.io",
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
      speakerBio = givenSubmission.speakerBio ? givenSubmission.speakerBio.split(" | ") : [""]
      tweetBioOnAlert = new Array(speakerBio.length).fill("ok")
      speakerSocialMedias = givenSubmission.speakerSocialMedias
      speakerEmail = givenSubmission.speakerEmail
      notes = givenSubmission.notes
    }
  }

  onMount(() => {
    loadGivenSubmission()
  })
</script>

<div class="page">
  <Window title={t("cfp--title")}>
    <form onsubmit={handleSubmit}>
      <h4><Localized id="cfp--section-main" /></h4>

      <div class="field">
        <label for="name"><Localized id="cfp--field-name" /></label>
        <input name="name" type="text" required bind:value={speakerName} />
        <label for="name" class="sublabel"><Localized id="cfp--field-name-sublabel" /></label>
      </div>

      <div class="field">
        <Localized id="cfp--field-twitter-handler">
          {#snippet children({ attrs })}
            <label for="name">{attrs.label}</label>
            <input
              name="name"
              type="text"
              placeholder={attrs.placeholder}
              bind:value={twitterHandler}
            />
          {/snippet}
        </Localized>
      </div>

      <div class="field">
        <Localized id="cfp--field-language">
          {#snippet children({ attrs })}
            <label for="language">{attrs.label}</label>
            <select name="language" required bind:value={language}>
              <option value="only_portuguese">{attrs.optionPortuguese}</option>
              <option value="only_english">{attrs.optionEnglish}</option>
              <option value="portuguese_or_english">{attrs.optionPortugueseOrEnglish}</option>
            </select>
          {/snippet}
        </Localized>
      </div>

      <div class="field">
        <Localized id="cfp--field-type">
          {#snippet children({ attrs })}
            <label for="type">{attrs.label}</label>
            <select name="type" required bind:value={type}>
              <option value="talk">{attrs.optionTalk} </option>
              <option value="workshop">{attrs.optionWorkshop} </option>
            </select>
            <label for="type" class="sublabel">{attrs.sublabel}</label>
          {/snippet}
        </Localized>
      </div>

      <div class="field">
        <label for="title"><Localized id="cfp--field-title" /></label>
        <input name="title" type="text" required bind:value={title} />
      </div>

      <div class="field">
        <label for="description"><Localized id="cfp--field-description" /></label>
        <textarea name="description" rows="4" required bind:value={description}></textarea>
      </div>

      {#if type === "talk"}
        <div class="field">
          <Localized id="cfp--field-ideal-duration">
            {#snippet children({ attrs })}
              <label for="duration">{attrs.label}</label>
              <select name="duration" required bind:value={duration}>
                <option value="15">{attrs.option15minutes} </option>
                <option value="20">{attrs.option20minutes} </option>
                <option value="30">{attrs.option30minutes} </option>
                <option value="45">{attrs.option45minutes} </option>
              </select>
            {/snippet}
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
        tweetStatusChanged={(status) => {
          tweetTalkOnAlert = status
        }}
      />

      <h4><Localized id="cfp--section-about-you" /></h4>

      {#each speakerBio as bio, index}
        <div class="field">
          <div class="bio-header">
            <label for="bio-{index}">
              <Localized id="cfp--field-bio" />
              {#if speakerBio.length > 1}
                (Palestrante {index + 1})
              {/if}
            </label>
            <div class="bio-buttons">
              {#if speakerBio.length > 1}
                <button type="button" class="remove-speaker" onclick={() => removeSpeaker(index)}>
                  &#x2212;
                </button>
              {/if}
              {#if index === speakerBio.length - 1}
                <button type="button" class="add-speaker" onclick={addSpeaker}>
                  <Localized id="cfp--add-speaker" />
                </button>
              {/if}
            </div>
          </div>
          <textarea
            name="bio-{index}"
            rows="4"
            required={index === 0}
            bind:value={speakerBio[index]}
          ></textarea>

          <span>
            <Localized id="cfp--tweet-preview" />

            <span
              class:warning-limit={tweetBioOnAlert[index] === "warning"}
              class:exceeded-limit={tweetBioOnAlert[index] === "exceeded"}
            >
              ({tweetLength(speakerTweetPreviews[index])}/270)
            </span>
          </span>

          <Tweet
            body={speakerTweetPreviews[index]}
            tweetStatusChanged={(status) => {
              tweetBioOnAlert[index] = status
            }}
          />
        </div>
      {/each}

      <h4><Localized id="cfp--section-contacts" /></h4>

      <div class="field">
        <label for="social"><Localized id="cfp--field-social-medias" /></label>
        <textarea
          name="social"
          placeholder="GitHub: macabeus&#013;Stack Overflow: macabeus&#013;..."
          rows="3"
          required
          bind:value={speakerSocialMedias}
        ></textarea>
      </div>

      <div class="field">
        <label for="email"><Localized id="cfp--field-email" /></label>
        <input name="email" type="email" required bind:value={speakerEmail} />
      </div>

      <div class="field">
        <label for="email"><Localized id="cfp--field-notes" /></label>
        <textarea name="notes" rows="3" bind:value={notes}></textarea>
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

  .bio-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }

  .bio-buttons {
    display: flex;
    gap: 8px;
  }

  .add-speaker {
    width: 200px;
  }

  .remove-speaker {
    width: 33px;
  }

  .add-speaker,
  .remove-speaker {
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

  .add-speaker:hover,
  .remove-speaker:hover {
    transform: scale(0.99);
    filter: brightness(0.9);
  }

  .sublabel {
    font-size: 12px;
    text-align: justify;
    margin-top: 2px;
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

  @media screen and (min-width: 768px) {
    button {
      width: 25%;
    }
  }
</style>
