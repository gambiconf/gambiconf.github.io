<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { Circle } from "svelte-loading-spinners"
  import { postCfp } from "../../network/cfp"
  import Alert from "../../components/Alert.svelte"
  import Tweet from "../../components/Tweet.svelte"
  import type { TweetStatus } from "../../components/Tweet.svelte"
  import { tweetLength } from "../../utils/tweet"

  let name = ""
  let twitterHandler = ""
  let title = ""
  let description = ""
  let duration = ""
  let language = ""
  let bio = ""
  let social = ""
  let email = ""

  let tweetTalkOnAlert: TweetStatus = "ok"
  let tweetBioOnAlert: TweetStatus = "ok"

  $: talkTweetPreview =
    language === "only-english"
      ? `Talk "${title}" by ${twitterHandler || name} (in 🇺🇸)\n\n${description}`
      : `Talk "${title}" por ${twitterHandler || name}\n\n${description}`
  $: speakerTweetPreview = `Sobre o palestrante:\n${bio}`

  let submitState: {
    status: "submitting" | "success" | "error"
    message?: string
  } | null = null

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

    const result = await postCfp({
      name,
      twitterHandler,
      title,
      description,
      duration: Number(duration),
      language,
      bio,
      social,
      email,
    })
    if (result) {
      submitState = { status: "success", message: "Successfully submitted" }
    } else {
      submitState = { status: "error", message: "Failed to submit" }
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <h1><Localized id="cfp--title" /></h1>

  <h4><Localized id="cfp--section-talk-info" /></h4>

  <label for="name"><Localized id="cfp--field-name" /></label>
  <input name="name" type="text" required bind:value={name} />

  <Localized id="cfp--field-twitter-handler" let:attrs>
    <label for="name">{attrs.label}</label>
    <input name="name" type="text" placeholder={attrs.placeholder} bind:value={twitterHandler} />
  </Localized>

  <Localized id="cfp--field-language" let:attrs>
    <label for="language">{attrs.label}</label>
    <select name="language" required bind:value={language}>
      <option value="only-portuguese">{attrs.optionPortuguese}</option>
      <option value="only-english">{attrs.optionEnglish}</option>
      <option value="both-english-and-portuguese">{attrs.optionPortugueseOrEnglish}</option>
    </select>
  </Localized>

  <label for="title"><Localized id="cfp--field-title" /></label>
  <input name="title" type="text" required bind:value={title} />

  <label for="description"><Localized id="cfp--field-description" /></label>
  <textarea name="description" rows="4" required bind:value={description} />

  <Localized id="cfp--field-ideal-duration" let:attrs>
    <label for="duration">{attrs.label}</label>
    <select name="duration" required bind:value={duration}>
      <option value="15">{attrs.option15minutes} </option>
      <option value="20">{attrs.option20minutes} </option>
      <option value="30">{attrs.option30minutes} </option>
      <option value="45">{attrs.option45minutes} </option>
      <option value="60">{attrs.option60minutes} </option>
    </select>
  </Localized>

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

  <label for="bio"><Localized id="cfp--field-bio" /></label>
  <textarea name="bio" rows="4" required bind:value={bio} />

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

  <label for="social"><Localized id="cfp--field-social-medias" /></label>
  <textarea
    name="social"
    placeholder={"GitHub: macabeus\nStack Overflow: macabeus\n..."}
    rows="3"
    required
    bind:value={social}
  />

  <label for="email"><Localized id="cfp--field-email" /></label>
  <input name="email" type="email" required bind:value={email} />

  {#if submitState && submitState.status !== "submitting"}
    <div class="alert-wrapper">
      <Alert status={submitState.status} message={submitState.message} />
    </div>
  {/if}

  <button type="submit" disabled={submitState?.status === "submitting"}>
    {#if submitState?.status === "submitting"}
      <Circle color="white" size={16} />
    {:else}
      <Localized id="cfp--submit" />
    {/if}
  </button>
</form>

<style>
  :global(body) {
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
      url("/mambi-icon-oulined.png");
    background-position: center right;
    background-size: 100px;

    min-height: 100vh;
    min-width: 100vw;
  }

  h1 {
    margin-top: 60px;
  }

  form {
    display: flex;
    flex-direction: column;

    max-width: 1140px;

    margin: auto;
    margin-bottom: 60px;
  }

  label {
    font-weight: bold;
    margin-bottom: 4px;
  }

  form label + * {
    margin-bottom: 20px;
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

  @media screen and (min-width: 768px) {
    button {
      width: 25%;
    }
  }
</style>
