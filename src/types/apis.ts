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
export type MediaType = 'movie' | 'series' | 'episode'

export interface SearchOptions {
  year?: string
  type?: MediaType
  page?: number
}
export type FilterOptions =
  | {
      imdbID: string
      title?: never
      year?: string
      type?: MediaType
    }
  | {
      imdbID?: never
      title: string
      year?: string
      type?: MediaType
    }
