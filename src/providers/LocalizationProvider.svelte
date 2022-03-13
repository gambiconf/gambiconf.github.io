<script lang="ts">
  import { FluentBundle, FluentResource } from "@fluent/bundle"
  import { FluentProvider } from "@nubolab-ffwd/svelte-fluent"
  import translationsEn from "../../l10n/en.ftl?raw"
  import translationsPt from "../../l10n/pt.ftl?raw"
  import { localeState, type Locale } from "../store/locale.svelte"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  const resources: Record<Locale, FluentResource> = {
    en: new FluentResource(translationsEn),
    pt: new FluentResource(translationsPt),
  }

  const buildBundle = (locale: Locale) => {
    const bundle = new FluentBundle(locale)
    bundle.addResource(resources[locale])
    return bundle
  }

  const bundles = $derived([buildBundle(localeState.locale)])
</script>

<FluentProvider {bundles}>
  {@render children?.()}
</FluentProvider>
