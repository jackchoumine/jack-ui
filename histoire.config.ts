/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-23 01:05:40
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 01:20:29
 * @Description :
 */
import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: 'histoire.setup.ts',
  plugins: [HstVue()]
})
