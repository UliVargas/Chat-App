import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { rtkQueryErrorLogger, rtkQuerySuccessLogger } from './middlewares'
import { userReducer, userApi } from './features/user'
import { messageApi, messageReducer } from './features/message'
import { authReducer, authApi } from './features/auth'
import { chatApi, chatReducer } from './features/chats'
import uiReducer from './features/ui/ui.slice'
import socketReducer from './features/socket/socket.slice'

const rootReducer = combineReducers({
  // Slices Reducers
  user: userReducer,
  message: messageReducer,
  auth: authReducer,
  chat: chatReducer,
  ui: uiReducer,
  socket: socketReducer,

  // API Reducers
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [messageApi.reducerPath]: messageApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(
    userApi.middleware,
    messageApi.middleware,
    chatApi.middleware,
    rtkQuerySuccessLogger,
    rtkQueryErrorLogger
  )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch