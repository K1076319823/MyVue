import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import MyProduct from '../components/MyProduct'
import MyCart from '../components/MyCart'
export default new Router({
  routes: [
    {path: '/',redirect:'/product'},
    {path:'/product',component:MyProduct},
    {path:'/cart',component:MyCart}
  ]
})
