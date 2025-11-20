<script lang="ts">
  import { Localized } from "@nubolab-ffwd/svelte-fluent"
</script>

<div class="location-warning">
  <div class="container">
    <span class="icon">⚠️</span>
    <p>
      <Localized id="location-warning--text" />
    </p>
  </div>
</div>

<style>
  .location-warning {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    position: absolute;
    z-index: 10;
    margin-top: 75px;
    pointer-events: none;
  }

  .container {
    background-color: #ffcc00; /* Yellow warning color */
    color: #333;
    padding: 12px 30px;
    border-radius: 50px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    max-width: 900px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-align: center;
    pointer-events: auto;
  }

  .icon {
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.4;
  }

  @media screen and (max-width: 767px) {
    .location-warning {
      margin-top: 20px;
      position: relative;
      margin-bottom: -20px; /* Pull content up slightly if needed, or just let it flow */
    }
    
    p {
      font-size: 0.9rem;
    }

    .container {
      border-radius: 12px; /* Less rounded on mobile to save space/look better if multi-line */
      padding: 10px 20px;
      width: 100%;
    }
  }
</style>
