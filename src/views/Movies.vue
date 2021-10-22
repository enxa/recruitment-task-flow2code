<script setup>
import { ref } from 'vue' 
import Movie from './Movie.vue'
import Spinner from '../components/Spinner.vue'
import useFetch from '../composables/useFetch.js'

const tmdbMovieUrl = ref(process.env.VUE_APP_TMDB_MOVIE_URL)

const { data: movies, error, loading, load } = useFetch()

load(`${tmdbMovieUrl.value}/popular`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${process.env.VUE_APP_TMDB_API_READ_ACCESS_TOKEN}`
  }
})

</script>

<template>
  <section class="movies">
    <div v-if="movies">
      <div v-for="movie in movies.results" v-bind:key="movie.id">
        <Movie v-bind:id="movie.id" v-bind:poster="movie.poster_path" v-bind:title="movie.title" v-bind:popularity="movie.popularity" v-bind:votes="movie.vote_count"/>
      </div>
    </div>
    <div v-if="error">{{error}}</div>
    <div v-if="loading">
      <Spinner />
    </div>
  </section>
</template>