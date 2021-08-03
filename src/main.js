import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)

//解决移动端300ms延迟
fastclick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyload,{
  loading:require('@/assets/img/common/back.svg')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
