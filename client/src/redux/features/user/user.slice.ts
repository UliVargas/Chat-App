import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '.';
import { User } from '../../../interfaces/user.interface';

export interface UserSliceState {
  users: User[]
}

const initialState: UserSliceState = {
  users: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getAllUsers.matchFulfilled,
      (state, action) => {
        state.users = action.payload
      }
    )
  }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer