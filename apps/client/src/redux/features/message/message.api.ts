import { createApi } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../../../config/axios-instance'
import { axiosBaseQuery } from '../../../config/base-query'
import { Message } from '../../../interfaces/message.interface'


export const messageApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: axiosBaseQuery(BASE_URL),
  refetchOnMountOrArgChange: true,
  endpoints: builder => ({
    getMessagesByChatId: builder.query<Message[], { chatId: string }>({
      query: ({ chatId }) => ({
        url: `/messages/${chatId}`,
        method: 'GET'
      }),
      transformResponse: (data: Message[]) => data
    }),
    createMessage: builder.mutation<Message, {
      userId: string,
      chatId: string,
      text: string
    }>({
      query: (data) => ({
        url: '/messages',
        method: 'POST',
        data
      }),
      transformResponse: (data: Message) => data
    })
  })
})

export const { useGetMessagesByChatIdQuery, useLazyGetMessagesByChatIdQuery, useCreateMessageMutation } = messageApi

export const { createMessage, getMessagesByChatId } = messageApi.endpoints