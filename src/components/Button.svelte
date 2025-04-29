<script lang="ts">
  interface Props {
    url: string;
    children?: import('svelte').Snippet;
  }

  let { url, children }: Props = $props();
</script>

<div class="button">
  <a href={url} target="_blank" rel="noopener noreferrer">
    {@render children?.()}
  </a>
</div>

<style>
  .button {
    display: flex;
    justify-content: center;
  }

  a {
    padding: 10px;
    border-radius: 4px;
    min-width: 25%;

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
