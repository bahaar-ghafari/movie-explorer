import { searchMovies } from '@/services/api/search'
import type { SearchOptions } from '@/types/apis'
import type { Movie } from '@/types/movies'
import { ref } from 'vue'

export function useSearchMovies() {
  const movies = ref<Movie[]>([])
  const errorMessage = ref('')
  const isLoading = ref(false)

  const fetchMovies = async (query: string, options: SearchOptions = {}) => {
    try {
      errorMessage.value = ''
      isLoading.value = true
      console.log('%csrc/composables/useSearchMovies.ts:15 options', 'color: #007acc;', options)
      const { movies: fetchedMovies } = await searchMovies(query, options)

      if (fetchedMovies.length === 0) {
        errorMessage.value = 'No movies found.'
      } else {
        movies.value = fetchedMovies
      }
    } catch (error) {
      errorMessage.value = error as string
    } finally {
      isLoading.value = false
    }
  }

  return { movies, errorMessage, isLoading, fetchMovies }
}
