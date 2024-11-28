import { describe, it, expect } from 'vitest'
import { sortMovies } from '@/utils/sortUtils'
import type { Movie } from '@/types/movies'

describe('sortMovies', () => {
  const movies: Movie[] = [
    { Title: 'Inception', Year: '2010', imdbID: '1', Type: 'movie', Poster: 'N/A' },
    { Title: 'The Matrix', Year: '1999', imdbID: '2', Type: 'movie', Poster: 'N/A' },
    { Title: 'Avatar', Year: '2009', imdbID: '3', Type: 'movie', Poster: 'N/A' },
  ]

  it('should sort movies by title alphabetically', () => {
    const sortedByTitle = sortMovies(movies, 'title')

    expect(sortedByTitle).toEqual([
      { Title: 'Avatar', Year: '2009', imdbID: '3', Type: 'movie', Poster: 'N/A' },
      { Title: 'Inception', Year: '2010', imdbID: '1', Type: 'movie', Poster: 'N/A' },
      { Title: 'The Matrix', Year: '1999', imdbID: '2', Type: 'movie', Poster: 'N/A' },
    ])
  })

  it('should sort movies by year ascending', () => {
    const sortedByYear = sortMovies(movies, 'year')

    expect(sortedByYear).toEqual([
      { Title: 'The Matrix', Year: '1999', imdbID: '2', Type: 'movie', Poster: 'N/A' },
      { Title: 'Avatar', Year: '2009', imdbID: '3', Type: 'movie', Poster: 'N/A' },
      { Title: 'Inception', Year: '2010', imdbID: '1', Type: 'movie', Poster: 'N/A' },
    ])
  })

  it('should not modify the original array', () => {
    const originalMovies = [...movies]
    sortMovies(movies, 'title')
    expect(movies).toEqual(originalMovies)
  })

  it('should return an empty array if input is empty', () => {
    const sortedMovies = sortMovies([], 'title')
    expect(sortedMovies).toEqual([])
  })

  it('should handle movies with the same title or year', () => {
    const similarMovies: Movie[] = [
      { Title: 'The Matrix', Year: '1999', imdbID: '1', Type: 'movie', Poster: 'N/A' },
      { Title: 'The Matrix', Year: '2003', imdbID: '2', Type: 'movie', Poster: 'N/A' },
      { Title: 'The Matrix', Year: '2001', imdbID: '3', Type: 'movie', Poster: 'N/A' },
    ]

    const sortedByYear = sortMovies(similarMovies, 'year')
    expect(sortedByYear).toEqual([
      { Title: 'The Matrix', Year: '1999', imdbID: '1', Type: 'movie', Poster: 'N/A' },
      { Title: 'The Matrix', Year: '2001', imdbID: '3', Type: 'movie', Poster: 'N/A' },
      { Title: 'The Matrix', Year: '2003', imdbID: '2', Type: 'movie', Poster: 'N/A' },
    ])
  })
})
