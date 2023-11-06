import { Avatar, Container, Grid, Paper } from '@mui/material'
import { ChatMessages } from '../components/organisms/chat-messages'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useLazyGetChatsByUserIdQuery } from '../redux/features/chats'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { AvailableContacts } from '../components/organisms/available-contacts'
import { useLazyGetAllUsersQuery } from '../redux/features/user'
import { ChatsBar } from '../components/organisms/chats-bar'
import io, { Socket } from 'socket.io-client'
import { addOnlineUsers } from '../redux/features/user/user.slice'
import { addMessage } from '../redux/features/message/message.slice'
import { AppBar } from '../components/molecules/app-bar'

export default function ChatPage() {
  const { user, recipientUser } = useAppSelector(state => state.user)
  const { newMessage } = useAppSelector(state => state.message)
  const { currentChatId } = useAppSelector(state => state.chat)
  const dispatch = useAppDispatch()
  const [GetChatsByUser, { isSuccess }] = useLazyGetChatsByUserIdQuery()
  const [GetUsers] = useLazyGetAllUsersQuery()
  const [socket, setSocket] = useState<Socket | null>(null)

  // Client
  useEffect(() => {
    const socketIO = io('http://localhost:5000')
    setSocket(socketIO)
    return () => {
      socketIO.disconnect();
    };

  }, [user])

  // Get Online Users
  useEffect(() => {
    if (socket === null) return
    socket.emit('addNewUser', user.id)
    socket.on('getOnlineUsers', (resp) => {
      dispatch(addOnlineUsers(resp))
    })

    return () => {
      socket.off("getOnlineUsers")
    }
  }, [dispatch, socket, user.id])

  // Send Message
  useEffect(() => {
    if (socket === null) return
    socket.emit('sendMessage', { ...newMessage, recipientId: recipientUser.id })
  }, [newMessage, recipientUser.id, socket])

  // Get Message
  useEffect(() => {
    if (socket === null) return
    socket.on('getMessage', resp => {
      if (currentChatId !== resp.chat.id) return
      dispatch(addMessage(resp))
    })

    return () => {
      socket.off('getMessage')
    }
  }, [socket, currentChatId, dispatch])

  useEffect(() => {
    GetUsers({})
    if (user.id) {
      GetChatsByUser({ userId: user.id })
    }
  }, [GetChatsByUser, GetUsers, user])


  return (
    <main>
      <AppBar />
      <Container sx={{
        margin: '15px auto',
      }}>
        <AvailableContacts />
        <Paper sx={{
          width: '100%',
          height: '100%'
        }} variant='outlined'>
          <Box sx={{
            display: 'flex',
            gap: '20px'
          }}>
            <Grid container>
              <ChatsBar isSuccess={isSuccess} />
              <Grid item sx={{
                width: '70%',
              }}>
                {
                  !currentChatId
                    ? (
                      <Box sx={{
                        height: 'Calc(100vh - 200px)'
                      }} />
                      
                    )
                    : (
                      <Box sx={{
                        height: 'Calc(100vh - 200px)'
                      }}>
                        <ChatMessages />
                      </Box>
                    )
                }
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </main>
  )
}