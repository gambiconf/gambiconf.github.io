import type { FluentVariable } from "@fluent/bundle";
import { getFluentContext } from "@nubolab-ffwd/svelte-fluent";
import { browser } from "$app/environment";

export type Locale = "pt" | "en";

const SUPPORTED_LOCALES: readonly Locale[] = ["pt", "en"];
const DEFAULT_LOCALE: Locale = "pt";
const STORAGE_KEY = "locale";

const isSupported = (value: string | null | undefined): value is Locale =>
  !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);

// Starts at the default so SSR output is stable and deterministic. The
// layout's onMount swaps this to the visitor's real preference once hydrated.
export const localeState = $state<{ locale: Locale }>({ locale: DEFAULT_LOCALE });

export const setLocale = (next: Locale) => {
  localeState.locale = next;
  if (browser) {
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }
};

export const loadStoredLocale = () => {
  if (!browser) return;
  const stored = localStorage.getItem(STORAGE_KEY);
  setLocale(isSupported(stored) ? stored : DEFAULT_LOCALE);
};

export const t = (message: string, args: Record<string, FluentVariable> = {}) => {
  const { localize } = getFluentContext();
  return localize(message, args);
};
