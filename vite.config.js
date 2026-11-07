import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const raiz = dirname(fileURLToPath(import.meta.url))

// duas páginas: o site completo (/) e o "link na bio" (/links)
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        site: resolve(raiz, 'index.html'),
        links: resolve(raiz, 'links/index.html'),
      },
    },
  },
})
