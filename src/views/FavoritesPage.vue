<template>
  <div class="favorites-page mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Your Favorite Movies</h1>
    <div v-if="favoriteMovies.length === 0" class="text-gray-500">You have no favorite movies.</div>
    <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <MovieItem v-for="movie in favoriteMovies" :key="movie.imdbID" :movie="movie" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useFavoritesStore } from '@/stores/favoritesStore'
import MovieItem from '@/components/layout/MovieItem.vue'

export default defineComponent({
  name: 'FavoritePage',
  components: { MovieItem },
  setup() {
    const favoritesStore = useFavoritesStore()
    const favoriteMovies = computed(() => favoritesStore.favorites)

    return {
      favoriteMovies,
    }
  },
})
</script>
