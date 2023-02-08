import path, { resolve } from 'path';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/background.ts'),
      name: 'background',
      // the proper extensions will be added
      fileName: 'index',
    },
    outDir: "dist/background"
  },
  publicDir: false,
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    }
  },
})
