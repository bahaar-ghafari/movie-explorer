import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
  isMovieFavorite,
  toggleMovieFavorite,
} from '../favoritesUtils'
import type { Movie } from '@/types/movies'

const sampleMovie: Movie = {
  Title: 'Inception',
  Year: '2010',
  imdbID: 'tt1375666',
  Type: 'movie',
  Poster: 'N/A',
}

const anotherMovie: Movie = {
  Title: 'The Matrix',
  Year: '1999',
  imdbID: 'tt0133093',
  Type: 'movie',
  Poster: 'N/A',
}

describe('favoritesUtils', () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'favorites') {
        return JSON.stringify([sampleMovie])
      }
      return null
    })

    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should get favorites from localStorage', () => {
    const favorites = getFavoritesFromStorage()
    expect(favorites).toEqual([sampleMovie])
  })

  it('should save favorites to localStorage', () => {
    const mockSetItem = vi.spyOn(Storage.prototype, 'setItem')
    saveFavoritesToStorage([anotherMovie])
    expect(mockSetItem).toHaveBeenCalledWith('favorites', JSON.stringify([anotherMovie]))
  })

  it('should check if a movie is a favorite', () => {
    const favorites = getFavoritesFromStorage()
    const result = isMovieFavorite(favorites, sampleMovie.imdbID)
    expect(result).toBe(true)

    const notFavorite = isMovieFavorite(favorites, anotherMovie.imdbID)
    expect(notFavorite).toBe(false)
  })

  it('should add a movie to favorites if not already in the list', () => {
    const favorites = getFavoritesFromStorage()
    const updatedFavorites = toggleMovieFavorite(favorites, anotherMovie)
    expect(updatedFavorites).toContainEqual(anotherMovie)
    expect(updatedFavorites.length).toBe(2)
  })

  it('should remove a movie from favorites if it is already in the list', () => {
    const favorites = getFavoritesFromStorage()
    const updatedFavorites = toggleMovieFavorite(favorites, sampleMovie)
    expect(updatedFavorites).not.toContainEqual(sampleMovie)
    expect(updatedFavorites.length).toBe(0)
  })

  it('should not modify the favorites list when adding an existing favorite', () => {
    const favorites = getFavoritesFromStorage()
    const updatedFavorites = toggleMovieFavorite(favorites, sampleMovie)
    expect(updatedFavorites).toEqual([])
  })
})
