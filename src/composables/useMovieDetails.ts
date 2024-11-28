import { ref } from 'vue'
import type { MovieDetails } from '@/types/movies'
import { getMovieDetails } from '@/services/api/details'
import type { FilterOptions } from '@/types/apis'
import { useToast } from 'vue-toastification'

export function useMovieDetails() {
  const movieDetails = ref<MovieDetails | null>(null)
  const isLoading = ref(false)
  const toast = useToast()

  const fetchMovieDetails = async (options: FilterOptions) => {
    isLoading.value = true
    movieDetails.value = null
    try {
      movieDetails.value = await getMovieDetails(options)
    } catch (error) {
      toast.error('Failed to load movie details. Please try again.')
    } finally {
      isLoading.value = false
    }
  }

  return { movieDetails, isLoading, fetchMovieDetails }
}
