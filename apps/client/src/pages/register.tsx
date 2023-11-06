import { Form, Formik } from 'formik';
import { TextInput } from '../components/atoms/text-input';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../redux/features/auth';
import { LoadingButton } from '@mui/lab';
import { SnackbarUtilities } from '../snackbar';
import { getValidationSuccess } from '../utilities/validation';
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string().required('Este campo es requerido'),
  last_name: Yup.string().required('Este campo es requerido'),
  email: Yup.string().required('Este campo es requerido').email('Ingresa un correo válido'),
  password: Yup.string().required('Este campo es requerido')
})

export default function RegisterPage() {
  const [Register, { isLoading }] = useRegisterMutation()
  const navigate = useNavigate()
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
            <Typography variant='h1' component='h1' fontSize={45} fontWeight='bold' textAlign='center' mb={5}>Registro</Typography>
            <Formik
              initialValues={{
                name: '',
                last_name: '',
                email: '',
                password: ''
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => Register(values).then(() => {
                SnackbarUtilities.success(getValidationSuccess('createUser'))
                navigate('/login')
              })}
            >
              <Grid width='100%'>
                <Form>
                  <Stack rowGap={4}>
                    <TextInput name='name' label='Nombre' />
                    <TextInput name='last_name' label='Apellido' />
                    <TextInput name='email' label='Correo' />
                    <TextInput name='password' type='password' label='Contraseña' />
                    <LoadingButton type='submit' variant='contained' loading={isLoading}>Enviar</LoadingButton>
                    <Typography variant='subtitle2' component='span'>
                      <Link to='/login'>Iniciar Sesión</Link>
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