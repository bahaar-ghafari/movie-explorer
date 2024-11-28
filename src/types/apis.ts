import type { Movie } from './movies'

interface SuccessfulBackendSearchResponse {
  Search: Movie[]
  totalResults: string // Numeric string
  Response: 'True'
}

interface FailedBackendSearchResponse {
  Error: 'Too many results.'
  Response: 'False'
}

export type MovieBackendSearchResponse =
  | SuccessfulBackendSearchResponse
  | FailedBackendSearchResponse

export interface MoviesSearchResponse {
  movies: Movie[]
  currentPage: number
  totalPages: number
}

export interface SearchOptions {
  sortBy?: 'title' | 'year'
  filterYear?: string
  type?: 'movie' | 'series' | 'episode'
  page?: number
}
