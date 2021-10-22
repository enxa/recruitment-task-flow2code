<script setup>
import { ref, defineProps, toRefs } from 'vue'

const baseImgUrl = ref(process.env.VUE_APP_TMDB_BASE_IMG_URL)

const props = defineProps({
  id: Number,
  poster: String,
  title: String,
  popularity: Number,
  votes: Number
})

const { id, poster, title, popularity, votes } = toRefs(props)

</script>

<template>
  <router-link v-bind:to="{ name: 'MovieDetails', params: { id: id } }">
    <section class="movies">
      <div>
        <img v-bind:src="baseImgUrl+'/'+poster" v-bind:alt="title">  
      </div>
      <div>
        <h3>{{title}}</h3>
      </div>
      <div>Popularity: {{popularity}}</div>
      <div>Votes: {{votes}}</div>
    </section>
  </router-link>
</template>

<style scoped>
  section {
    margin: 5vh auto;
    text-align: center;
    max-width: 300px;
  }
    img {
      width: 100%;
      max-width: 300px;
    }
</style>