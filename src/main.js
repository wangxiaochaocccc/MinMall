import Vue from 'vue'
import App from './App.vue'
import router from './router'
import env from './env'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = true

// axios基础配置
axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000

// 接口拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  if(res.status == 0) {
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else {
    alert(res.msg)
  }
})

Vue.use(VueAxios,axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
