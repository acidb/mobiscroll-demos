import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import dyndateplugin from './dyndateplugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dyndateplugin(),
    dts({
      include: ['./dyndateplugin'],
    }),
  ],
});
