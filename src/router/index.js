import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FrontStage/HomeView.vue')
  },
  {
    path: '/songBoard',
    name: 'songBoard',
    component: () => import('../views/FrontStage/SongBoard.vue')
  },
  {
    path: '/albumProduct/:category',
    name: 'albumProduct',
    component: () => import('../views/FrontStage/AlbumProduct.vue')
  },
  {
    path: '/albumProductDetail/:id',
    name: 'albumProductDetail',
    component: () => import('../views/FrontStage/AlbumProductDetail.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
