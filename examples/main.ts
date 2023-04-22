/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-22 20:58:37
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2023-04-23 03:59:56
 * @Description : 测试组件的入口
 */
import { createApp } from 'vue'
import App from './App.vue'

// import './assets/main.css'
const app = createApp(App)

import '../components/Toggle/j-toggle.scss'
import '../components/SplitPane/j-split-pane.scss'
// 按需引入
// import { JToggle } from '../components'
// app.use(JToggle)
// import { JSplitPane } from '../components'
// app.use(JSplitPane)
// 全局引入
import jackUI from '../components'
// import jackUi from '../es'
app.use(jackUI)
// import { JToggle } from '../es'
// app.use(JToggle)
app.mount('#app')
