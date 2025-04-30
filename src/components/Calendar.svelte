<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
  import { annotate } from "svelte-rough-notation"
</script>

<div class="root">
  <div class="month"><Localized id="calendar--month" /></div>

  <span class="weekday"><Localized id="calendar--sunday" /></span>
  <span class="weekday"><Localized id="calendar--monday" /></span>
  <span class="weekday"><Localized id="calendar--tuesday" /></span>
  <span class="weekday"><Localized id="calendar--wednesday" /></span>
  <span class="weekday"><Localized id="calendar--thursday" /></span>
  <span class="weekday"><Localized id="calendar--friday" /></span>
  <span class="weekday"><Localized id="calendar--saturday" /></span>

  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span class="regular-day">1</span>
  <span
    class="highlighted-day"
    use:annotate={{
      type: "circle",
      iterations: 2,
      visible: true,
      padding: -5,
      color: "var(--calendar-highlighted-day-color)",
    }}
  >
    2
  </span>
  <span
    class="highlighted-day"
    use:annotate={{
      type: "circle",
      iterations: 2,
      visible: true,
      padding: -5,
      color: "var(--calendar-highlighted-day-color)",
    }}
  >
    3
  </span>
  <span class="regular-day">4</span>
  <span class="regular-day">5</span>
  <span class="regular-day">6</span>
  <span class="regular-day">7</span>
  <span class="regular-day">8</span>
  <span class="regular-day">9</span>
  <span class="regular-day">10</span>
  <span class="regular-day">11</span>
  <span class="regular-day">12</span>
  <span class="regular-day">13</span>
  <span class="regular-day">14</span>
  <span class="regular-day">15</span>
  <span class="regular-day">16</span>
  <span class="regular-day">17</span>
  <span class="regular-day">18</span>
  <span class="regular-day">19</span>
  <span class="regular-day">20</span>
  <span class="regular-day">21</span>
  <span class="regular-day">22</span>
  <span class="regular-day">23</span>
  <span class="regular-day">24</span>
  <span class="regular-day">25</span>
  <span class="regular-day">26</span>
  <span class="regular-day">27</span>
  <span class="regular-day">28</span>
  <span class="regular-day">29</span>
  <span class="regular-day">30</span>
</div>

<style>
  .root {
    font-size: 1rem;

    width: 315px;
    border: 1px solid var(--calendar-border-color);
    border-radius: 5px;
    overflow: hidden;

    padding: 0 10px 10px 10px;
    box-sizing: border-box;
  }

  .month {
    color: var(--calendar-weekday);

    margin-top: 18px;
    text-transform: uppercase;
    text-align: center;
  }

  .weekday {
    color: var(--calendar-weekday);
  }

  .root span {
    float: left;
    width: 41px;
    height: 41px;
    text-align: center;
    line-height: 40px;
  }

  .regular-day {
    color: #dac5b6;
    opacity: 0.7;
  }

  .highlighted-day {
    color: var(--calendar-highlighted-day-color);
    font-weight: bold;
  }
</style>
