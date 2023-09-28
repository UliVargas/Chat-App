import { createApi } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../../../config/axios-instance'
import { axiosBaseQuery } from '../../../config/base-query'
import { User } from '../../../interfaces/user.interface'


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQuery(BASE_URL),
  endpoints: builder => ({
    getAllUsers: builder.query<User[], unknown>({
      query: () => ({
        url: '/users',
        method: 'GET'
      }),
      transformResponse: (data: User[]) => data
    }),
    createUser: builder.mutation<User, Omit<User, 'createdAt' | 'id'>>({
      query: (data) => ({
        url: '/users/register',
        method: 'POST',
        data
      }),
      transformResponse: ({ data }) => data
    })
  })
})

export const { useCreateUserMutation, useGetAllUsersQuery, useLazyGetAllUsersQuery } = userApi

export const { createUser, getAllUsers } = userApi.endpoints