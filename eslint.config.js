import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import { fileURLToPath } from "node:url";
import eslint from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import svelteConfig from "./svelte.config.js";
import globals from "globals";

const gitIgnorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitIgnorePath),
  eslint.configs.recommended,
  ts.configs.recommended,
  svelte.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
  {
    rules: {
      "svelte/valid-compile": [
        "error",
        {
          ignoreWarnings: true,
        },
      ],
      "svelte/no-at-html-tags": "off",
    },
  },
]);
