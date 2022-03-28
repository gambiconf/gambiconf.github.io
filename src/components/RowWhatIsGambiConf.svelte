<style>
  article {
    display: flex;
    flex-direction: column;

    max-width: 1140px;

    margin-left: 10vw;
    margin-right: 10vw;
  }

  @media screen and (min-width: 768px) {
    article {
      flex-direction: row;

      margin-right: auto;
      margin-left: auto;
    }

    .column {
      width: 50%;
    }

    .column :first-child {
      margin-top: 0;
    }
  }

  h4 {
    margin: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .content p:last-child {
    margin-bottom: 0;
  }
</style>

<article id="about">
  <div class="column">
    <h4>What is GambiConf?</h4>
  </div>

  <div class="column content">
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
      we organized the first edition of GambiConf last year in Brazil in Portuguese-speaking. Now, we want to bring
      the event to Portugal in English-speaking!
    </p>

    <p>
      If you've ever worked on a really hacky personal project or thought of a unique-underground-workaroundish way of doing something in CS,
      come share your experience! We want to hear from you!
    </p>
  </div>
</article>
