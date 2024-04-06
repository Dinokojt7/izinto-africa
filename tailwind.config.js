/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Hero: "url('assets/Hero.jpg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        // Add custom background sizes as needed
        '50%': '50%',
        '100%': '100%',
      },
    },
  },
  plugins: [],
}
