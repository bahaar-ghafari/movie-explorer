import type { Movie } from '@/types/movies'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Movie[],
  }),
  getters: {
    isFavorite: (state) => (imdbID: string) => {
      return state.favorites.some((movie) => movie.imdbID === imdbID)
    },
  },
  actions: {
    addFavorite(movie: Movie) {
      if (!this.isFavorite(movie.imdbID)) {
        this.favorites.push(movie)
      }
    },
    removeFavorite(imdbID: string) {
      this.favorites = this.favorites.filter((movie) => movie.imdbID !== imdbID)
    },
    toggleFavorite(movie: Movie) {
      if (this.isFavorite(movie.imdbID)) {
        this.removeFavorite(movie.imdbID)
      } else {
        this.addFavorite(movie)
      }
    },
  },
})
