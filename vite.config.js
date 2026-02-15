import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/project-deadpool/',
  plugins: [
    tailwindcss(),
  ],
})