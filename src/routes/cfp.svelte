<svelte:head>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte'
  import { Circle } from 'svelte-loading-spinners'
  import { postCfp } from '../network/cfp';
  import Alert from '../components/Alert.svelte'
  import Tweet from '../components/Tweet.svelte'
  import type { TweetStatus } from '../components/Tweet.svelte'

  const googleRecaptchaSiteKey = ""
  
  let name = ''
  let title = ''
  let description = ''
  let duration = ''
  let format = ''
  let bio = ''
  let social = ''
  let email = ''

  let tweetTalkOnAlert: TweetStatus = 'ok'
  let tweetBioOnAlert: TweetStatus = 'ok'

  $: tweetTalkCountCharacters = 13 + name.length + title.length + description.length
  $: tweetBioCountCharacters = 19 + bio.length

  let submitState: { status: 'submitting' | 'success' | 'error', message?: string } | null = null

  const handleSubmit = async () => {
    if (tweetTalkCountCharacters > 270) {
      submitState = { status: 'error', message: 'Tweet talk exceeds 270 characters' }
      return
    }

    if (tweetBioCountCharacters > 270) {
      submitState = { status: 'error', message: 'Tweet bio exceeds 270 characters' }
      return
    }
        
    submitState = { status: 'submitting' }

    const token = grecaptcha.getResponse()

    if (!token) {
      submitState = { status: 'error', message: 'reCaptcha failed' }
      return false;
    }

    const result = await postCfp({ name, title, description, duration: Number(duration), format, bio, social, email, token })
    if (result && token) {
      submitState = { status: 'success', message: 'Successfully submitted' }
    } else {
      submitState = { status: 'error', message: 'Failed to submit' }
    }
  }

  onMount(async () => {
    window.grecaptcha.ready(() => {
      grecaptcha.render('g-recaptcha', { sitekey: googleRecaptchaSiteKey })
    })
  })

</script>

<style>
  :global(body) {
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("../../static/mambi-icon-oulined.png");
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

<form on:submit|preventDefault={handleSubmit}>
  <h1>CFP</h1>

  <h4>Talk infos</h4>

  <label for="name">Your name or Twitter handler</label>
  <input
    name="name"
    type="text"
    placeholder='"My name" or "@twitterHandler"'
    required
    bind:value={name}
  >

  <label for="title">Talk title</label>
  <input
    name="title"
    type="text"
    required
    bind:value={title}
  >

  <label for="description">Description</label>
  <textarea
    name="description"
    rows="4"
    required
    bind:value={description}
  />

  <label for="duration">Ideal talk duration</label>
  <select name="duration" required bind:value={duration}>
    <option value="15">15 minutes</option>
    <option value="20">20 minutes</option>
    <option value="30">30 minutes</option>
    <option value="45">45 minutes</option>
    <option value="60">60 minutes</option>
  </select>

  <label for="format">Format</label>
  <select name="format" required bind:value={format}>
    <option value="in-person">I can talk only in-person</option>
    <option value="online">I can talk only online</option>
    <option value="both">Both in-person or online works for me</option>
  </select>

  <span>
    Tweet preview
    <span
      class:warning-limit={tweetTalkOnAlert === 'warning'}
      class:exceeded-limit={tweetTalkOnAlert === 'exceeded'}
    >
      ({tweetTalkCountCharacters}/270)
    </span>
  </span>

  <Tweet
    countCharacters={tweetTalkCountCharacters}
    on:tweetStatusChanged={(event) => { tweetTalkOnAlert = event.detail.tweetStatus }}
  >
    Talk "{title}" by <span class:tweet-handler={name[0] === '@'}>{name}</span>.<br />
    <br />
    {description}
  </Tweet>

  <h4>About you</h4>

  <label for="bio">Bio</label>
  <textarea
    name="bio"
    rows="4"
    required
    bind:value={bio}
  />

  <span>
    Tweet preview
    <span
      class:warning-limit={tweetBioOnAlert === 'warning'}
      class:exceeded-limit={tweetBioOnAlert === 'exceeded'}
    >
      ({tweetBioCountCharacters}/270)
    </span>
  </span>

  <Tweet
    countCharacters={tweetBioCountCharacters}
    on:tweetStatusChanged={(event) => { tweetBioOnAlert = event.detail.tweetStatus }}
  >
    About the speaker:
    {bio}
  </Tweet>

  <h4>Contacts</h4>

  <label for="social">Social Medias (it'll be public)</label>
  <textarea
    name="social"
    placeholder={"GitHub: macabeus\nStackoverflow: macabeus\n..."}
    rows="3"
    required
    bind:value={social}
  />

  <label for="email">E-Mail for the feedback (we won't share it)</label>
  <input name="email" type="email" required bind:value={email} />

  {#if submitState && submitState.status !== 'submitting'}
    <div class="alert-wrapper">
      <Alert status={submitState.status} message={submitState.message} />
    </div>
  {/if}

  <div id="g-recaptcha" required></div>

  <button
    type="submit"
    disabled={submitState?.status === 'submitting'}
  >
    {#if submitState?.status === 'submitting'}
      <Circle color="white" size={16} />
    {:else}
      Submit
    {/if}
  </button>
</form>
