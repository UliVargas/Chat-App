import { Avatar, Badge, Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { Chat } from '../../interfaces/chat.interface'
import { User } from '../../interfaces/user.interface'
import { useEffect } from 'react'
import { useLazyGetMessagesByChatIdQuery } from '../../redux/features/message'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { currentChatId } from '../../redux/features/chats/chat.slice'
import { addRecipientUser } from '../../redux/features/user/user.slice'

export const UserChat = ({ chat, user }: { chat: Chat, user: User }) => {
  const recipientUser = chat.users?.find(({ id }) => id !== user.id)
  const [GetMessageByChatId] = useLazyGetMessagesByChatIdQuery()
  const { onlineUsers } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const isOnline = onlineUsers?.some(user => user?.userId === recipientUser?.id)

  return (
    <Button onClick={() => {
      dispatch(currentChatId(chat.id))
      dispatch(addRecipientUser(recipientUser))
      GetMessageByChatId({ chatId: chat.id })
    }} variant='outlined'>
      <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '15px',
        padding: '10px 15px'
      }}>
        <DivFlex>
          <Avatar />
          <div>
            <Typography variant='body1'>
              {recipientUser?.name}
            </Typography>
            <Typography variant='subtitle1'>
              Mensaje
            </Typography>
          </div>
        </DivFlex>
        <DivFlexColumn>
          <div>
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
          </div>
        </DivFlexColumn>
      </Box>
    </Button>
  )
}

const DivFlex = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`

const DivFlexColumn = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: end;
`