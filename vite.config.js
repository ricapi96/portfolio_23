import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: process.env.NODE_ENV === 'development', // Only open in browser during development
  },
});
