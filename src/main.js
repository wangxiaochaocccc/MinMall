import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import env from './env'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import './assets/style/iconfont.css'

Vue.config.productionTip = true

// axios基础配置
// axios.defaults.baseURL = env.baseURL
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 接口拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  let path = location.hash
  if(res.status == 0) {
    return res.data
  }else if(res.status == 10){
    if(path != '#/index') {
      // window.location.href = '/#/login'
    }
  }else {
    return Promise.reject(res.msg)
  }
})

Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
