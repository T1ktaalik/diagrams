import { createRouter, createWebHistory } from 'vue-router'
import Parking from '@/pages/ParkingDiagram.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/parking', component: Parking }
  ],
})

export default router
