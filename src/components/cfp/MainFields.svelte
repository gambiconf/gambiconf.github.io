<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import Tweet from "../Tweet.svelte"
  import {
    form,
    talkTweetPreview,
    talkTweetStatus,
  } from "../../store/cfp-submission.svelte"
  import { tweetLength } from "../../utils/tweet"
</script>

<h4><Localized id="cfp--section-main" /></h4>

<div class="field">
  <label for="name"><Localized id="cfp--field-name" /></label>
  <input name="name" type="text" required bind:value={form.speakerName} />
  <label for="name" class="sublabel"><Localized id="cfp--field-name-sublabel" /></label>
</div>

<div class="field">
  <Localized id="cfp--field-twitter-handler">
    {#snippet children({ attrs })}
      <label for="twitter">{attrs.label}</label>
      <input
        name="twitter"
        type="text"
        placeholder={attrs.placeholder}
        bind:value={form.twitterHandler}
      />
    {/snippet}
  </Localized>
</div>

<div class="field">
  <Localized id="cfp--field-language">
    {#snippet children({ attrs })}
      <label for="language">{attrs.label}</label>
      <select name="language" required bind:value={form.language}>
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
      <select name="type" required bind:value={form.type}>
        <option value="talk">{attrs.optionTalk}</option>
        <option value="workshop">{attrs.optionWorkshop}</option>
      </select>
      <label for="type" class="sublabel">{attrs.sublabel}</label>
    {/snippet}
  </Localized>
</div>

<div class="field">
  <label for="title"><Localized id="cfp--field-title" /></label>
  <input name="title" type="text" required bind:value={form.title} />
</div>

<div class="field">
  <label for="description"><Localized id="cfp--field-description" /></label>
  <textarea name="description" rows="4" required bind:value={form.description}></textarea>
</div>

{#if form.type === "talk"}
  <div class="field">
    <Localized id="cfp--field-ideal-duration">
      {#snippet children({ attrs })}
        <label for="duration">{attrs.label}</label>
        <select name="duration" required bind:value={form.duration}>
          <option value="15">{attrs.option15minutes}</option>
          <option value="20">{attrs.option20minutes}</option>
          <option value="30">{attrs.option30minutes}</option>
          <option value="45">{attrs.option45minutes}</option>
        </select>
      {/snippet}
    </Localized>
  </div>
{/if}

<span>
  <Localized id="cfp--tweet-preview" />
  <span
    class:warning-limit={talkTweetStatus.value === "warning"}
    class:exceeded-limit={talkTweetStatus.value === "exceeded"}
  >
    ({tweetLength(talkTweetPreview())}/270)
  </span>
</span>

<Tweet
  body={talkTweetPreview()}
  tweetStatusChanged={(status) => {
    talkTweetStatus.value = status
  }}
/>
