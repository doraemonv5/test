import Vue from 'vue'
import Router from 'vue-router'
// import Vhome from '@/App'

Vue.use(Router)
import course from '@/components/courselist'
import Detail from '@/components/detail'
import login from '@/components/login'
import openclass from '@/components/openclass'
import deeptech from '@/components/deeptech'
import deeparticle from '@/components/deeparticle'
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: null, 
    },
    {
      path: '/detail',
      name: 'freecourse',
      component: course, 
      meta:{
        needlogin:true,
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail, 
    },
    {
      path: '/openclass',
      name: 'openclass',
      component: openclass, 
    },
    {
      path: '/deeptech',
      name: 'deeptech',
      component: deeptech, 
    },
    {
      path:'/deeptech/:id',
      name:'deeparticle',
      component:deeparticle,
    },
    {
        path:'/login',
        name:'login',
        component:login
    }
  ],
  mode:'history'
})
