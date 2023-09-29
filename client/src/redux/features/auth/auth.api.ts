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
    register: builder.mutation<User, { name: string, last_name: string, email: string, password: string }>({
      query: (data) => ({
        url: '/users/register',
        method: 'POST',
        data
      }),
      transformResponse: (data: AuthToken) => data
    }),
  })
})

export const { useLoginMutation, useRegisterMutation } = authApi
export const { login, register } = authApi.endpoints