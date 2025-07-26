

import type { Config } from 'tailwindcss'

const config: Config = {
 
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'border-glow': {
          '0%': { borderColor: '#8b5cf6' },       // purple-500
          '25%': { borderColor: '#06b6d4' },      // cyan-400
          '50%': { borderColor: '#f43f5e' },      // rose-500
          '75%': { borderColor: '#10b981' },      // emerald-500
          '100%': { borderColor: '#8b5cf6' },     // back to purple
        },
      },
      animation: {
        'glow-border': 'border-glow 6s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
