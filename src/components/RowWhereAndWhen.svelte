<script lang="ts">
  import Calendar from './Calendar.svelte'
  import Window from './Window.svelte'
  import Button from './Button.svelte'
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;

    padding: 25px;
  }

  .calendar {
    align-self: center;
    margin-bottom: 15px;
  }

  .content p:first-of-type {
    margin-top: 0;
  }

  .actions {
    display: flex;
    gap: 25px
  }

  .avoid-wrap {
    display:inline-block;
  }

  @media screen and (min-width: 768px) {
    .content {
      flex-direction: row;
    }

    .calendar {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
</style>

<Window title="Where and When">
  <div class="content">
    <div class="calendar">
      <Calendar />
    </div>

    <div>
      <p>On the 3rd of September, the event is in person in <a href="https://www.reaktor.com/lisbon/">Reaktor</a>:</p>

      <address>
        Largo do Duque de Cadaval 17<br />
        Lisbon, Portugal<br />
        <a href="https://goo.gl/maps/eMAancyj5pRT7E2cA">See on Google Maps</a>
      </address>

      <p>On the 10th of September, the event is only online.</p>

      <p>
        Free streaming for both days on <a href="https://www.youtube.com/channel/UCnTbfjNNWxFMyqW-d2QgHYw">YouTube</a>
      </p>

      <div class="actions">
        <Button
          url="https://www.eventbrite.com/e/gambiconf-eu-in-person-day-3-september-tickets-358129012517"
        >
          Register for the <span class="avoid-wrap">in-person day</span>
        </Button>

        <Button
          url="https://www.eventbrite.com/e/gambiconf-eu-online-day-10-september-tickets-358997881327"
        >
          Register for the <span class="avoid-wrap">online day</span>
        </Button>
      </div>
    </div>
  </div>
</Window>
