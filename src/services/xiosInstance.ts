import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

const API_BASE_URL = 'https://www.omdbapi.com/'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    if (error.response) {
      // Server errors (5xx)
      console.error('Response error:', error.response.data)
      return Promise.reject(error.response.data)
    } else if (error.request) {
      // Network errors
      console.error('No response received:', error.request)
      return Promise.reject({
        message: 'No response received. Please check your network or try again later.',
      })
    } else {
      // Unexpected issues
      console.error('Error setting up request:', error.message)
      return Promise.reject({ message: error.message })
    }
  },
)

export default axiosInstance
