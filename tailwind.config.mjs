/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter']
		},
		extend: {
			colors: {
				primary: {
					green: 'hsl(150, 68%, 53%)',
					dark: 'hsl(150, 7%, 11%)',
				},
				gray: {
					17: 'hsla(0, 0%, 75%, 0.17)',
				},
				body:  'hsl(180, 1%, 82%)',
			},
		},
	},
	plugins: [],
}
