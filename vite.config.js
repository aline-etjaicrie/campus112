import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'public',
  server: { port: 3457 },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index:         resolve(__dirname, 'public/index.html'),
        etudiants:     resolve(__dirname, 'public/etudiants.html'),
        professionnels:resolve(__dirname, 'public/professionnels.html'),
        evenementiel:  resolve(__dirname, 'public/evenementiel.html'),
        culture:       resolve(__dirname, 'public/culture.html'),
        livinglab:     resolve(__dirname, 'public/living-lab.html'),
        eco:           resolve(__dirname, 'public/eco-conception.html'),
      }
    }
  }
})
