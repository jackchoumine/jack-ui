/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 21:57:38
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 00:27:44
 * @Description : 导出所有组件
 */
import type { App } from 'vue'
import JToggle from './Toggle'
import JSplitPane from './SplitPane'

const components = [JToggle, JSplitPane]

function install(app: App) {
  components.forEach((component) => {
    // 有 install 方法的组件，调用 install 方法 注册组件
    const installed = component?.install && app.use(component)
    // 没有 install 方法的组件，直接注册组件
    if (!installed) app.component(component.name, component)
  })
  return app
}

/**
 * 按需引入
 * import { JToggle } from "jack-ui"
 * app.use(JToggle)
 */
export { JToggle, JSplitPane }

/**
 * 全局引入
 * import jackUi from "jack-ui"
 * app.use(jackUi)
 */
export default {
  install
}
