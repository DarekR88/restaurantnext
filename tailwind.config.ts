import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        "font-primary": "var(--font-primary)",
        "font-secondary": "var(--font-secondary)",
        "button-primary": "var(--button-primary)",
        "button-secondary": "var(--button-secondary)",
      },
      fontFamily: {
        Dancing: ["Dancing Script", "sans-serif"],
        Open: ["Open Sans", "sans-serif"],
        Arizonia: ["Arizonia", "sans-serif"],
        Crimson: ["Crimson Text", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
