<template>
  <div v-if="movies.length === 0" class="text-gray-500 mt-4">No movies found.</div>
  <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    <li
      v-for="movie in movies"
      :key="movie.imdbID"
      class="border rounded-lg shadow-md overflow-hidden relative bg-white"
    >
      <MovieItem :movie="movie" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Movie } from '@/types/movies'
import { useFavoritesStore } from '@/stores/favoritesStore'
import MovieItem from './MovieItem.vue'

export default defineComponent({
  name: 'MovieList',
  components: { MovieItem },
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
  },
  setup() {
    const favoritesStore = useFavoritesStore()

    return {
      toggleFavorite: favoritesStore.toggleFavorite,
      isFavorite: favoritesStore.isFavorite,
    }
  },
})
</script>
