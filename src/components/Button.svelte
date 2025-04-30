<script lang="ts">
  interface Props {
    url: string
    newPage?: boolean
    children?: import("svelte").Snippet
  }

  let { url, newPage, children }: Props = $props()
</script>

<div class="button">
  <a href={url} rel="noopener noreferrer" target={newPage ? "_blank" : "_self"}>
    {@render children?.()}
  </a>
</div>

<style>
  .button {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  a {
    padding: 10px;
    border-radius: 4px;
    width: 100%;

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
