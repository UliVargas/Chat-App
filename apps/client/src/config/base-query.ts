import { AxiosError, Method } from 'axios'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { axiosInstance } from './axios-instance'

export const axiosBaseQuery = (baseUrl = ''): BaseQueryFn<{
  url: string
  method: Method
  data?: unknown
  params?: Record<string, string | number>
},
  unknown,
  unknown
> =>
  async ({ url, method, data, params }) => {
    try {
      const response = await axiosInstance({
        url: `${baseUrl}${url}`,
        method,
        data,
        params
      })
      return { data: response.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message
        }
      }
    }
  }
