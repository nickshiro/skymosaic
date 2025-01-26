import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@app': '/src/app',
			'@shared': '/src/shared',
			'@widgets': '/src/widgets',
			'@features': '/src/features'
		}
	}
});
