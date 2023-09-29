import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      gap='20px'
    >
      <Typography variant='h3' gutterBottom>
        404 - Página no encontrada
      </Typography>
      <Typography variant='h6'>
        La página que buscas no existe.
      </Typography>
      <Button variant='contained'>
        <Link to='/home' style={{
          textDecoration: 'none',
          color: 'white',
          fontWeight: 700
        }}>Ir al inicio</Link>
      </Button>
    </Box>
  )
}
