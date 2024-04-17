<script lang="ts">
  import { base } from "$app/paths"
  import { Fa, FaLayers } from "svelte-fa"
  import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

  export let l10n: string = ''
  export let href: string
  export let externalIcon: boolean = false

  const url = href.startsWith('/') ? `${base}${href}` : href
</script>

<a class={`link ${$$restProps.class}`} data-l10n-name={l10n} href={url} {...href.startsWith('/') ? {} : {target: "_blank", rel: "noopener" }}>
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
