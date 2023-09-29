import { ReactNode, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom' // Importa useHistory

import { authenticate } from '../redux/features/auth/auth.slice'
import { useLazyGetUserQuery } from '../redux/features/user'

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, userId, token } = useAppSelector(state => state.auth)
  const [GetUser] = useLazyGetUserQuery()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      jwtDecode(token)
      dispatch(authenticate(true))
      GetUser({ userId })
    } catch (error) {
      dispatch(authenticate(false))
      navigate('/auth/login')
    }
  }, [])

  if (isAuthenticated) {
    return <>{children}</>
  } else {
    return null
  }
}
