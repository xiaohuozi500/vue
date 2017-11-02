import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 实例化vue-lazyload
Vue.use(VueLazyLoad, {
  loading: require('@/assets/images/1.jpg'),
  error: require('@/assets/images/1.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
