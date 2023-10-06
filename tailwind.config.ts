import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'lg': {'max': '900px'},
        'md': {'max': '768px'},
      },
      colors: {
        'primary': '#000000',
        'secondary': '#DCDCDC',
        'white': '#FFFFFF',
        'bg': '#F6F6F6',
        'gray': {
          '50': '#F3F3F3',
          '100': '#C4C4C4'
        },
        'text': '#1D1D1D',
        'pars': '#7C7C7C',
      }
    },
  },
  plugins: [],
}
export default config
