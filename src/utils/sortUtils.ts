import type { Movie } from '@/types/movies'

export const sortMovies = (movies: Movie[], sortBy: 'title' | 'year'): Movie[] => {
  const sortedMovies = [...movies]
  sortedMovies.sort((a, b) => {
    if (sortBy === 'title') {
      return a.Title.localeCompare(b.Title)
    }
    if (sortBy === 'year') {
      return a.Year.localeCompare(b.Year)
    }
    return 0
  })
  return sortedMovies
}
