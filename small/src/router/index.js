import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Class from '@/components/Class'
import Cart from '@/components/Cart'
import My from '@/components/My'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ]
})
