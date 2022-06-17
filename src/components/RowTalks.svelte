<script lang="ts">
  import { assets } from '$app/paths'
  import Window from './Window.svelte'
  import Talk from './Talk.svelte'
</script>

<style>
  .content {
    padding: 25px;
  }

  h3 {
    margin-bottom: 25px;
  }

  .content > h3:first-of-type {
    margin-top: 0;
  }

  .division-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 20px;
  }

  .division {
    height: 1px;
    width: 70%;
    background-color: #f34b2133;
  }

  .more-talks {
    font-weight: bolder;
    text-align: center;
  }
</style>

<div id="talks">
  <Window title="Talks">
    <article class="content">
      <h3>September 3 / In-person day</h3>

      <Talk
        talkTitle="Kill All Mutants! (Intro to Mutation Testing)"
        speakerName="Dave Aronson"
        speakerImage={`${assets}/speakers/dave-aronson.jpeg`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/DaveAronson' },
          { type: 'github', url: 'https://github.com/DaveAronson' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/DaveAronson' }
        ]}
      >
          <p slot="talkDescription">
            Would your tests all still pass if the tested code was changed? If so, you may have test gaps, ineffective code, or both!
            Mutation Testing reveals these cases. This talk will tell you all about it.
          </p>

          <p slot="speakerBio">
            <a href="https://twitter.com/DaveAronson">@DaveAronson</a> is a software development consultant with 37 years of experience.
            He is the T. Rex of Codosaurus, LLC (his one-person company, which explains how he can get such a cool title) near Washington, DC, USA.
            In his spare time, he brews mead.
          </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Writing a Game Boy compiler in Forth"
        speakerName="@tijnosaurus"
        speakerImage={`${assets}/speakers/tijnosaurus.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/ams-hackers/gbforth' },
        ]}
      >
          <p slot="talkDescription">
            Why read the manual if you can reverse-engineer a ROM instead?
            This talk shows how you can use Forth to learn about retro hardware with an incremental approach.
          </p>

          <p slot="speakerBio">
            <a href="https://twitter.com/tijnosaurus">@tijnosaurus</a> is a software engineer at Reaktor.
            He mainly writes TypeScript during the day, and likes to tinker around with esoteric compilers after office hours.
          </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Why are you making your own programming language?"
        speakerName="@TheEduardoRFS"
        speakerImage={`${assets}/speakers/theeduardorfs.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/EduardoRFS' },
          { type: 'twitch', url: 'https://twitch.tv/eduardorfs' },
        ]}
      >
        <p slot="talkDescription">
          I will be trying to convince you, that making a programming language is not a complete stupid idea and how to do that without hurting everyone.
        </p>

        <p slot="speakerBio">
          I like to describe myself as anti floating point, also I'm currently on the team Taylor Swift + programming languages.
        </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <p class="more-talks">
        More talks will be revealed weekly! Be the first to know by following us on <a href="https://twitter.com/gambiconf">Twitter</a>!
      </p>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <h3>September 10 / Online day</h3>

      <Talk
        talkTitle="Reverse Engineering Satellite Communication"
        speakerName="Lucas Teske"
        speakerImage={`${assets}/speakers/lucas-teske.jpg`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/lucasteske' },
          { type: 'github', url: 'https://github.com/racerxdl' },
          { type: 'twitch', url: 'https://www.twitch.tv/racerxdl' },
          { type: 'website', url: 'https://lucasteske.dev/' },
        ]}
      >
          <p slot="talkDescription">
            How I reverse engineered the GOES Satellite Protocol to receive a few images.
          </p>

          <p slot="speakerBio">
            “I play, hack stuff, create and destroy stuff. Check it out to see live hacks! Or destroying my computer (it happens).
            I'm also the creator of OpenSatelliteProject and SegDSP!〞
          </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Nyxt: The Internet on your terms"
        speakerName="Pierre Neidhardt"
        speakerImage={`${assets}/speakers/pierre-neidhardt.png`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/Ambrevar' },
        ]}
      >
          <p slot="talkDescription">
            Nyxt browser has features that allow you to quickly analyze, navigate, and extract information from the web.
            Plus, Nyxt is fully hackable - all of its source code can be introspected, modified, and tweaked.
          </p>

          <p slot="speakerBio">
            Atlas is an independent software engineering firm based in Chicago and Paris.
            Our technological expertise is focused on Common Lisp. Pierre is a partner of Atlas Engineer.
          </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Network Technocracy: A Tale of Monitoring, Spoofing, Intercepting and Social Engineering"
        speakerName="@rlaneth"
        speakerImage={`${assets}/speakers/rlaneth.jpg`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/rlaneth' },
          { type: 'github', url: 'https://github.com/rlaneth' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/rlaneth' },
          { type: 'website', url: 'https://rlaneth.com' },
        ]}
      >
          <p slot="talkDescription">
            Forced to use a SOHO router he was given no permission to manage, Rodrigo Laneth embarks on a journey
            to regain control over his personal network segment.
          </p>

          <p slot="speakerBio">
            Laneth dedicates most of his time to the projects of Miralium, his own micro-sized cybersecurity company.
            Likes anime, network protocols and typography. Likes flight simulators too, but is wary of actual flight.
            Dislikes developing web apps with React
          </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <p class="more-talks">
        More talks will be revealed weekly! Be the first to know by following us on <a href="https://twitter.com/gambiconf">Twitter</a>!
      </p>
    </article>
  </Window>
</div>
