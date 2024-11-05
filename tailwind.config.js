/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#168DD2",   // Blue color for primary use
        secondary: "#fff",    // White color for secondary elements
        tertiary: "#f0f0f0",  // Light gray color for background
      },
      fontFamily: {
        'jetBrains': ['JetBrains Mono', 'monospace'], // Correct font name with fallback
        'Poppins': ['Poppins','sans']
      },
    },
  },
  plugins: [],
};
