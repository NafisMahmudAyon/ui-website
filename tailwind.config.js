/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Poppins"],
			code: ["Ubuntu Mono"],
			mono: ["Anta"],
		},
		extend: {
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				textColor: "#334155",
				textHoverColor: "#0f172a",
				darkTextColor: "#e2e8f0",
				darkTextHoverColor: "#f1f5f9",
				bgColor: "#f1f5f9",
				darkBgColor: "#0f172a",
				hoverBgColor: "#1f262e66",
				darkHoverBgColor: "#71829566",
				primary: "#B63E96", // 240,86,199
				primaryDark: "#58E6D9", // 80,230,217
			},
			transitionProperty: {
				color: "color",
				spacing: "margin, padding",
			},
			animation: {
				spinslow: "spin 8s linear infinite",
			},
		},
		screens: {
			xs: { min: "479px" },
			// => @media (max-width: 1535px) { ... }

			sm: { min: "639px" },
			// => @media (max-width: 1279px) { ... }

			md: { min: "767px" },
			lg: { min: "1023px" },
			// => @media (max-width: 1023px) { ... }

			xl: { min: "1279px" },
			// => @media (max-width: 767px) { ... }

			"2xl": { min: "1535px" },
			// => @media (max-width: 639px) { ... }

			// => @media (max-width: 479px) { ... }
		},
	},
	plugins: [],
};




