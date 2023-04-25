/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-23 01:10:57
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 02:45:49
 * @Description :
 */
import { defineSetupVue3 } from '@histoire/plugin-vue'
import '/components/index.scss'
// import { JToggle } from './components'
import jackUI from './components'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  console.log('histoire.setup.ts')
  // console.log('app', app)
  // app.use(JToggle)
  app.use(jackUI)
  // const pinia = createPinia()
  // app.use(pinia) // Add Pinia store
})
