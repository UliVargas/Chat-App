import { AppBar as MAppBar, Container, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode } from 'react';
import { CookiesManager } from '../../utilities/cookies-manager';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

export const AppBar = () => {
  const navigate = useNavigate()
  const { user } = useAppSelector(state => state.user)
  const logout = () => {
    CookiesManager.clearCookie('token')
    CookiesManager.clearCookie('userId')
    navigate('/login')
  }
  return (
    <MAppBar position="static">
      <Toolbar sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Container sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Typography variant='h5' component='h1'>Chat App</Typography>
          <Typography variant='h5' fontWeight={700} component='h1'>Hola, {user.name}</Typography>
          <Button onClick={logout} variant='text' sx={{
            color: 'white'
          }}>
            Cerrar sesión
          </Button>
        </Container>
      </Toolbar>
    </MAppBar>
  )
}
