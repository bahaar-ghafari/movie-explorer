import type { Movie } from './movies'

export interface MoviesResponse {
  movies: Movie[]
  totalResults: number
  currentPage: number
  totalPages: number
}

export interface SearchOptions {
  sortBy?: 'title' | 'year'
  filterYear?: string
  type?: 'movie' | 'series' | 'episode'
  page?: number
}
