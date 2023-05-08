<script lang="ts">
  export let l10n: string
  export let href: string
</script>

<a class="link" data-l10n-name={l10n} {href} target="_blank" rel="noopener">
  <slot />
</a>

<style>
  a {
    text-decoration: none;
    transition: 0.4s;
  }
</style>
