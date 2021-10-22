import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
