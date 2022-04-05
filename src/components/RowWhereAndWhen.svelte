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

<article>
  <div class="column">
    <h4>Where and When</h4>
  </div>

  <div class="column content">
    <p>On 3rd of September the event is in person in Reaktor:</p>

    <address>
      Largo do Duque de Cadaval 17<br />
      Lisbon, Portugal<br />
      <a href="https://goo.gl/maps/eMAancyj5pRT7E2cA">See on Google Maps</a>
    </address>

    <p>On 10th of September the event is only online.</p>

    <p>
      Free streaming for both days on <a href="https://www.youtube.com/channel/UCnTbfjNNWxFMyqW-d2QgHYw">YouTube</a>
    </p>
  </div>
</article>
