<template>
  <div>
    <div v-if="movies.length === 0" class="text-gray-500 mt-4">No movies found.</div>
    <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      <li
        v-for="movie in movies"
        :key="movie.imdbID"
        class="border rounded-lg shadow-md overflow-hidden relative bg-white"
      >
        <img
          :src="movie.Poster !== 'N/A' ? movie.Poster : 'placeholderImage'"
          :alt="movie.Title"
          class="w-full h-56 object-cover"
        />
        <div class="p-2">
          <h3 class="font-semibold text-lg text-gray-600 break-words max-w-full">
            {{ movie.Title }}
          </h3>
          <p class="text-sm text-gray-400">{{ movie.Year }}</p>
          <div class="flex justify-between">
            <router-link
              :to="`/movie${movie.imdbID}`"
              class="block hover:bg-blue-100 transition text-blue-600"
            >
              See Details
            </router-link>
            <FavoriteButton :movie="movie" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Movie } from '@/types/movies'
import { useFavoritesStore } from '@/stores/favoritesStore'
import FavoriteButton from './FavoriteButton.vue'

export default defineComponent({
  name: 'MovieList',
  components: { FavoriteButton },
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
