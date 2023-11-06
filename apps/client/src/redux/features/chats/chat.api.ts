import { createApi } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../../../config/axios-instance'
import { axiosBaseQuery } from '../../../config/base-query'
import { Chat } from '../../../interfaces/chat.interface'


export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: axiosBaseQuery(BASE_URL),
  endpoints: builder => ({
    getChatsByUserId: builder.query<Chat[], unknown>({
      query: ({ userId }) => ({
        url: `/chats/${userId}`,
        method: 'GET'
      })
    }),
    createChat: builder.mutation<Chat, { firstUserId: string, secondUserId: string }>({
      query: (data) => ({
        url: '/chats',
        method: 'POST',
        data
      })
    })
  })
})

export const { useGetChatsByUserIdQuery, useLazyGetChatsByUserIdQuery, useCreateChatMutation } = chatApi

export const { getChatsByUserId, createChat } = chatApi.endpoints