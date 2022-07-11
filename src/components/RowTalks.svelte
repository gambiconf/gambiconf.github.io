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
            Tijn is a software engineer at Reaktor.
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

      <Talk
        talkTitle="The Genesis of a Universal Video Transcoder"
        speakerName="Blagoj Jovanov"
        speakerImage={`${assets}/speakers/blagoj-jovanov.jpeg`}
        socialLinks={[
          { type: 'linkedin', url: 'https://www.linkedin.com/in/blagoj-jovanov-2a79b239/' },
        ]}
      >
        <p slot="talkDescription">
          This is a story which starts with screen capturing, continues with automation of UI processes and
          finally evolves in the art of extreme reverse engineering by the means of deep dive into hex code.
        </p>

        <p slot="speakerBio">
          Blagoj is working as a Senior Software Engineer at Swiss software company Netcetera.
          He started as a fullstack developer (Spring Boot + Angular).
          Currently he is Lead Dev of a SAFe team consisting of 10+ people working in challenging environment.
        </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Weird Machines: Exploiting Turing-Completeness"
        speakerName="Pedro Castilho"
        speakerImage={`${assets}/speakers/pedro-castilho.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://www.github.com/coproduto' },
          { type: 'twitter', url: 'https://twitter.com/coproduto' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/pcstl' },
        ]}
      >
        <p slot="talkDescription">
          There are tiny machines everywhere in your computer, in your motherboard, your network stack, even your fonts.
          We'll be learning how to make them do our bidding - for fun, of course!
        </p>

        <p slot="speakerBio">
          Pedro Castilho (<a href="https://twitter.com/coproduto">@coproduto</a>) is a Brazilian software developer.
          He spends most of his time either working at <a href="https://twitter.com/appcumbuca">@appcumbuca</a>, writing Elixir code
          or thinking about little computers running quietly inside your fonts.
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

      <Talk
        talkTitle="Finding and creating gambiarras with python ASTs"
        speakerName="@devmessias"
        speakerImage={`${assets}/speakers/brunomessias.png`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/devmessias' },
          { type: 'website', url: 'https://devmessias.github.io' },
        ]}
      >
          <p slot="talkDescription">
            Let's talk about how PyASTrX can find messy stuff in your codebase, then discuss a chaotic approach using
            metaprogramming with ASTs to create new behaviors in the sklearn pipelines
          </p>

          <p slot="speakerBio">
            I'm passionate about how we can use computers and math to solve real and abstract problems.
            I've experience developing open-software projects and community management.
            Today I work at <a href="https://twitter.com/idwall_co">@idwall_co</a> and pursuing my Ph.D. in graphs(ML) and survey analysis.
          </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Building a serverless PHP Laravel application using Laravel Vapor"
        speakerName="Bruno Francisco"
        speakerImage={`${assets}/speakers/bruno-francisco.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/CharlieBrownCharacter' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/bfrancisco11/' },
          { type: 'website', url: 'https://codotto.com/users/fb2ca7cc-0f94-4d6a-a470-0ba4466f6ba7/brunofrancisco' },
        ]}
      >
        <p slot="talkDescription">
          <a href="https://codotto.com/">Codotto</a> aims to be a platform for IT communities where they organize meetups.
          We'll cover how we built a serverless application that can handle millions of requests per minute
        </p>

        <p slot="speakerBio">
          My name is Bruno. I have worked 6 years as a Software Engineer in multiple companies and now I'm focusing on building solutions that are scalable and secure.
          Currently I'm interested in PHP (Laravel) and JS/TS (Vue)
        </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Klonoa in Sonic 1"
        speakerName="Barak Shahino"
        speakerImage={`${assets}/speakers/barak-shahino.png`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/barakshahino' },
        ]}
      >
        <p slot="talkDescription">
          I am working on a Sonic 1 ROM hack where I attempt to replicate Klonoa's gameplay mechanics in place of Sonic's
        </p>

        <p slot="speakerBio">
          I'm a big fan of different Medias and a big Sonic The Hedgehog fan.
          I have interest in drawing and programming and just recently finished a course in Software QA.
        </p>
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="My Blog is Hilariously Overengineered to the Point People Think it's a Static Site"
        speakerName="@theprincessxena"
        speakerImage={`${assets}/speakers/theprincessxena.png`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/Xe' },
          { type: 'website', url: 'https://christine.website' },
        ]}
      >
        <p slot="talkDescription">
          Dynamic webapps don't have to be slow. In this talk I will break out how I overengineered my blog with Rust
          to the point that people think it's a static site.
        </p>

        <p slot="speakerBio">
          Xe Iaso is the archmage of infrastructure at Tailscale. Xe writes a lot about tech, philosophy and original short stories.
          Xe likes chaotic good computing and can usually be seen to be up to no good on Twitch.
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
