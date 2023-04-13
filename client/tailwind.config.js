/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                ss: "#ff9900",
                xx: "#448844",
            },
            fontFamily: {
                admin: ["Roboto Slab", "serif"],
                groundAdd: ["Roboto Mono", "monospace"],
                heading: ["Sedgwick Ave Display", "cursive"],
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
