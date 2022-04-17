<script lang="ts">
  import { assets } from '$app/paths'
  import Window from './Window.svelte'
</script>

<style>
  .content {
    padding: 25px;
  }

  .icon {
    float: left;
  }

  .content p:first-of-type {
    margin-top: 0;
  }

  .content p:last-of-type {
    margin-bottom: 0;
  }
</style>

<div id="about">
  <Window title="What is GambiConf?">
    <div class="content">
      <img
        class="icon"
        src={`${assets}/favicon.png`}
        alt="GambiConf icon"
      />

      <p>
        GambiConf is a unique tech conference that's gonna blow your mind! 🐒
      </p>

      <p>
        It features projects and ideas that are definitely outside the box. Let's expand the boundaries of
        what's possible, unlocking unknown knowledge—just like we did in the 2021 edition when we learned
        <a href="https://www.youtube.com/watch?v=UWiXNTdmL2Q">how to build computers using only water</a>
        and <a href="https://www.youtube.com/watch?v=_-o3ToBC0AI">how to run DOOM on an oscilloscope</a>!
      </p>

      <p>
        This is a multilingual, not limited to a specific technology, conference. We try to focus more on the
        purpose of the presented projects, the unique nature of the sessions, and what one can learn from a random,
        very unusual, idea. We want to encourage people to try new ideas and discover new things,
        for the simple sake of curiosity and exploration.
      </p>

      <p>
        Based on conferences like <a href="https://bangbangcon.com/">!!Con</a> and <a href="http://sigbovik.org/">SIGBOVIK</a>,
        we organized the first edition of GambiConf last year in Brazil in Portuguese. Now, we want to bring
        the event to Portugal in English!
      </p>

      <p>
        You can check
        <a
          href="https://macabeus.medium.com/gambiconf-why-do-we-need-a-new-tech-event-4ff3302cf3d"
          target="_blank"
          rel="noopener"
        >
          our presentation post
        </a>
        to find out more about our purpose.
      </p>
    </div>
  </Window>
</div>
