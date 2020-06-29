import Vue from 'vue'
import Router from 'vue-router'
import Cart from './pages/cart.vue'
import Address from './pages/address.vue'
import Test from './pages/test.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      name:'test',
      component:Test,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/address',
      name: 'address',
      component: Address,
    },
  ],
})
