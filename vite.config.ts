/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 20:58:37
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-26 01:26:25
 * @Description :
 */
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import dts from 'vite-plugin-dts'
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    // 生成dts文件 报错，但是生成了
    dts({
      entryRoot: 'components',
      outputDir: 'es'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./examples', import.meta.url)),
      _c: fileURLToPath(new URL('./components', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // input: resolve('examples/main.ts')
      input: resolve('components/index.ts'),
      external: ['vue'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: 'es',
          preserveModules: true,
          preserveModulesRoot: 'components'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: 'lib',
          // 输出模块保持原来的目录结构
          preserveModules: true,
          // 保持原来的目录结构
          preserveModulesRoot: 'components'
        }
      ]
    },
    lib: {
      entry: resolve('components/index.ts')
      // name: 'jackUI',
      // formats: ['es', 'cjs']
      // fileName: (format) => `index.${format}.js`
    },
    minify: false
    // extractCSS: true
  }
})
