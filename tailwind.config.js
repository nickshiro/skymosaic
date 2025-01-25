export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				border: 'var(--border)',
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)'
				},
				input: {
					bg: 'var(--input-bg)',
					selection: {
						bg: 'var(--input-selection-bg)',
						text: 'var(--input-selection-text)'
					}
				}
			},
			backgroundColor: {
				primary: 'var(--primary-bg)',
				secondary: 'var(--secondary-bg)'
			},
			fontFamily: {
				primary: 'Inter, sans-serif'
			}
		}
	},

	plugins: []
};
