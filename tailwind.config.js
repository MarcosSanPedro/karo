/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				secundary: 'rgb(239, 247, 255)'
			}
		}
	},
	daisyui: {
		themes: ['corporate']
	},
	plugins: [require('daisyui')]
};
