import type { FluentBundle, FluentVariable } from "@fluent/bundle";
import { getFluentContext } from "@nubolab-ffwd/svelte-fluent";

export const localeState = $state({
  locale: "pt",
  bundle: null as FluentBundle | null,
})

export const t = (message: string, args: Record<string, FluentVariable> = {}) => {
  const { localize } = getFluentContext();
  
    return localize(message, args);
  };

