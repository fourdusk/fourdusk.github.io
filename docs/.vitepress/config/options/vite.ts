import { defineConfig } from 'vitepress'
import { resolve } from 'node:path'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': resolve(process.cwd(), 'docs/.vitepress')
      }
    },
    plugins: [vueJsx()]
  }
})
