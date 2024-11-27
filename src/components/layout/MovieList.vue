<template>
  <div>
    <div v-if="movies.length === 0" class="text-gray-500 mt-4">No movies found.</div>
    <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      <li
        v-for="movie in movies"
        :key="movie.imdbID"
        @click="goToDetails(movie.imdbID)"
        class="border rounded-lg shadow-md overflow-hidden"
      >
        <img
          :src="movie.Poster !== 'N/A' ? movie.Poster : 'placeholderImage'"
          :alt="movie.Title"
          class="w-full h-56 object-cover"
        />
        <div class="p-2 bg-white">
          <h3 class="font-semibold text-lg truncate text-gray-600">{{ movie.Title }}</h3>
          <p class="text-sm text-gray-600">{{ movie.Year }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Movie } from '@/types/movies'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MovieList',
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
  },
  setup() {
    const router = useRouter()

    const goToDetails = (imdbID: string) => {
      router.push(`/movie${imdbID}`)
    }

    return { goToDetails }
  },
})
</script>

<style scoped></style>
