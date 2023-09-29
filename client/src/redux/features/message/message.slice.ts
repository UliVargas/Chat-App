import { createSlice } from '@reduxjs/toolkit';
import { messageApi } from './message.api';
import { Message } from '../../../interfaces/message.interface';

export interface UserSliceState {
  messages: Message[]
  newMessage: any
}

const initialState: UserSliceState = {
  messages: [],
  newMessage: {}
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages = [...state.messages, action.payload]
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      messageApi.endpoints.getMessagesByChatId.matchFulfilled,
      (state, action) => {
        state.messages = action.payload
      }
    ),
    builder.addMatcher(
      messageApi.endpoints.createMessage.matchFulfilled,
      (state, action) => {
        state.messages = [...state.messages, action.payload]
        state.newMessage = action.payload
      }
    )
  }
})

export const { addMessage } = messageSlice.actions
export default messageSlice.reducer