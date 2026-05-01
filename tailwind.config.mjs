/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        surface: '#1e293b',
        hover: '#334155',
        border: '#475569',
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#94a3b8'
        },
        primary: '#60a5fa',
        accent: '#22d3ee',
        proficient: '#34d399',
        intermediate: '#60a5fa',
        beginner: '#94a3b8'
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      }
    }
  },
  plugins: []
};