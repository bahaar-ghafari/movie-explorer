import axiosInstance from '../xiosInstance'
import type { MoviesResponse, SearchOptions } from '../../types/apis'
import type { Movie } from '../../types/movies'

export const searchMovies = async (
  query: string,
  options?: SearchOptions,
): Promise<MoviesResponse> => {
  try {
    const response = await axiosInstance.get('', {
      params: {
        s: query,
        page: options?.page,
        type: options?.type,
        y: options?.filterYear,
      },
    })

    const movies: Movie[] = response.data.Search || []
    const totalResults = Number(response.data.totalResults) || 0
    const totalPages = Math.ceil(totalResults / 10)

    if (options?.sortBy) {
      movies.sort((a, b) => {
        if (options.sortBy === 'title') return a.Title.localeCompare(b.Title)
        if (options.sortBy === 'year') return a.Year.localeCompare(b.Year)
        return 0
      })
    }

    return {
      movies,
      totalResults,
      currentPage: options?.page || 1,
      totalPages,
    }
  } catch (error) {
    // TODO:Toast notification
    throw new Error('Failed to fetch movies.')
  }
}
