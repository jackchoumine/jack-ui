/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-20 05:47:04
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-22 23:32:00
 * @Description : 导出 SplitPane 组件
 */
import type { App, Plugin } from 'vue'
import SplitPane from './JSplitPane.vue'

function install(app: App) {
  app.component(SplitPane.name, SplitPane)
  return app
}

SplitPane.install = install

export default SplitPane as typeof SplitPane & Plugin
