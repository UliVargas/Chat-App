import axios, { AxiosError, AxiosInstance } from 'axios'

import { CookiesManager } from '../utilities/cookies-manager'

export const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleRequest = (config: any) => {
    const token = CookiesManager.getInCookies('token')
    config.headers.Authorization = `Bearer ${token}`
  return config
}

const handleError = (error: AxiosError) => {
  // Aquí puedes manejar errores específicos o personalizados
  return Promise.reject(error)
}

// Configura los interceptores para transformar las peticiones y respuestas
axiosInstance.interceptors.request.use(handleRequest)
axiosInstance.interceptors.response.use(response => response, handleError)