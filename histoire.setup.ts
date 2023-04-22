/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-23 01:10:57
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 02:12:15
 * @Description :
 */
import { defineSetupVue3 } from '@histoire/plugin-vue'
// import '/components/index.scss'
// import './components/Toggle/j-toggle.scss'
import './components/Toggle/j-toggle.scss'
import { JToggle } from './components'
export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  console.log('histoire.setup.ts ----> setupVue3')
  //   console.log('app', app)
  app.use(JToggle)
  //   const pinia = createPinia()
  //   app.use(pinia) // Add Pinia store
})
