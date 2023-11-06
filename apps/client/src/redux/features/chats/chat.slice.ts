import { createSlice } from '@reduxjs/toolkit';
import { Chat } from '../../../interfaces/chat.interface';
import { chatApi } from './chat.api';

export interface ChatSliceState {
  userChats: Chat[]
  currentChatId: string
}

const initialState: ChatSliceState = {
  userChats: [],
  currentChatId: ''
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    currentChatId: (state, action) => {
      state.currentChatId = action.payload
    },
    addChats: (state, action) => {
      state.currentChatId = action.payload
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      chatApi.endpoints.getChatsByUserId.matchFulfilled,
      (state, action) => {
        state.userChats = action.payload
      }
    ),
    builder.addMatcher(
      chatApi.endpoints.createChat.matchFulfilled,
      (state, action) => {
        state.userChats = [...state.userChats, action.payload]
      }
    )
  }
})

export const { currentChatId, addChats } = chatSlice.actions

export default chatSlice.reducer