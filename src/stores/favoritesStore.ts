import { defineStore } from 'pinia'
import { getFavoritesFromStorage, toggleMovieFavorite, isMovieFavorite } from './favoritesUtils'
import type { Movie } from '@/types/movies'
import { useToast } from 'vue-toastification'

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
      const toast = useToast()

      const wasFavorite = this.isFavorite(movie.imdbID)
      this.favorites = toggleMovieFavorite(this.favorites, movie)

      if (wasFavorite) {
        toast.success(`${movie.Title} removed from favorites!`)
      } else {
        toast.success(`${movie.Title} added to favorites!`)
      }
    },
  },
})
