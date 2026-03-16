import { createRouter, createWebHistory } from 'vue-router'
import ParkingDiagram from '@/pages/ParkingDiagram.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/parking', component: ParkingDiagram }
  ],
})

export default router
