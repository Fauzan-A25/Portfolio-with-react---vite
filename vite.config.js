import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // ✅ BENAR: Hanya path relative
  base: '/Portfolio-with-react-and-vite/',
  
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true,
    strictPort: false,
  },
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'swiper-vendor': ['swiper'],
        },
      },
    },
  },
});
