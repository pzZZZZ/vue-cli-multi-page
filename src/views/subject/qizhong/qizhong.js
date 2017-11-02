
import { AlertPlugin, LoadingPlugin } from 'vux'
import Vue from 'vue'
import App from './main'
//------ VUX UI 注册，如果不需要  VUX UI 请删除以下注册 -------
Vue.use(AlertPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(LoadingPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
//--- VUX UI 注册 END --

new Vue({
  render: h => h(App)
}).$mount('#app')
