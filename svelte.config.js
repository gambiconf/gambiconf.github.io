import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	onwarn: (warning, handler) => {
		if (
			['a11y-missing-content', 'security-anchor-rel-noreferrer'].find((rule) =>
				warning.code.includes(rule)
			)
		) {
			return;
		}

		handler(warning);
	},

	kit: {
		adapter: staticAdapter({
			fallback: 'index.html'
		}),
		prerender: { entries: [] }
	}
};

export default config;
