/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        title_hero: "48px",
        paragraph_feature: "28px",
        stats: "1.42",
      },
      backgroundColor: {
        white2: '#F9FAFB',
        gray: '#4B5563',
        black2: '#111827',
        smooth_black: '#374151',
        head_black: '#020113',
        dark_purple: '#4F46E5',
        smooth_purple: '#6366F1',
        light_purple: '#818CF8',
        very_light_purple: '#E0E7FF',
        yellow: '#FACC15',
      },
      colors: {
        white2: '#F9FAFB',
        gray: '#4B5563',
        black2: '#111827',
        smooth_black: '#374151',
        head_black: '#020113',
        dark_purple: '#4F46E5',
        smooth_purple: '#6366F1',
        light_purple: '#818CF8',
        very_light_purple: '#E0E7FF',
        yellow: '#FACC15',
      }
    },
  },
  plugins: [],
}

