import { searchMovies } from '@/services/api/search'
import type { SearchOptions } from '@/types/api'
import type { Movie } from '@/types/movies'
import type { AxiosError } from 'axios'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export function useSearchMovies() {
  const movies = ref<Movie[]>([])
  const isLoading = ref(false)
  const toast = useToast()

  const fetchMovies = async (query: string, options: SearchOptions = {}) => {
    try {
      isLoading.value = true
      const { movies: fetchedMovies } = await searchMovies(query, options)

      if (fetchedMovies.length === 0) {
        toast.error('No movies found.')
      } else {
        movies.value = fetchedMovies
      }
    } catch (error: unknown) {
      toast.error((error as AxiosError).message)
    } finally {
      isLoading.value = false
    }
  }

  return { movies, isLoading, fetchMovies }
}
