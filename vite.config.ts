/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 20:58:37
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-22 21:28:14
 * @Description :
 */
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./examples', import.meta.url)),
      _c: fileURLToPath(new URL('./components', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: resolve('examples/main.ts')
    }
  }
})
