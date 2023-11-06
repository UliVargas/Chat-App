import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '.';
import { User } from '../../../interfaces/user.interface';
import { OnlineUsers } from '../../../interfaces/online-users.interface';

export interface UserSliceState {
  users: User[],
  user: User
  onlineUsers: OnlineUsers[]
  recipientUser: User
}

const initialState: UserSliceState = {
  users: [],
  user: {
    createdAt: '',
    email: '',
    id: '',
    last_name: '',
    name: '',
    password: ''
  },
  onlineUsers: [],
  recipientUser: {
    createdAt: '',
    email: '',
    id: '',
    last_name: '',
    name: '',
    password: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = action.payload
    },
    addOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload
    },
    addRecipientUser: (state, action) => {
      state.recipientUser = action.payload
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getAllUsers.matchFulfilled,
      (state, action) => {
        state.users = action.payload
      },
    ),
    builder.addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload
      }
    )
  }
})

export const { addUsers, addOnlineUsers, addRecipientUser } = userSlice.actions
export default userSlice.reducer