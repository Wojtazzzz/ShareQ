/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					base: '#59A5D8',
					dark: '#386FA4',
					light: '#84D2F6',
				},
				secondary: {
					base: '#133C55',
				},
				accent: {
					base: "#91E5F6"
				}
			},
		},
	},
	plugins: [],
};

// https://coolors.co/133c55-386fa4-59a5d8-84d2f6-91e5f6
