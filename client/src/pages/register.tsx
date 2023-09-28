import { Form, Formik } from 'formik';
import { TextInput } from '../components/atoms/text-input';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
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
              onSubmit={(values) => console.log(values)}
            >
              <Grid width='100%'>
                <Form>
                  <Stack rowGap={4}>
                    <TextInput name='name' label='Nombre' />
                    <TextInput name='last_name' label='Apellido' />
                    <TextInput name='email' label='Correo' />
                    <TextInput name='password' type='password' label='Contraseña' />
                    <Button type='submit' variant='contained'>Enviar</Button>
                    <Typography variant='subtitle2' component='span'>
                      <Link to='/auth/login'>Iniciar Sesión</Link>
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