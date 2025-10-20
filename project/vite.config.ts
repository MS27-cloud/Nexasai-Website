import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for GitHub Pages project site: https://ms27-cloud.github.io/Nexasai-Website/
  base: '/Nexasai-Website/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
