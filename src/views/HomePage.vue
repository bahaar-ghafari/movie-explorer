<template>
  <div class="max-w-screen-lg mx-auto p-4">
    <AppHeader
      @toggleProSearch="toggleProSearch"
      @sort="toggleSelectedSort"
      :selectedSort="selectedSort"
      class="mb-4"
    />
    <SearchBar @search="fetchMovies" class="mb-4" />
    <MovieList
      v-if="movies.length && !isLoading"
      :movies="movies"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    />
    <div v-else-if="isLoading" class="text-blue-500 text-center mt-8 font-semibold">
      Loading movies...
    </div>
    <div v-else-if="errorMessage" class="text-red-500 text-center mt-8 font-semibold">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import SearchBar from '@/components/layout/SearchBar.vue'
import MovieList from '@/components/layout/MovieList.vue'
import { useSearchMovies } from '@/composables/useSearchMovies'
import { sortMovies } from '@/utils/sortUtils'

export default defineComponent({
  name: 'HomePage',
  components: { AppHeader, SearchBar, MovieList },
  setup() {
    const { movies, isLoading, errorMessage, fetchMovies } = useSearchMovies()
    const showProSearch = ref(false)
    const selectedSort = ref<'title' | 'year'>('title')

    const toggleSelectedSort = () => {
      selectedSort.value = selectedSort.value === 'title' ? 'year' : 'title'
    }

    const sortedMovies = computed(() => sortMovies(movies.value, selectedSort.value))

    const toggleProSearch = () => {
      showProSearch.value = !showProSearch.value
    }

    return {
      movies: sortedMovies,
      isLoading,
      errorMessage,
      selectedSort,
      fetchMovies,
      toggleSelectedSort,
      toggleProSearch,
    }
  },
})
</script>
