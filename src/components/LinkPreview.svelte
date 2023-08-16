<!-- <script>
  export let url;
  let metadata = null;

  async function fetchMetadata() {
    const response = await fetch(`/api/metadata?url=${url}`);
    metadata = await response.json();
  }

  fetchMetadata();
</script> -->

<!-- {#if metadata}
<div class="link-preview">
  <h3>{metadata.title}</h3>
  <p>{metadata.description}</p>
  {#if metadata.image && metadata.image.url}
    <img src={metadata.image.url} alt={metadata.title} />
  {/if}
</div>
{:else}
<p>Loading...</p>
{/if} -->

<div>
  <h1>Hello World</h1>
</div>
<!-- <style>
  /* Style your link preview here */
  .link-preview {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
</style> -->
