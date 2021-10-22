<script setup>
import { ref, defineProps, toRefs } from 'vue'

const baseImgUrl = ref('https://image.tmdb.org/t/p/w300')

const props = defineProps({
  poster: String,
  title: String,
  popularity: Number,
  votes: Number
})

const { poster, title, popularity, votes } = toRefs(props)

</script>

<template>
  <section class="movies">
    <div>
      <img v-bind:src="baseImgUrl+poster" v-bind:alt="title">  
    </div>
    <div>
      <h3>{{title}}</h3>
    </div>
    <div>Popularność: {{popularity}}</div>
    <div>Liczba głosów: {{votes}}</div>
  </section>
</template>

<style>
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