<script lang="ts">
  import { FluentBundle, FluentResource } from '@fluent/bundle'
  import { FluentProvider } from '@nubolab-ffwd/svelte-fluent'
  import { negotiateLanguages } from '@fluent/langneg'
  import translationsEn from '../../l10n/en.ftl?raw'
  import translationsPt from '../../l10n/pt.ftl?raw'
  import { locale, bundle } from '../store/locale'

  // this could be stored in a user profile or browser localStorage
  export let selectedLocale = ''
  export let navigatorLanguages = 'navigator' in globalThis ? globalThis.navigator.languages : []

  const defaultLocale = 'pt'
  const resources = {
    en: new FluentResource(translationsEn),
    pt: new FluentResource(translationsPt),
  }
  const supportedLocales = Object.keys(resources)

  const generateBundles = (userLocales: readonly string[]) => {
    // Choose locales that are best for the user.
    const selectedLocales = negotiateLanguages(userLocales, supportedLocales, {
      defaultLocale,
      strategy: 'lookup'
    })

    // prepare fluent bundles
    return selectedLocales.map((locale) => {
      const fluentBundle = new FluentBundle(locale)
      fluentBundle.addResource(resources[locale])

      bundle.set(fluentBundle)

      return fluentBundle
    })
  }

  locale.subscribe((value) => {
    selectedLocale = value
  });
</script>

<FluentProvider bundles={generateBundles(selectedLocale ? [selectedLocale] : navigatorLanguages)}>
  <slot />
</FluentProvider>
