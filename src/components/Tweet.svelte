<script context="module" lang="ts">
  export type TweetStatus = "ok" | "warning" | "exceeded"
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import { assets } from "$app/paths"
  import { tweetLength } from "../utils/tweet"
  import Donut from "./Donut.svelte"

  export let body = ""

  $: donutPercent = (tweetLength(body) * 100) / 270

  const dispatch = createEventDispatcher()

  let tweetStatus: TweetStatus = "ok"

  $: if (donutPercent > 100 && tweetStatus !== "exceeded") {
    tweetStatus = "exceeded"
    dispatch("tweetStatusChanged", { tweetStatus })
  } else if (donutPercent > 75 && donutPercent <= 100 && tweetStatus !== "warning") {
    tweetStatus = "warning"
    dispatch("tweetStatusChanged", { tweetStatus })
  } else if (donutPercent <= 75 && tweetStatus !== "ok") {
    tweetStatus = "ok"
    dispatch("tweetStatusChanged", { tweetStatus })
  }
</script>

<div class="tweet">
  <div class="profile-pic" style="background-image: url({`${assets}/tweet/avatar.png`})"></div>

  <div class="content">
    <div class="header">
      <div class="meta">
        <span class="nickname">GambiConf</span>
        <span class="handle">
          @gambiconf <span class="date-separator">·</span>
        </span>
        <span class="date">July 1, 2022</span>
      </div>

      <img class="ellipsis" src={`${assets}/tweet/ellipsis.svg`} alt="Ellipsis" />
    </div>

    <div class="text">
      {#each body.split(/(\s)/) as word, i (i)}
        {#if word === "\n"}
          <br />
        {:else if word[0] === "@"}
          <span class="tweet-handler">{word}</span>
        {:else}
          {word}
        {/if}
        {@html " "}
      {/each}
    </div>

    <div class="icons">
      <img src={`${assets}/tweet/comment.svg`} alt="Comment" />
      <img src={`${assets}/tweet/retweet.svg`} alt="Retweet" />
      <img src={`${assets}/tweet/favorite.svg`} alt="Favorite" />
      <img src={`${assets}/tweet/info.svg`} alt="Info" />
      <img src={`${assets}/tweet/stats.svg`} alt="Stats" />

      <Donut
        size={24}
        percent={donutPercent}
        bgColor={{ exceeded: "red", warning: "#ff7720", ok: "#304BA5" }[tweetStatus]}
      />
    </div>
  </div>
</div>

<style>
  .tweet {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
      "Helvetica Neue", sans-serif;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;

    max-width: 100%;
    width: 600px;
    padding: 15px;
    
    box-sizing: border-box;
  }

  .profile-pic {
    height: 49px;
    width: 49px;
    border-radius: 50%;

    background-size: cover;

    transition: filter 0.15s;
  }
  .profile-pic:hover {
    filter: brightness(0.94);
  }

  .content {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-gap: 2px;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 2px;
  }

  .meta .date,
  .meta .handle {
    color: rgb(101, 119, 134);
  }
  .meta .nickname {
    font-weight: bold;
  }
  .nickname:hover,
  .date:hover {
    text-decoration: underline;
  }

  .ellipsis {
    height: 1em;
  }

  .icons {
    max-width: 440px;

    margin-top: 5px;

    display: flex;
    flex-shrink: 0;
    align-items: stretch;
    justify-content: space-between;
  }

  .icons img {
    filter: invert(51%) sepia(2%) saturate(3913%) hue-rotate(166deg) brightness(87%) contrast(74%);

    @media screen and (max-width: 768px) {
      max-width: 20px;
    }
  }

  .text {
    line-height: 1.3125;
    white-space: pre-line;
  }

  .tweet-handler {
    color: rgb(29, 155, 240);
  }

  @media (max-width: 650px) {
    .date, .date-separator {
      display: none;
    }
  }
</style>
