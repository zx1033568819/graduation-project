import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Index from '../components/Index.vue'
import Header from '../components/Header.vue'
import Unload from '../components/Unload.vue'
import Personal from '../components/Personal.vue'
import Product from '../components/Product.vue'
import Buy from '../components/Buy.vue'
/* 待转移 */
import Administrator from '../components/administrator.vue'
import AdmLogin from '../components/admLogin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/index', component: Index },
  { path: '/header', component: Header },
  { path: '/unload', component: Unload },
  { path: '/personal', component: Personal },
  { path: '/product', component: Product },
  { path: '/buy', component: Buy },
  { path: '/administrator', component: Administrator },
  { path: '/admLogin', component: AdmLogin }
]

const router = new VueRouter({
  routes
})

export default router
