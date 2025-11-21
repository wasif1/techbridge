/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // from reference site
        primary: '#FF8C00',        // example accent colour (orange)
        secondary: '#1A1A1A',      // very dark background
        accent: '#00D1FF',         // light cyan accent
        glass: 'rgba(255,255,255,0.08)', // glass overlay
        textLight: '#E5E5E5',
        textDark: '#333333',
      },
      backgroundImage: {
        'hero-grad': 'linear-gradient(135deg,#08122a 0%, #0b1220 100%)'
      }
    },
  },
  plugins: [],
}
