import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { rtkQueryErrorLogger, rtkQuerySuccessLogger } from './middlewares'
import { userReducer, userApi } from './features/user'
import { messageApi, messageReducer } from './features/message'

const rootReducer = combineReducers({
  // Slices Reducers
  user: userReducer,
  message: messageReducer,

  // API Reducers
  [userApi.reducerPath]: userApi.reducer,
  [messageApi.reducerPath]: messageApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(
    userApi.middleware,
    rtkQuerySuccessLogger,
    rtkQueryErrorLogger
  )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch