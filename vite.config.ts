import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    fs: {
      // Permettre l'accès aux fichiers Sanity
      allow: ['..']
    }
  },
  define: {
    // Nécessaire pour Sanity Studio
    'process.env': {}
  }
});