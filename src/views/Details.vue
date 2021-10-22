<script setup>
import { ref, defineProps, toRefs } from 'vue'

const imdbMovieUrl = ref(process.env.VUE_APP_IMDB_MOVIE_URL)

const props = defineProps({
  title: String,
  genres: Array,
  imdbId: String,
  overview: String,
  productionCountries: Array
})

const { title, genres, imdbId, overview, productionCountries } = toRefs(props)

</script>

<template>
  <section class="movies">
    <div>
      <a v-bind:href="imdbMovieUrl+imdbId">
        <h3>{{title}}</h3>
        <img src="/imdb-logo.svg" alt="">
      </a>
    </div>
    <h4>{{genres === 1 ? 'Genre:' : 'Genres:'}}</h4>
    <div v-for="genre in genres">
      <ul>
        <li>{{genre.name}}</li>
      </ul>
    </div>
    <div>
      <p>{{overview}}</p>
    </div>
    <h4>{{productionCountries.length === 1 ? 'Production country:' : 'Production countries:'}}</h4>
    <div v-for="productionCountry in productionCountries">
      <ul>
        <li>{{productionCountry.name}}</li>
      </ul>
    </div>
  </section>
</template>