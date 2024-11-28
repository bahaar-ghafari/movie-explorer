import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { AppRoutes } from './routes'

const routes = [
  { path: AppRoutes.Home, name: 'Home', component: HomePage },
  {
    path: AppRoutes.MovieDetails,
    name: 'MovieDetails',
    component: () => import('@/views/MovieDetails.vue'),
  },
  {
    path: AppRoutes.FavoritesPage,
    name: 'FavoritesPage',
    component: () => import('@/views/FavoritesPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
