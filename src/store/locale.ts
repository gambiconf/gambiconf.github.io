import type { FluentBundle, FluentVariable } from '@fluent/bundle';
import { writable, derived } from 'svelte/store';

export const locale = writable('pt');
export const bundle = writable<FluentBundle>(null);

export const t = derived(bundle, ($bundle) => {
  return (message: string, args: Record<string, FluentVariable> = {}) => {
    const rawMessage = $bundle.getMessage(message)
    const formattedMessage = $bundle.formatPattern(rawMessage.value, args)
  
    return formattedMessage
  }
})

