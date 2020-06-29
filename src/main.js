import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from './router'
import './assets/css/base.css'
import './assets/css/index.css'
Vue.config.productionTip = false //提示开关
Vue.use(VueAxios, axios)
//axios.defaults.baseURL = 'http://172.16.41.235:10124'
new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount('#app')
