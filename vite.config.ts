import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'; // Import as a TypeScript module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias '@' to the src folder for cleaner imports
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Resolve the output directory path correctly
  },
  server: {
    host: true, // Enable external network access
    strictPort: true, // Port 2024 will be used strictly
    port: 2024, // Use port 2024
  },
});
