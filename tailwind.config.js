/** @type {import('tailwindcss').Config} */
module.exports = {
	// mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				profilePicBgImg: "url('././components/images/background.jpg')",
				overallBgImg: "url('././components/images/backoo.jpeg')",
			},
			colors: {
				overallBgOpacity: "rgba(195, 163, 106, 0.9)",
			},
		},
	},
	plugins: [],
};
