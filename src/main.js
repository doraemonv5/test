// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import vuex from 'vuex'
import axios from 'axios'
import store from './store/store.js'
Vue.config.productionTip = false
Vue.use(vuex)
// Vue.use(axios)
Vue.prototype.$axios = axios
/* eslint-disable no-new */

// router.beforeEach(function(to,from,next){
//     if(to.meta.needlogin){
//         if(store.state.loginstate){
//             next()
//         }
//         else{
//           console.log(to.fullPath)
//             next({name:'login',query:{bkurl:to.fullPath}})
//             //必须qeury为键，表示登陆前的网址参数
//         }

//     }
//     else{
//         next()
//     }
// })

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
