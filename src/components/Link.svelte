<script lang="ts">
  import { base } from "$app/paths"
  import { Fa, FaLayers } from "svelte-fa"
  import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

  export let l10n: string = ''
  export let href: string
  export let variant: 'primary' | 'secondary' = 'primary'
  export let externalIcon: boolean = false

  const url = href.startsWith('/') ? `${base}${href}` : href
</script>

<a
  class={`link ${$$restProps.class}`}
  data-l10n-name={l10n}
  data-variant={variant}
  href={url}
  {...href.startsWith('/') ? {} : {target: "_blank", rel: "noopener" }}
>
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

  :global(body[theme='light'] a[data-variant='primary']) {
    color: var(--color, rgb(159, 91, 1));
  }
  :global(body[theme='dark'] a[data-variant='primary']) {
    color: var(--color, rgb(199 162 127));
  }

  :global(body[theme='light'] a[data-variant='secondary']) {
    color: var(--color, rgb(84, 89, 95));
  }
  :global(body[theme='dark'] a[data-variant='secondary']) {
    color: var(--color, rgb(175, 169, 158));
  }

  a[data-variant]:hover {
    color: var(--hover-color, #ff8915);
  }
</style>
