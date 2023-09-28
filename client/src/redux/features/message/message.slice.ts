import { createSlice } from '@reduxjs/toolkit';
import { messageApi } from './message.api';
import { Message } from '../../../interfaces/message.interface';

export interface UserSliceState {
  messages: Message[]
}

const initialState: UserSliceState = {
  messages: []
}

export const messageSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages = action.payload
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      messageApi.endpoints.getMessagesByChatId.matchFulfilled,
      (state, action) => {
        state.messages = action.payload
      }
    )
  }
})

export const { addMessage } = messageSlice.actions
export default messageSlice.reducer