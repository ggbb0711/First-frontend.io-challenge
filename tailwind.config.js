/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Tailwindcss/**/*.{html,js}'],
  theme: {
    colors:{
      'White': 'hsl(0, 0%, 100%)',
      'Light-gray': 'hsl(212, 45%, 89%)',
      'Grayish-blue': 'hsl(220, 15%, 55%)',
      'Dark-blue': 'hsl(218, 44%, 22%)'
    },
    fontFamily:{
      'Outfit':['Outfit']
    }
  },
  plugins: [],
}
