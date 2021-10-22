<script setup>
import { ref, defineProps, toRefs } from 'vue'
import useFetch from '../composables/useFetch.js'
import Details from './Details.vue'

const props = defineProps({
  id: String,
})

const { id } = toRefs(props)
const { data: details, error, loading, load } = useFetch()

load(`https://api.themoviedb.org/3/movie/${id.value}`, {
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
    <div v-if="loading">Loading...</div>
  </section>
</template>