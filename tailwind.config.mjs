/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: '#020617',
				surface: '#0f172a',
				'surface-elevated': '#1e293b',
				hover: '#334155',
				border: '#334155',
				text: {
					primary: '#f8fafc',
					secondary: '#cbd5e1',
					muted: '#94a3b8',
					dim: '#64748b'
				},
				primary: '#22c55e',
				'accent-glow': 'rgba(34, 197, 94, 0.4)',
				'accent-soft': 'rgba(34, 197, 94, 0.1)',
			},
			fontFamily: {
				sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
				heading: ['Archivo', 'system-ui', 'sans-serif'],
				mono: ['Share Tech Mono', 'monospace']
			},
			boxShadow: {
				'accent-glow': '0 0 24px rgba(34, 197, 94, 0.4)',
				'accent-glow-sm': '0 0 12px rgba(34, 197, 94, 0.3)',
			}
		}
	},
	plugins: []
};