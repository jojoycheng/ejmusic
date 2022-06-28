import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/songBoard',
    name: 'songBoard',
    component: () => import('../views/SongBoard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
