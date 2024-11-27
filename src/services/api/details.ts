import axiosInstance from '../xiosInstance'

export const getMovieDetails = async (imdbID: string) => {
  const response = await axiosInstance.get('', {
    params: {
      i: imdbID,
    },
  })
  return response.data
}
