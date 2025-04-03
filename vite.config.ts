import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import Terminal from 'vite-plugin-terminal';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    Terminal({
      console: 'terminal',
      output: ['terminal', 'console']
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'pokeapi-js-wrapper-sw': './app/utils/pokeapi-js-wrapper-sw.ts'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'pokeapi-js-wrapper-sw' 
            ? 'pokeapi-js-wrapper-sw.js'
            : 'assets/[name]-[hash].js';
        }
      }
    }
  }
});
