import { defineStore } from 'pinia'
import { getFavoritesFromStorage, toggleMovieFavorite, isMovieFavorite } from './favoritesUtils'
import type { Movie } from '@/types/movies'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: getFavoritesFromStorage(),
  }),
  getters: {
    isFavorite:
      (state) =>
      (imdbID: string): boolean => {
        return isMovieFavorite(state.favorites, imdbID)
      },
  },
  actions: {
    toggleFavorite(movie: Movie) {
      this.favorites = toggleMovieFavorite(this.favorites, movie)
    },
  },
})
