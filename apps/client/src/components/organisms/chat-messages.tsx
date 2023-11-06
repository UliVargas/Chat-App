import {
  Alert,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import { Message } from '../molecules/message'
import { Formik, Form } from 'formik'
import { TextInput } from '../atoms/text-input'
import { useAppSelector } from '../../hooks/redux'
import { useCreateMessageMutation } from '../../redux/features/message'
import { Stack } from '@mui/system'
import { useEffect, useRef } from 'react'


export const ChatMessages = () => {
  const { messages } = useAppSelector(state => state.message)
  const { currentChatId } = useAppSelector(state => state.chat)
  const { user } = useAppSelector(state => state.user)
  const [CreateMessage] = useCreateMessageMutation()
  const scroll = useRef()
  const { recipientUser } = useAppSelector(state => state.user)

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <Stack direction='column' height='100%'>
      <Alert color='info' icon={false} sx={{
        display: 'flex',
        placeContent: 'center'
      }}>
        <Typography variant='h5'>
          {recipientUser.name}
        </Typography>
      </Alert>
      <div style={{ flexGrow: 1, overflow: "scroll", padding: '30px' }}>
        {messages.map((message) => (
          <div ref={scroll}>
            <Message key={message.id} message={message} user={user} />
          </div>
        ))}
      </div>
      <div style={{ padding: 2, backgroundColor: "background.default" }}>
        <Formik
          initialValues={{
            text: ''
          }}
          onSubmit={({ text }, { resetForm }) => {
            CreateMessage({ text, chatId: currentChatId, userId: user.id })
            resetForm()
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextInput
                  size="small"
                  fullWidth
                  placeholder="Escribe un mensaje"
                  variant="outlined"
                  name='text'
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type='submit'
                  fullWidth
                  color="primary"
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </div>
    </Stack>
  )
}