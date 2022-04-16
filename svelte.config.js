import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		browser: {
			hydrate: false,
			router: false,
		},
		prerender: {
			default: true,
		},
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ['none'],
				'style-src': ['self'],
			}
		}
	}
};

export default config;
