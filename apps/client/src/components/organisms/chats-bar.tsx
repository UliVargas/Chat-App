import { Avatar, Grid, Paper, Stack, Typography } from '@mui/material';
import IconTabs from '../atoms/tabs';
import { AppBar } from '../molecules/app-bar';
import { useAppSelector } from '../../hooks/redux';
import { UserChat } from '../molecules/user-chat';
import { useLazyGetUserQuery } from '../../redux/features/user';
import { CookiesManager } from '../../utilities/cookies-manager';
import { ReactNode, useEffect } from 'react';
import { AvailableContacts } from './available-contacts';

export const ChatsBar = ({ isSuccess }: { isSuccess: boolean }) => {
  const { userChats } = useAppSelector(state => state.chat)
  const { user } = useAppSelector(state => state.user)
  const [GetUser] = useLazyGetUserQuery()

  useEffect(() => {
    GetUser({ userId: CookiesManager.getInCookies('userId') as string })
  }, [])

  return (
    <Paper sx={{
      width: '30%'
    }} variant='outlined'>
      <Grid item>
        {
          !isSuccess ? (
            <p>Cargando Chats...</p>
          ) : (
            <Stack spacing={2} padding='5px 10px'>
              {
                userChats.map(chat => (
                  <UserChat key={chat.id} user={user} chat={chat} />
                ))
              }
            </Stack>
          )
        }
      </Grid>
    </Paper>
  )
}