import axiosInstance from '../axiosInstance'
import type { MovieSearchResponse, MoviesSearch, SearchOptions } from '@/types/api'

export const searchMovies = async (
  query: string,
  options?: SearchOptions,
): Promise<MoviesSearch> => {
  const response = await axiosInstance.get<MovieSearchResponse>('', {
    params: {
      s: query,
      page: options?.page,
      type: options?.type,
      y: options?.year,
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
