import { ref } from 'vue'
import type { MovieDetails } from '@/types/apis'
import { getMovieDetails } from '@/services/api/details'

export function useMovieDetails() {
  const movieDetails = ref<MovieDetails | null>(null)
  const isLoading = ref(false)
  const errorMessage = ref<string | null>(null)

  const fetchMovieDetails = async (imdbID: string) => {
    isLoading.value = true
    errorMessage.value = null
    movieDetails.value = null

    try {
      movieDetails.value = await getMovieDetails(imdbID)
    } catch (error) {
      errorMessage.value = 'Failed to load movie details. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  return { movieDetails, isLoading, errorMessage, fetchMovieDetails }
}
