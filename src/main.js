import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#App')
