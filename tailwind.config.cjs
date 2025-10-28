module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b0f14',
        surface: '#0f1724',
        muted: '#9aa4b2',
        accent: '#7dd3fc',
        border: '#ffffff0d'
      },
      backgroundColor: {
        primary: '#0b0f14',
        surface: '#0f1724'
      },
      textColor: {
        primary: '#ffffff',
        muted: '#9aa4b2'
      },
      borderColor: {
        DEFAULT: '#ffffff0d',
        accent: '#7dd3fc'
      }
    }
  },
  plugins: []
}
