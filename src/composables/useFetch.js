import { ref } from 'vue'

const useFetch = () => {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const load = async (url, config = {}) => {
    loading.value = true
    try {
      const result = await fetch(url, config)
      let response = await result.json()
      data.value = await response.results
      console.log(data.value.results)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, load }
}

export default useFetch



// let load = async () => {
//   try {
//     let res = await fetch('https://api.themoviedb.org/3/movie/popular', {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${process.env.VUE_APP_TMDB_API_READ_ACCESS_TOKEN}`
//       }
//     })
//     if (!res.ok) throw Error('fail to load movies')
//     let data = await res.json()
//     movies.value = data.results
//     console.log(movies.value)
//   } catch (err) {
//     error.value = err.message
//   }
// }

// load()