import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

import { BootstrapVue } from 'bootstrap-vue'
import './registerServiceWorker'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
