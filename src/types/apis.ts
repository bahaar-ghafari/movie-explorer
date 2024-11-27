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

export interface MovieDetails {
  Title: string
  Year: string
  Genre: string
  Plot: string
  Director: string
  Actors: string
  Ratings: { Source: string; Value: string }[]
  Poster: string
}
