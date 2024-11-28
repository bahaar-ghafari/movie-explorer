import type { FilterOptions } from '@/types/apis'
import axiosInstance from '../axiosInstance'

export const getMovieDetails = async (options?: FilterOptions) => {
  const response = await axiosInstance.get('', {
    params: {
      i: options?.imdbID,
      t: options?.title,
      y: options?.year,
      type: options?.type,
    },
  })
  return response.data
}
