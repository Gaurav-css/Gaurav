

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
      fontFamily: {
        bungee: ["var(--font-bungee-spice)"],
        surgena: ["var(--font-surgena)"],
      },
      colors: {
        'brand-blue': '#B0F4F9',
        'brand-green': '#C3F53C',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px rgba(0,0,0,1)',
      },
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
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        'glow-border': 'border-glow 6s linear infinite',
        scroll: "scroll 40s linear infinite",
        "scroll-reverse": "scroll 40s linear infinite reverse",
      },
    },
  },
  plugins: [],
}

export default config
