<template>
  <SearchBar @search="fetchMovies" />
  <!-- Add Loading -->
  <div v-if="isLoading" class="text-blue-500 mt-4">Loading movies...</div>
  <!-- show Toast -->
  <div v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</div>
  <MovieList v-if="movies.length && !isLoading" :movies="movies" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchBar from '@/components/layout/SearchBar.vue'
import MovieList from '@/components/layout/MovieList.vue'
import { useSearchMovies } from '@/composables/useSearchMovies'

export default defineComponent({
  name: 'HomePage',
  components: { SearchBar, MovieList },
  setup() {
    const { movies, isLoading, errorMessage, fetchMovies } = useSearchMovies()

    return { movies, isLoading, errorMessage, fetchMovies }
  },
})
</script>
