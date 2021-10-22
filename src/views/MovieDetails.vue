<script setup>
import { ref, defineProps, toRefs } from 'vue'
import Details from './Details.vue'
import Spinner from '../components/Spinner.vue'
import useFetch from '../composables/useFetch.js'

const tmdbMovieUrl = ref(process.env.VUE_APP_TMDB_MOVIE_URL)

const props = defineProps({
  id: String,
})

const { id } = toRefs(props)
const { data: details, error, loading, load } = useFetch()

load(`${tmdbMovieUrl.value}/${id.value}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${process.env.VUE_APP_TMDB_API_READ_ACCESS_TOKEN}`
  }
})

</script>

<template>
  <section class="movie-details">
    <div v-if="details">
      <Details v-bind:title="details.title" v-bind:genres="details.genres" v-bind:imdbId="details.imdb_id" v-bind:overview="details.overview" v-bind:productionCountries="details.production_countries" />
    </div>
    <div v-if="error">{{error}}</div>
    <div v-if="loading">
      <Spinner />
    </div>
  </section>
</template>