import { createApi } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../../../config/axios-instance'
import { axiosBaseQuery } from '../../../config/base-query'
import { User } from '../../../interfaces/user.interface'
import { Message } from '../../../interfaces/message.interface'


export const messageApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: axiosBaseQuery(BASE_URL),
  endpoints: builder => ({
    getMessagesByChatId: builder.query<Message[], { chatId: string }>({
      query: ({ chatId }) => ({
        url: `/messages/${chatId}`,
        method: 'GET'
      }),
      transformResponse: (data: Message[]) => data
    }),
    createMessage: builder.mutation<User, Omit<User, 'createdAt' | 'id'>>({
      query: (data) => ({
        url: '/users/register',
        method: 'POST',
        data
      }),
      transformResponse: ({ data }) => data
    })
  })
})

export const { useGetMessagesByChatIdQuery, useLazyGetMessagesByChatIdQuery } = messageApi

export const { createMessage, getMessagesByChatId } = messageApi.endpoints