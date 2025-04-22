<script lang="ts">
  export let title: string
</script>

<div class="window">
  <div class="title-bar">
    <div class="title-buttons">
      <div class="button-close"></div>
      <div class="button-minimize"></div>
      <div class="button-expand"></div>
    </div>

    <div>
      {title}
    </div>
  </div>

  <slot />
</div>

<style>
  .window {
    border-radius: 10px;

    max-width: 1140px;

    margin-left: 2vw;
    margin-right: 2vw;
  }

  .title-bar {
    text-align: center;
    font-weight: bold;
  }

  .title-buttons {
    position: relative;
    top: 10px;

    display: flex;
    align-items: center;
    gap: 4px;

    height: 0;

    padding-left: 10px;
  }

  .title-buttons div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 50%;
  }

  .button-close {
    background-color: red;
  }

  .button-minimize {
    background-color: #f2e617;
  }

  .button-expand {
    background-color: #bfff5a;
  }

  @media screen and (min-width: 768px) {
    .window {
      margin-right: auto;
      margin-left: auto;
    }
  }
</style>
