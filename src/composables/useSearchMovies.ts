import { searchMovies } from '@/services/api/movie'
import type { SearchOptions } from '@/services/api/types/apis'
import type { Movie } from '@/services/api/types/movies'
import { ref } from 'vue'

export function useSearchMovies() {
  const movies = ref<Movie[]>([])
  const errorMessage = ref('')
  const isLoading = ref(false)

  const fetchMovies = async (query: string, options: SearchOptions = {}) => {
    try {
      errorMessage.value = ''
      isLoading.value = true

      const { movies: fetchedMovies } = await searchMovies(query, options)

      if (fetchedMovies.length === 0) {
        errorMessage.value = 'No movies found.'
      } else {
        movies.value = fetchedMovies
      }
    } catch (error) {
      errorMessage.value = 'An error occurred while searching. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  return { movies, errorMessage, isLoading, fetchMovies }
}
