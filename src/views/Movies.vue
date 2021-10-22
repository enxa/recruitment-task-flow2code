 <script setup>
import { ref } from 'vue'
import Movie from './Movie.vue'
import useFetch from '../composables/useFetch.js'

const { data, error, loading, load } = useFetch()

load('https://api.themoviedb.org/3/movie/popular', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${process.env.VUE_APP_TMDB_API_READ_ACCESS_TOKEN}`
  }
})

</script>

<template>
  <section class="movies">
    <div v-if="data">
      <div v-for="movie in data">
        <!-- <pre style="border: 1px solid">
          {{movie}}
        </pre> -->
        <Movie v-bind:poster="movie.poster_path" v-bind:title="movie.title" v-bind:popularity="movie.popularity" v-bind:votes="movie.vote_count"/>
      </div>
    </div>
    <div v-if="error">{{error}}</div>
    <div v-if="loading">Loading...</div>
  </section>
</template>