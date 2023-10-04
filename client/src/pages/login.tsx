import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { TextInput } from '../components/atoms/text-input';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../redux/features/auth/auth.api';
import { LoadingButton } from '@mui/lab';
import { SnackbarUtilities } from '../snackbar';
import { getValidationSuccess } from '../utilities/validation';
import * as Yup from 'yup'
import { useEffect } from 'react';
import { useAppSelector } from '../hooks/redux';
import { CookiesManager } from '../utilities/cookies-manager';

const validationSchema = Yup.object({
  email: Yup.string().required('Este campo es requerido').email('Ingresa un correo válido'),
  password: Yup.string().required('Este campo es requerido')
})

export default function LoginPage() {
  const [Login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  
  useEffect(() => {
    const userId = CookiesManager.getInCookies('userId')
    if (userId) {
      navigate('/chats')
    }
  }, [navigate])

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
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => Login(values).then(() => {
                resetForm()
                SnackbarUtilities.success(getValidationSuccess('login'))
                navigate('/chats')
              })}
            >
              <Grid width='100%'>
                <Form>
                <Stack rowGap={4}>
                  <TextInput name='email' label='Correo' />
                  <TextInput name='password' type='password' label='Contraseña' />
                  <LoadingButton type='submit' variant='contained' loading={isLoading}>Enviar</LoadingButton>
                  <Typography variant='subtitle2' component='span'>
                    <Link to='/register'>Registrase</Link>
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