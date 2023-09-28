import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './normalize.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login.tsx'
import RegisterPage from './pages/register.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/auth/login',
    element: <LoginPage />
  },
  {
    path: '/auth/register',
    element: <RegisterPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
