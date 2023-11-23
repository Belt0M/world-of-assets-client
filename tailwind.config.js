/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: '#121212',
				white: '#f6f6f6',
				secondary: '#1d232a',
				darkGray: '#8b8f92',
			},
			fontFamily: {
				sub: 'Pixelify Sans, sans-serif',
			},
		},
	},
	plugins: [],
}
