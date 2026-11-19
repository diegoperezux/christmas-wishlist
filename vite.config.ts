import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => ({
  // En Vercel o servidores raíz usamos '/'. Si se construye en GitHub Actions para GitHub Pages, '/christmas-wishlist/'
  base: process.env.GITHUB_ACTIONS ? '/christmas-wishlist/' : '/',
  plugins: [react(), tailwindcss()],
}))
