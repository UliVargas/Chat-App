import { useMemo } from 'react'
import { useAppSelector } from '../../hooks/redux'
import { Button, Chip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useCreateChatMutation } from '../../redux/features/chats'

export const AvailableContacts = () => {
  const { users, user, onlineUsers } = useAppSelector(state => state.user)
  const { userChats } = useAppSelector(state => state.chat)
  const [CreateChat] = useCreateChatMutation()

  const availableUsers = useMemo(() => users.filter((u) => {
    let isChatCreated: boolean = false
    if (user?.id === u.id) return false
    if (userChats) {
      isChatCreated = userChats?.some((chat) => {
        return chat.users[0].id === u.id || chat.users[1].id === u.id
      })
    }
    return !isChatCreated
  }), [userChats, users, user])

  console.log(availableUsers);
  

return (
  <Box sx={{
    mb: 2,
    display: 'flex',
    gap: 2,
    alignItems: 'center'
  }}>
    <Typography variant='body1'>Usuarios disponibles: </Typography>
    {
      availableUsers.length > 0 ? (
        <>
          {
            availableUsers.map((u) => {
              const isOnline = onlineUsers?.some(user => user?.userId === u.id)
              return (
                <Button variant='outlined' key={u.id} onClick={() => CreateChat({
                  firstUserId: user.id,
                  secondUserId: u.id
                })}>
                  {u.name}
                  <Chip
                    size='small'
                    label={isOnline
                      ? 'En línea'
                      : 'Fuera de linea'
                    }
                    color={isOnline
                      ? 'success'
                      : 'error'
                    }
                    sx={{
                      ml: '5px',
                      fontSize: '10px'
                    }}
                  />
                </Button>
              )
            })
          }
        </>
      ): (
        <Typography variant='subtitle2'>No hay usuarios</Typography>
      )
    }
  </Box>
)
}