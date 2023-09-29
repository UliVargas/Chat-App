import { createApi } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../../../config/axios-instance'
import { axiosBaseQuery } from '../../../config/base-query'
import { AuthToken, User } from '../../../interfaces/user.interface'
import { CookiesManager } from '../../../utilities/cookies-manager'


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(BASE_URL),
  endpoints: builder => ({ 
    login: builder.mutation<User, { email: string, password: string }>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        data
      }),
      transformResponse: (data: AuthToken) => {
        CookiesManager.saveInCookies('token', data.token)
        CookiesManager.saveInCookies('userId', data.id)
        return data
      }
    }),
  })
})

export const { useLoginMutation } = authApi
export const { login } = authApi.endpoints