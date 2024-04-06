module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  ignorePatterns: ["*.cjs"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  globals: {
    globalThis: false,
  },
  rules: {
    "svelte/valid-compile": [
      "error",
      {
        ignoreWarnings: true,
      },
    ],
    "svelte/no-at-html-tags": "off",
  },
};
