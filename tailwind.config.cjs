const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	// purge: {
  //   content: [
  //    "./src/**/*.svelte",
  //   ],
  //   enabled: "production" // disable purge in dev
  // },
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	]
};

module.exports = config;
