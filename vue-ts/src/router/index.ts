import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkWeekHours from '../demos/eventcalendar/scheduler/work-week-hours/work-week-hours.ts.vue'
import CompareResources from '../demos/eventcalendar/timeline/compare-resources/compare-resources.ts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/timeline/compare-resources',
      name: 'compare-resources',
      component: CompareResources
    },
    {
      path: '/schedule/work-week-hours',
      name: 'work-week-hours',
      component: WorkWeekHours
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
