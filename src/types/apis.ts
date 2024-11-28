import type { Movie } from './movies'

interface SuccessfulSearchResponse {
  Search: Movie[]
  totalResults: string // Numeric string
  Response: 'True'
}

interface FailedSearchResponse {
  Error: 'Too many results.'
  Response: 'False'
}

export type MovieSearchResponse = SuccessfulSearchResponse | FailedSearchResponse

export interface MoviesSearch {
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
