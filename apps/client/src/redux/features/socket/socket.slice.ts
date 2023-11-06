import { createSlice } from '@reduxjs/toolkit'

const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    mensajes: [],
  },
  reducers: {
    newMessage: (state, action) => {
      state.mensajes = action.payload
    },
  },
})

export const { newMessage } = socketSlice.actions
export default socketSlice.reducer