import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { TextInput } from '../components/atoms/text-input';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../redux/features/auth/auth.api';

export default function LoginPage() {
  const [Login] = useLoginMutation()
  return (
    <main>
      <Container sx={{
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}>
        <Paper variant='outlined' sx={{
          padding: 10
        }}>
          <Box sx={{
            width: '500px',
            margin: '0 auto',
          }}>
            <Typography variant='h1' component='h1' fontSize={50} fontWeight='bold' textAlign='center' mb={5}>Iniciar Sesión</Typography>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              onSubmit={(values) => Login(values)}
            >
              <Grid width='100%'>
                <Form>
                <Stack rowGap={4}>
                  <TextInput name='email' label='Correo' />
                  <TextInput name='password' type='password' label='Contraseña' />
                  <Button type='submit' variant='contained'>Enviar</Button>
                  <Typography variant='subtitle2' component='span'>
                    <Link to='/auth/register'>Registrase</Link>
                  </Typography>
                </Stack>
                </Form>
              </Grid>
            </Formik>
          </Box>
        </Paper>
      </Container>
    </main>
  )
}