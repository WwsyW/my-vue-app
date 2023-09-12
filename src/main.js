import { createApp } from 'vue'

import App from './App.vue'
//ElementPlus UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//路由
import router from './router/index.js'
//axios
import axios from 'axios'
//ECharts
import ECharts from 'vue-echarts'
import "echarts"
//store 状态管理
import store from './store/index.js'
//
const app = createApp(App)
app.use(store).component('e-charts',ECharts).use(router).use(ElementPlus).mount('#app')

app.config.globalProperties.$http= axios