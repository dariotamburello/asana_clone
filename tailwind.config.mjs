/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'coral': {
					0: '#ffeaec',
					100: '#f0d3d9',
					200: '#e1bbc7',
					300: '#d2a4b4',
					400: '#c38ca1',
					500: '#b4758e',
					600: '#a55e7c',
					700: '#964669',
					800: '#872f56',
					900: '#6c0535',
					1000: '#690031'
				}
			},
			fontFamily: {
				TWKLausanne: ["TWK Lausanne", "Helvetica Neue", "Helvetica", "sans-serif"],
				Ghost: ["Ghost", "Helvetica Neue", "Helvetica", "sans-serif"],
				GhostMedium: ["Ghost-Medium", "Helvetica Neue", "Helvetica", "sans-serif"],
				Lausanne: ["Lausanne", "Helvetica Neue", "Helvetica", "sans-serif"]
			}
		}
	},
	plugins: [],
}
