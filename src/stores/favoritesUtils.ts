import type { Movie } from '@/types/movies'

const LOCAL_STORAGE_KEY = 'favorites'

export const getFavoritesFromStorage = (): Movie[] => {
  const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY)
  return storedFavorites ? JSON.parse(storedFavorites) : []
}

export const saveFavoritesToStorage = (favorites: Movie[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
}

export const isMovieFavorite = (favorites: Movie[], imdbID: string): boolean => {
  return favorites.some((movie) => movie.imdbID === imdbID)
}

const addMovieToFavorites = (favorites: Movie[], movie: Movie): Movie[] => {
  if (isMovieFavorite(favorites, movie.imdbID)) {
    return favorites
  }
  const updatedFavorites = [...favorites, movie]
  saveFavoritesToStorage(updatedFavorites)
  return updatedFavorites
}

const removeMovieFromFavorites = (favorites: Movie[], imdbID: string): Movie[] => {
  const updatedFavorites = favorites.filter((movie) => movie.imdbID !== imdbID)
  saveFavoritesToStorage(updatedFavorites)
  return updatedFavorites
}

export const toggleMovieFavorite = (favorites: Movie[], movie: Movie): Movie[] => {
  const updatedFavorites = isMovieFavorite(favorites, movie.imdbID)
    ? removeMovieFromFavorites(favorites, movie.imdbID)
    : addMovieToFavorites(favorites, movie)
  saveFavoritesToStorage(updatedFavorites)
  return updatedFavorites
}
