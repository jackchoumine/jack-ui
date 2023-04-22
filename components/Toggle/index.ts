/*
 * @Description : 导出 JToggle
 * @Date        : 2023-02-18 21:35:28 +0800
 * @Author      : JackChou
 * @LastEditTime: 2023-04-22 22:52:09
 * @LastEditors : ZhouQiJun
 */
import JToggle from './JToggle.vue'
import type { App, Plugin } from 'vue'

/**
 * 添加 install 方法，用于按需引入
 * import { JToggle } from "jack-ui"
 * app.use(JToggle)
 */
JToggle.install = (app: App) => {
  console.log(JToggle.name)

  app.component(JToggle.name, JToggle)
  return app
}

export default JToggle as typeof JToggle & Plugin
