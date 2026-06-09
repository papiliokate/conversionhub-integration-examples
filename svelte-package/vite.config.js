import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: false
      }
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'SvelteGamifiedCaptcha',
      fileName: 'svelte-gamified-captcha',
    },
    rollupOptions: {
      external: ['svelte', 'svelte/internal'],
      output: {
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
})
