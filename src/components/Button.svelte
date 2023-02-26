<script lang="ts">
  export let url: string
</script>

<div class="button">
  <a href={url} target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</div>

<style>
  .button {
    display: flex;
    justify-content: center;
  }

  a {
    background-color: #f34b21;
    padding: 10px;
    border-radius: 4px;
    min-width: 25%;

    color: white;
    text-decoration: none;
    text-align: center;

    transition: 0.4s;
  }
  a:visited {
    color: white;
  }
  a:hover {
    transform: scale(0.99);
    filter: brightness(0.9);
  }
</style>
