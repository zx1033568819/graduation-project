import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Index from '../components/Index.vue'
import Header from '../components/Header.vue'
import Upload from '../components/Upload.vue'
import Personal from '../components/Personal.vue'
import Product from '../components/Product.vue'
import Buy from '../components/Buy.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/index', component: Index },
  { path: '/header', component: Header },
  { path: '/upload', component: Upload },
  { path: '/personal', component: Personal },
  { path: '/product', component: Product },
  { path: '/buy', component: Buy }
]

const router = new VueRouter({
  routes
})

/* 挂载路由导航守卫 */
router.beforeEach((to, from, next) => {
  /* next是一个函数表示放行 */
  if (to.path === '/login' || to.path === '/register') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
