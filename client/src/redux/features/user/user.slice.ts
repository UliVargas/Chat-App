import { createSlice } from '@reduxjs/toolkit';

export interface UserSliceState {
  users: []
}

const initialState: UserSliceState = {
  users: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { addUsers } = userSlice.actions
export default userSlice.reducer