// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@css': '/src/css',
      '@components': '/src/components',
      '@modules': '/src/modules',
      '@api': '/src/api',
      '@fonts': '/src/fonts',
      '@images': '/src/images',
      // '@css': path.resolve(__dirname, 'src/css'),
      // '@components': path.resolve(__dirname, 'src/components'),
      // '@modules': path.resolve(__dirname, 'src/modules'),
      // '@api': path.resolve(__dirname, 'src/api'),
      // '@fonts': path.resolve(__dirname, 'fonts'),
      // '@images': path.resolve(__dirname, 'src/images'),
    },
  },
});