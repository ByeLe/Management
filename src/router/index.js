import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Hall'
  },
  {
    path: '/Hall',
    redirect: '/Hall/ArticleCenter',
    component: () => import('@/views/hall/hall.vue'),
    children: [
      {
        path: 'Type',
        component: () => import('@/views/typeHall/typeHall.vue')
      },
      {
        path: 'AddType',
        component: () => import('@/views/addType/addType.vue')
      },
      {
        path: 'UploadFile',
        component: () => import('@/views/uploadFile/uploadFile.vue')
      },
      {
        path: 'ArticleCenter',
        component: () => import('@/views/articleCenter/articleCenter.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
