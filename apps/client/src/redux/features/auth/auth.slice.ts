import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../interfaces/user.interface';
import { CookiesManager } from '../../../utilities/cookies-manager';

export interface AuthSliceState {
  isAuthenticated: boolean
  token: string
  userId: string
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
  token: CookiesManager.getInCookies('token') ?? '',
  userId: CookiesManager.getInCookies('userId') ?? ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      state.isAuthenticated = action.payload
    }
  }
})

export const { authenticate } = authSlice.actions

export default authSlice.reducer