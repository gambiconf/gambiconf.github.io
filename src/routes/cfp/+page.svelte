<script lang="ts">
  import { Localized, Overlay } from "@nubolab-ffwd/svelte-fluent"
  import { Circle } from "svelte-loading-spinners"
  import { postCfp } from "../../network/cfp"
  import Alert from "../../components/Alert.svelte"
  import Tweet from "../../components/Tweet.svelte"
  import type { TweetStatus } from "../../components/Tweet.svelte"

  let name = ""
  let title = ""
  let description = ""
  let duration = ""
  let format = ""
  let bio = ""
  let social = ""
  let email = ""

  let tweetTalkOnAlert: TweetStatus = "ok"
  let tweetBioOnAlert: TweetStatus = "ok"

  $: tweetTalkCountCharacters = 13 + name.length + title.length + description.length
  $: tweetBioCountCharacters = 19 + bio.length

  let submitState: {
    status: "submitting" | "success" | "error"
    message?: string
  } | null = null

  const handleSubmit = async () => {
    if (tweetTalkCountCharacters > 270) {
      submitState = {
        status: "error",
        message: "Tweet talk exceeds 270 characters",
      }
      return
    }

    if (tweetBioCountCharacters > 270) {
      submitState = {
        status: "error",
        message: "Tweet bio exceeds 270 characters",
      }
      return
    }

    submitState = { status: "submitting" }

    const result = await postCfp({
      name,
      title,
      description,
      duration: Number(duration),
      format,
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

  <Localized id="cfp--field-speaker-name-or-twitter-handler" let:attrs>
    <label for="name">{attrs.label}</label>
    <input name="name" type="text" placeholder={attrs.placeholder} required bind:value={name} />
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

  <label for="format">Format</label>
  <select name="format" required bind:value={format}>
    <option value="in-person">I can talk only in-person</option>
    <option value="online">I can talk only online</option>
    <option value="both">Both in-person or online works for me</option>
  </select>

  <span>
    <Localized id="cfp--tweet-preview" />
    <span
      class:warning-limit={tweetTalkOnAlert === "warning"}
      class:exceeded-limit={tweetTalkOnAlert === "exceeded"}
    >
      ({tweetTalkCountCharacters}/270)
    </span>
  </span>

  <Tweet
    countCharacters={tweetTalkCountCharacters}
    on:tweetStatusChanged={(event) => {
      tweetTalkOnAlert = event.detail.tweetStatus
    }}
  >
    Talk "{title}" by
    <span class:tweet-handler={name[0] === "@"}>{name}</span>.<br />
    <br />
    {description}
  </Tweet>

  <h4><Localized id="cfp--section-about-you" /></h4>

  <label for="bio"><Localized id="cfp--field-bio" /></label>
  <textarea name="bio" rows="4" required bind:value={bio} />

  <span>
    <Localized id="cfp--tweet-preview" />
    <span
      class:warning-limit={tweetBioOnAlert === "warning"}
      class:exceeded-limit={tweetBioOnAlert === "exceeded"}
    >
      ({tweetBioCountCharacters}/270)
    </span>
  </span>

  <Tweet
    countCharacters={tweetBioCountCharacters}
    on:tweetStatusChanged={(event) => {
      tweetBioOnAlert = event.detail.tweetStatus
    }}
  >
    About the speaker:
    {bio}
  </Tweet>

  <h4><Localized id="cfp--section-contacts" /></h4>

  <label for="social"><Localized id="cfp--field-social-medias" /></label>
  <textarea
    name="social"
    placeholder="GitHub: macabeus\nStack Overflow: macabeus\n..."
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

  .tweet-handler {
    color: rgb(29, 155, 240);
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
