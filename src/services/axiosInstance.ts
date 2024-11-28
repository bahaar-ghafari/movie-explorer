import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!config.params) {
      config.params = {}
    }
    config.params.apikey = API_KEY
    return config
  },
  (error) => {
    console.error('Request error:', error)
    let retryCount = 0
    if (error.code === 'ECONNABORTED' && retryCount < 3) {
      retryCount++
      return axiosInstance.request(error.config)
    }
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
