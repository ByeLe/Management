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
    redirect: '/Hall/AddType',
    component: () => import('@/views/hall/hall.vue'),
    children: [
      {
        path: 'type',
        component: () => import('@/views/typeHall/typeHall.vue')
      },
      {
        path: 'AddType',
        component: () => import('@/views/addType/addType.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
