import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.use(VueCookies);
Vue.$cookies.config('7d');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
