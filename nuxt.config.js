module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: "Цветочный блюз",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "floral-blues project"
			}
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
			// { rel: 'stylesheet', href: '/styles/reset.css' }
		]
	},
	// If you have problems debugging vue-files in devtools,
	// set this to false - it *may* help
	// https://vue-loader.vuejs.org/en/options.html#cachebusting
	cacheBusting: false,
	/*
	 ** Customize the progress bar color
	 */
	loading: { color: "#3B8070" },
	/*
	 ** Build configuration
	 */
	build: {
		styleResources: {
			css: './assets/styles/reset.css',
			scss: './assets/app.scss'
		},
		extractCSS: true,
		/*
		 ** Run ESLint on save
		 */
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				});
			}
		}
	},

	modules: [
		'@nuxtjs/axios'
	],
	watch: ['server/**/*.js'],
	serverMiddleware: ['~/server/index.js']
};
