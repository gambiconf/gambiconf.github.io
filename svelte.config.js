import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import staticAdapter from "@sveltejs/adapter-static";

const environment = process.env.ENV;
const mapEnvironmentToBasePath = {
  production: "",
  staging: "/website-staging",
};
const basePath = mapEnvironmentToBasePath[environment] ?? process.env.BASE_PATH;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    paths: {
      base: basePath,
    },
    adapter: staticAdapter({
      fallback: "404.html",
    }),
    prerender: {
      // Warn (don't fail the build) on 404s for linked assets missing from
      // `static/` — the legacy sponsor logos (conta-aberta.png, codeminer42.svg,
      // usp.png, totvs.jpg, symcomp.png, elixir-em-foco.png, github.png,
      // magalu-cloud.svg) referenced by SponsorBar / RowPartners aren't
      // shipped in this repo but render fine when deployed with the full asset
      // bundle.
      handleHttpError: "warn",
    },
  },
};

export default config;
