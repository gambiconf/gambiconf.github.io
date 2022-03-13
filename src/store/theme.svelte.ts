import { browser } from "$app/environment";

export type Theme = "light" | "dark";

// Starts at "light" to match the prerendered SSR output. The layout reads
// localStorage on mount and updates this state, which then reactively swaps
// the <link rel="stylesheet"> to the right theme.
export const themeState = $state<{ value: Theme }>({ value: "light" });

export const setTheme = (next: Theme) => {
  themeState.value = next;
  if (browser) {
    localStorage.setItem("theme", next);
    document.body.setAttribute("theme", next);
  }
};

export const loadStoredTheme = () => {
  if (!browser) return;
  const stored = localStorage.getItem("theme");
  setTheme(stored === "dark" ? "dark" : "light");
};

export const toggleTheme = () => {
  setTheme(themeState.value === "light" ? "dark" : "light");
};
