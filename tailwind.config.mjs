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
					muted: '#ebe6e7'
				},
				primary: '#38bdf8',
				accent: '#f472b6',
				proficient: '#34d399',
				intermediate: '#60a5fa',
				beginner: '#94a3b8'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['Share Tech Mono', 'monospace']
			}
		}
	},
	plugins: []
};