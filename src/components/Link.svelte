<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte"
  import FaLayers from "svelte-fa/src/fa-layers.svelte"
  import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

  export let l10n: string = ''
  export let href: string
  export let externalIcon: boolean = false
</script>

<a class={`link ${$$restProps.class}`} data-l10n-name={l10n} {href} target="_blank" rel="noopener">
  <slot />

  {#if externalIcon}
    <FaLayers size="0.8x">
      <Fa icon={faExternalLink} />
    </FaLayers>
  {/if}
</a>

<style>
  a {
    text-decoration: none;
    transition: 0.4s;
  }
</style>
