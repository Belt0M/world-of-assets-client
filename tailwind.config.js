/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: '#121212',
				white: '#f6f6f6',
			},
			fontFamily: {
				sub: 'Pixelify Sans, sans-serif',
			},
			backgroundColor: {
				secondary: '#1d232a',
			},
		},
	},
	plugins: [],
}
