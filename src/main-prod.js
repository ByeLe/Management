import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://47.103.147.99:7001'
axios.interceptors.response.use(
  response => {
    if (response.data.showAlert !== 'notAlert') {
      alert(response.data.message)
    }
    console.log(response)
    return response
  }
)
Vue.prototype.axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
