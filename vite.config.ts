import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import reactRefresh from '@vitejs/plugin-react-refresh';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
import terser  from '@rollup/plugin-terser';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.VITE_GOOGLE_API_KEY': JSON.stringify(process.env.VITE_GOOGLE_API_KEY),
      },
    }),
    terser(), 
  ],
});
