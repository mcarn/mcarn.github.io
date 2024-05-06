import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				// https://uicolors.app/create
				primary: {
					50: "#f3f1fe",
					100: "#e7e2fc",
					200: "#c6bef9",
					300: "#9184f5",
					400: "#5543ed",
					500: "#301add",
					600: "#250dbc",
					700: "#220c98",
					800: "#1f0e7e",
					900: "#1f1169",
					950: "#060312",
				},
				recipe: {
					50: "#fbf8eb",
					100: "#f7edca",
					200: "#f0da98",
					300: "#e7be5d",
					400: "#dfa330",
					500: "#cf8d23",
					600: "#b56e1c",
					700: "#8f4e19",
					800: "#773f1c",
					900: "#66361d",
					950: "#3b1b0d",
				},
			},
		},
	},
	plugins: [
		plugin(({ addBase, theme }) => {
			addBase({
				h1: {
					fontSize: theme("fontSize.3xl"),
					fontWeight: theme("fontWeight.medium"),
					color: theme("colors.primary.950"),
				},
				p: {
					color: theme("colors.primary.950"),
				},
				a: {
					color: theme("colors.primary.600"),
				},
			})
		}),
	],
}
