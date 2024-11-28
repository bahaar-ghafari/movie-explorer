<template>
  <div class="max-w-screen-lg mx-auto p-4">
    <AppHeader
      @toggleProSearch="toggleProSearch"
      @sort="toggleSelectedSort"
      :selectedSort="selectedSort"
      class="mb-4"
    />
    <SearchBar @search="handleSearch" class="mb-4" />
    <ProSearch v-if="showProSearch" @search="searchPro" class="mb-4" @close="toggleProSearch" />
    <LoadingSpinner v-if="isLoading" />
    <MovieList :movies="movies" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import SearchBar from '@/components/layout/SearchBar.vue'
import MovieList from '@/components/layout/MovieList.vue'
import ProSearch from '@/components/layout/ProSearch.vue'
import { useSearchMovies } from '@/composables/useSearchMovies'
import { sortMovies } from '@/utils/sortUtils'
import type { FilterOptions } from '@/types/apis'
import { useMovieDetails } from '@/composables/useMovieDetails'
import LoadingSpinner from '../components/layout/LoadingSpinner.vue'

export default defineComponent({
  name: 'HomePage',
  components: { AppHeader, SearchBar, MovieList, ProSearch, LoadingSpinner },
  setup() {
    const { movies, isLoading, fetchMovies } = useSearchMovies()
    const { movieDetails, fetchMovieDetails } = useMovieDetails()

    const showProSearch = ref(false)
    const selectedSort = ref<'title' | 'year'>('title')

    const toggleSelectedSort = () => {
      selectedSort.value = selectedSort.value === 'title' ? 'year' : 'title'
    }

    const toggleProSearch = () => {
      showProSearch.value = !showProSearch.value
    }
    const handleSearch = (query: string) => {
      movies.value = []
      fetchMovies(query)
    }
    const searchPro = (filters: FilterOptions) => {
      movies.value = []
      fetchMovieDetails(filters)
    }

    watch(
      () => movieDetails.value,
      (newDetails) => {
        if (newDetails) {
          movies.value = [newDetails]
        }
      },
    )

    const sortedMovies = computed(() => sortMovies(movies.value, selectedSort.value))

    return {
      movies: sortedMovies,
      isLoading,
      selectedSort,
      handleSearch,
      toggleSelectedSort,
      toggleProSearch,
      showProSearch,
      searchPro,
    }
  },
})
</script>
