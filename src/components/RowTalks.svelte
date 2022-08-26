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

  .break {
    text-align: center;
  }
</style>

<div id="schedule">
  <Window title="Schedule">
    <article class="content">
      <h3>September 3 / In-person day</h3>

      <Talk
        talkTitle="Opening Ceremony"
        date="2022-09-03"
        hours="14:00"
        duration={20}
        speakers={[
          {
            name: '@bmacabeus',
            bio: 'I love to engage people to do playful personal projects and share unusual ideas - and organizing GambiConf is part of that!',
          },
        ]}
        speakerImage={`${assets}/speakers/macabeus.jpeg`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/bmacabeus' },
          { type: 'github', url: 'https://github.com/macabeus' },
          { type: 'website', url: 'http://macabeus.github.io/' },
        ]}
      >
        Welcome to the event!
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Kill All Mutants! (Intro to Mutation Testing)"
        date="2022-09-03"
        hours="14:25"
        duration={30}
        speakers={[
          {
            name: '@DaveAronson',
            bio: `Dave Aronson is a software development consultant with 37 years of experience.
              He is the T. Rex of Codosaurus, LLC (his one-person company, which explains how he can get such a cool title) near Washington, DC, USA.
              In his spare time, he brews mead.`
          },
        ]}
        speakerImage={`${assets}/speakers/dave-aronson.jpeg`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/DaveAronson' },
          { type: 'github', url: 'https://github.com/DaveAronson' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/DaveAronson' }
        ]}
      >
        Would your tests all still pass if the tested code was changed? If so, you may have test gaps, ineffective code, or both!
        Mutation Testing reveals these cases. This talk will tell you all about it.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="The Genesis of a Universal Video Transcoder"
        date="2022-09-03"
        hours="15:00"
        duration={45}
        speakers={[
          {
            name: 'Blagoj Jovanov',
            bio: `Blagoj is working as a Senior Software Engineer at Swiss software company Netcetera.
              He started as a fullstack developer (Spring Boot + Angular).
              Currently he is Lead Dev of a SAFe team consisting of 10+ people working in challenging environment.`,
          },
        ]}
        speakerImage={`${assets}/speakers/blagoj-jovanov.jpeg`}
        socialLinks={[
          { type: 'linkedin', url: 'https://www.linkedin.com/in/blagoj-jovanov-2a79b239/' },
        ]}
      >
        This is a story which starts with screen capturing, continues with automation of UI processes and
        finally evolves in the art of extreme reverse engineering by the means of deep dive into hex code.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Why are you making your own programming language?"
        date="2022-09-03"
        hours="15:50"
        duration={45}
        speakers={[
          {
            name: '@TheEduardoRFS',
            bio: "I like to describe myself as anti floating point, also I'm currently on the team Taylor Swift + programming languages.",
          },
        ]}
        speakerImage={`${assets}/speakers/theeduardorfs.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/EduardoRFS' },
          { type: 'twitch', url: 'https://twitch.tv/eduardorfs' },
        ]}
      >
        I will be trying to convince you, that making a programming language is not a complete stupid idea and how to do that without hurting everyone.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <p class="break">
        30-minutes break
      </p>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Writing a Game Boy compiler in Forth"
        date="2022-09-03"
        hours="17:05"
        duration={30}
        speakers={[
          {
            name: '@tijnosaurus',
            bio: `Tijn is a software engineer at Reaktor.
              He mainly writes TypeScript during the day, and likes to tinker around with esoteric compilers after office hours.`,
          },
        ]}
        speakerImage={`${assets}/speakers/tijnosaurus.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/ams-hackers/gbforth' },
        ]}
      >
        Why read the manual if you can reverse-engineer a ROM instead?
        This talk shows how you can use Forth to learn about retro hardware with an incremental approach.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="styled-ppx: How to mimic a JavaScript feature and over-engineering CSS"
        date="2022-09-03"
        hours="17:40"
        duration={30}
        speakers={[
          {
            name: '@davesnx',
            bio: `I'm a Barcelona based software engineer. Trying to make cute software with Reason and OCaml.
              I co-host EmelleTV a streaming show talking about these languages. I currently work at Ahrefs, building styled-ppx.`,
          },
        ]}
        speakerImage={`${assets}/speakers/davesnx.jpg`}
        socialLinks={[
          { type: 'github', url: 'https://www.github.com/davesnx' },
          { type: 'website', url: 'https://www.sancho.dev' },
          { type: 'twitter', url: 'https://twitter.com/davesnx' },
        ]}
      >
        I will meticulously explain the problem, a few possible solutions and the over-engineered approach that I endup with.
        Frontend, ReScript FFI bindings to JavaScript, and ppxes.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Lightning Talk"
        date="2022-09-03"
        hours="18:15"
        duration={30}
        speakers={[]}
        speakerImage={`${assets}/speakers/lightning-talk.png`}
        socialLinks={[]}
      >
        Do you want to quickly share a personal project, a crazy idea, or tell a computer joke? Then give a lightning talk at GambiConf!
        Let us know by sending a <a href="https://twitter.com/gambiconf">DM on Twitter</a> or telling us during the event.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Ending Ceremony"
        date="2022-09-03"
        hours="18:45"
        duration={15}
        speakers={[
          {
            name: '@bmacabeus',
          },
        ]}
        speakerImage={`${assets}/speakers/macabeus.jpeg`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/bmacabeus' },
          { type: 'github', url: 'https://github.com/macabeus' },
          { type: 'website', url: 'http://macabeus.github.io/' },
        ]}
      >
        End of the in-person day!
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <h3>September 10 / Online day</h3>

      <Talk
        talkTitle="Opening Ceremony"
        date="2022-09-10"
        hours="14:00"
        duration={10}
        speakers={[
          {
            name: '@bmacabeus',
          },
          {
            name: '@MarcoWorms',
            bio: 'Contributor at <a href="https://yearn.finance">yearn.finance</a>'
          }
        ]}
        speakerImage={`${assets}/speakers/macabeus-and-worms.png`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/bmacabeus' },
          { type: 'github', url: 'https://github.com/macabeus' },
          { type: 'website', url: 'http://macabeus.github.io/' },
        ]}
      >
        Welcome to the event!
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Klonoa in Sonic 1"
        date="2022-09-10"
        hours="14:15"
        duration={20}
        speakers={[
          {
            name: 'Barak Shahino',
            bio: `I'm a big fan of different Medias and a big Sonic The Hedgehog fan.
              I have interest in drawing and programming and just recently finished a course in Software QA.`,
          },
        ]}
        speakerImage={`${assets}/speakers/barak-shahino.png`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/barakshahino' },
        ]}
      >
        I am working on a Sonic 1 ROM hack where I attempt to replicate Klonoa's gameplay mechanics in place of Sonic's
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Nyxt: The Internet on your terms"
        date="2022-09-10"
        hours="14:40"
        duration={20}
        speakers={[
          {
            name: 'Pierre Neidhardt',
            bio: `Atlas is an independent software engineering firm based in Chicago and Paris.
              Our technological expertise is focused on Common Lisp. Pierre is a partner of Atlas Engineer.`,
          },
        ]}
        speakerImage={`${assets}/speakers/pierre-neidhardt.png`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/Ambrevar' },
        ]}
      >
        Nyxt browser has features that allow you to quickly analyze, navigate, and extract information from the web.
        Plus, Nyxt is fully hackable - all of its source code can be introspected, modified, and tweaked.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="My Blog is Hilariously Overengineered to the Point People Think it's a Static Site"
        date="2022-09-10"
        hours="15:05"
        duration={20}
        speakers={[
          {
            name: '@theprincessxena',
            bio: `Xe Iaso is the archmage of infrastructure at Tailscale. Xe writes a lot about tech, philosophy and original short stories.
              Xe likes chaotic good computing and can usually be seen to be up to no good on Twitch.`,
          },
        ]}
        speakerImage={`${assets}/speakers/theprincessxena.png`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/Xe' },
          { type: 'website', url: 'https://christine.website' },
        ]}
      >
        Dynamic webapps don't have to be slow. In this talk I will break out how I overengineered my blog with Rust
        to the point that people think it's a static site.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Finding and creating gambiarras with python ASTs"
        date="2022-09-10"
        hours="15:30"
        duration={30}
        speakers={[
          {
            name: '@devmessias',
            bio: `I'm passionate about how we can use computers and math to solve real and abstract problems.
              I've experience developing open-software projects and community management.
              Today I work at <a href="https://twitter.com/idwall_co">@idwall_co</a> and pursuing my Ph.D. in graphs(ML) and survey analysis.`,
          },
        ]}
        speakerImage={`${assets}/speakers/brunomessias.png`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/devmessias' },
          { type: 'website', url: 'https://devmessias.github.io' },
        ]}
      >
        Let's talk about how PyASTrX can find messy stuff in your codebase, then discuss a chaotic approach using
        metaprogramming with ASTs to create new behaviors in the sklearn pipelines
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Network Technocracy: A Tale of Monitoring, Spoofing, Intercepting and Social Engineering"
        date="2022-09-10"
        hours="16:05"
        duration={30}
        speakers={[
          {
            name: '@rlaneth',
            bio: `Laneth dedicates most of his time to the projects of Miralium, his own micro-sized cybersecurity company.
              Likes anime, network protocols and typography. Likes flight simulators too, but is wary of actual flight.
              Dislikes developing web apps with React`,
          },
        ]}
        speakerImage={`${assets}/speakers/rlaneth.jpg`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/rlaneth' },
          { type: 'github', url: 'https://github.com/rlaneth' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/rlaneth' },
          { type: 'website', url: 'https://rlaneth.com' },
        ]}
      >
        Forced to use a SOHO router he was given no permission to manage, Rodrigo Laneth embarks on a journey
        to regain control over his personal network segment.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="A One Woman Show of Migrating an Entire R&D SCM From Bitbucket Cloud to a Self-Hosted GitLab"
        date="2022-09-10"
        hours="16:40"
        duration={20}
        speakers={[
          {
            name: '@Hilafish1',
            bio: `Hila Fish is a Senior DevOps Engineer at Wix. She believes the DevOps culture is what drives a company to perform in its best,
              and carries the vision to enhance and stabilize the business by taking care of its infrastructure.`,
          },
        ]}
        speakerImage={`${assets}/speakers/hilafish1.jpeg`}
        socialLinks={[
          { type: 'linkedin', url: 'https://www.linkedin.com/in/hila-fish' },
          { type: 'twitter', url: 'https://twitter.com/Hilafish1' },
        ]}
      >
        I'll share my journey of migrating an entire R&D's codebase from BitBucket to GitLab on my own.
        you'll gain takeaways you could adopt for your projects!
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Resurrecting ancient routers for fun and necessity"
        date="2022-09-10"
        hours="17:05"
        duration={45}
        speakers={[
          {
            name: 'Fernão Vellozo',
            bio: `History teacher who became a sysadmin. GNU/Linux user since 1999, specialist in all sorts of gambiarras and
              an enthusiast of free software and other non-liberticide technologies.`,
          },
        ]}
        speakerImage={`${assets}/speakers/fernao-vellozo.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://www.github.com/fvellozo' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/fernaovellozo' },
          { type: 'facebook', url: 'https://www.facebook.com/fernao.vellozo' },
        ]}
      >
        In this talk, we will discuss some tricks and "gambiarras" that are still viable in order to extend the
        lifecycle of firmwares for routers with 4 to 8 MB of flash space and 32 to 64 MB of RAM.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Building a serverless PHP Laravel application using Laravel Vapor"
        date="2022-09-10"
        hours="17:55"
        duration={20}
        speakers={[
          {
            name: 'Bruno Francisco',
            bio: `My name is Bruno. I have worked 6 years as a Software Engineer in multiple companies and now I'm focusing on building solutions that are scalable and secure.
              Currently I'm interested in PHP (Laravel) and JS/TS (Vue)`,
          },
        ]}
        speakerImage={`${assets}/speakers/bruno-francisco.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://github.com/CharlieBrownCharacter' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/bfrancisco11/' },
          { type: 'website', url: 'https://codotto.com/users/fb2ca7cc-0f94-4d6a-a470-0ba4466f6ba7/brunofrancisco' },
        ]}
      >
        <a href="https://codotto.com/">Codotto</a> aims to be a platform for IT communities where they organize meetups.
        We'll cover how we built a serverless application that can handle millions of requests per minute
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Reverse Engineering Satellite Communication"
        date="2022-09-10"
        hours="18:20"
        duration={30}
        speakers={[
          {
            name: 'Lucas Teske',
            bio: `I play, hack stuff, create and destroy stuff. Check it out to see live hacks! Or destroying my computer (it happens).
              I'm also the creator of OpenSatelliteProject and SegDSP!`,
          },
        ]}
        speakerImage={`${assets}/speakers/lucas-teske.jpg`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/lucasteske' },
          { type: 'github', url: 'https://github.com/racerxdl' },
          { type: 'twitch', url: 'https://www.twitch.tv/racerxdl' },
          { type: 'website', url: 'https://lucasteske.dev/' },
        ]}
      >
        How I reverse engineered the GOES Satellite Protocol to receive a few images.
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Weird Machines: Exploiting Turing-Completeness"
        date="2022-09-10"
        hours="18:55"
        duration={45}
        speakers={[
          {
            name: 'Pedro Castilho',
            bio: `Pedro Castilho (<a href="https://twitter.com/coproduto">@coproduto</a>) is a Brazilian software developer.
              He spends most of his time either working at <a href="https://twitter.com/appcumbuca">@appcumbuca</a>, writing Elixir code
              or thinking about little computers running quietly inside your fonts.`,
          },
        ]}
        speakerImage={`${assets}/speakers/pedro-castilho.jpeg`}
        socialLinks={[
          { type: 'github', url: 'https://www.github.com/coproduto' },
          { type: 'twitter', url: 'https://twitter.com/coproduto' },
          { type: 'linkedin', url: 'https://www.linkedin.com/in/pcstl' },
        ]}
      >
        There are tiny machines everywhere in your computer, in your motherboard, your network stack, even your fonts.
        We'll be learning how to make them do our bidding - for fun, of course!
      </Talk>

      <div class="division-wrapper">
        <div class="division" />
      </div>

      <Talk
        talkTitle="Ending Ceremony"
        date="2022-09-10"
        hours="19:40"
        duration={10}
        speakers={[
          {
            name: '@bmacabeus',
          },
          {
            name: '@MarcoWorms',
          }
        ]}
        speakerImage={`${assets}/speakers/macabeus-and-worms.png`}
        socialLinks={[
          { type: 'twitter', url: 'https://twitter.com/bmacabeus' },
          { type: 'github', url: 'https://github.com/macabeus' },
          { type: 'website', url: 'http://macabeus.github.io/' },
        ]}
      >
        And the closing of the event. So Long, and Thanks for All the Fish!
      </Talk>
    </article>
  </Window>
</div>
