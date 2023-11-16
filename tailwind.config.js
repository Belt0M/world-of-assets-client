/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: '#0d0d0d',
				white: '#f6f6f6',
			},
		},
	},
	plugins: [],
}
