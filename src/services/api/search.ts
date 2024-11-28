import axiosInstance from '../xiosInstance'
import type { MovieBackendSearchResponse, MoviesSearchResponse, SearchOptions } from '@/types/apis'

export const searchMovies = async (
  query: string,
  options?: SearchOptions,
): Promise<MoviesSearchResponse> => {
  const response = await axiosInstance.get<MovieBackendSearchResponse>('', {
    params: {
      s: query,
      page: options?.page,
      type: options?.type,
      y: options?.filterYear,
    },
  })

  const data = response.data

  if (data.Response === 'True') {
    const movies = data.Search || []
    const totalResults = parseInt(data.totalResults, 10) || 0
    const totalPages = Math.ceil(totalResults / 10)

    return {
      movies,
      currentPage: options?.page || 1,
      totalPages,
    }
  }
  throw new Error(data.Error)
}
