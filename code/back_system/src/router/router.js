import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminSystem from '../components/adminSystem.vue'
import AdminLogin from '../components/adminLogin.vue'
import AdminRegister from '../components/adminRegister.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/adminLogin' },
  { path: '/adminSystem', component: AdminSystem },
  { path: '/adminLogin', component: AdminLogin },
  { path: '/adminRegister', component: AdminRegister }
]

const router = new VueRouter({
  routes
})

/* 挂载路由导航守卫 */
router.beforeEach((to, from, next) => {
  /* next是一个函数表示放行 */
  if (to.path === '/adminLogin' || to.path === '/adminRegister') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/adminLogin')
  next()
})

export default router
