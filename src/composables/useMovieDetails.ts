import { ref } from 'vue'
import type { MovieDetails } from '@/types/movies'
import { getMovieDetails } from '@/services/api/details'
import type { FilterOptions } from '@/types/apis'

export function useMovieDetails() {
  const movieDetails = ref<MovieDetails | null>(null)
  const isLoading = ref(false)
  const errorMessage = ref<string | null>(null)

  const fetchMovieDetails = async (options: FilterOptions) => {
    isLoading.value = true
    errorMessage.value = null
    movieDetails.value = null
    try {
      movieDetails.value = await getMovieDetails(options)
    } catch (error) {
      errorMessage.value = 'Failed to load movie details. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  return { movieDetails, isLoading, errorMessage, fetchMovieDetails }
}
