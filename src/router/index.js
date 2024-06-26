import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/single',
      name: 'single',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/penerbit',
      name: 'penerbit',
      component: () => import('../views/PenerbitView.vue')
    },
    {
      path: '/buku',
      name: 'buku',
      component: () => import('../views/BukuView.vue')
    },
    {
      path: '/berita',
      name: 'berita',
      component: () => import('../views/BeritaView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
