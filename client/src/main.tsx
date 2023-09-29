import React from 'react'
import ReactDOM from 'react-dom/client'
import './normalize.css'
import './index.css'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login.tsx'
import RegisterPage from './pages/register.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { SnackbarProvider } from 'notistack'
import { SnackbarConfigurator } from './snackbar.tsx'
import { AuthGuard } from './guards/auth-guard.tsx'
import NotFoundPage from './pages/not-found.tsx'
import ChatPage from './pages/chat.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/app/chats" replace />
  },
  {
    path: '/app/chats',
    element: (
      <AuthGuard>
        <ChatPage />
      </AuthGuard>
    ),
  },
  {
    path: '/auth/login',
    element: <LoginPage />
  },
  {
    path: '/auth/register',
    element: <RegisterPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider>
        <SnackbarConfigurator />
        <RouterProvider router={router} />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
)
