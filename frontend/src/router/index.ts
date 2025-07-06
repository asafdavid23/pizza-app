import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Menu from '@/pages/Menu.vue'
import OrderStatus from '@/pages/OrderStatus.vue'
import Cart from '@/pages/Cart.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/order-status', component: OrderStatus },
  { path: '/cart', component: Cart },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
