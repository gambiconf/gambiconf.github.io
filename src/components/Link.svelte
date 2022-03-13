<script lang="ts">
  import { resolve } from "$app/paths"
  import { Fa, FaLayers } from "svelte-fa"
  import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

  interface Props {
    l10n?: string;
    href: string;
    variant?: 'primary' | 'secondary';
    externalIcon?: boolean;
    children?: import('svelte').Snippet;
    class?: string;
    target?: string;
    rel?: string;
  }

  let {
    l10n = '',
    href,
    variant = 'primary',
    externalIcon = false,
    target,
    rel,
    children,
    ...rest
  }: Props = $props();

  const isInternal = $derived(href.startsWith('/'))
  // `resolve()` is typed against the known route IDs, but this generic Link
  // also accepts hash links (`/#about`) and arbitrary internal paths. The
  // runtime guard above is enough, so we cast the argument through.
  type ResolveArg = Parameters<typeof resolve>[0]
  const url = $derived(isInternal ? resolve(href as ResolveArg) : href)
</script>

<a
  class={`link ${rest.class}`}
  data-l10n-name={l10n}
  data-variant={variant}
  href={url}
  target={target}
  rel={rel}
  {...isInternal ? {} : { target: "_blank", rel: "noopener" }}
>
  {@render children?.()}

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
