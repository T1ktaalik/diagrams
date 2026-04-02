import { createRouter, createWebHashHistory } from 'vue-router'
import ParkingDiagram from '@/pages/ParkingDiagram.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/parking' },
    { path: '/parking', component: ParkingDiagram }
  ],
})

export default router
