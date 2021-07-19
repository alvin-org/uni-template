import Vue from 'vue'
import App from './App'
import store from './store/index'
import config from './config/index'
import until from '../src/untils/common'

import uView from 'uview-ui/index.js'
Vue.use(uView)
// 项目配置
Vue.prototype.$config = config
// 常用方法函数
Vue.prototype.$until = until
// 事件总程
Vue.prototype.$EventBus = new Vue()

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
