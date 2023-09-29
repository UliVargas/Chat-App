import { Avatar, Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { Message as IMessage } from '../../interfaces/message.interface';
import { User } from '../../interfaces/user.interface';

interface Props {
  message: IMessage
  user: User
}

export const Message: FC<Props> = ({ message, user }) => {
  const isCurrentUser = message.user.id === user.id
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isCurrentUser ? "flex-start" : "flex-end",
        mb: 2,
      }}
      >
      <Box
        sx={{
          display: "flex",
          flexDirection: isCurrentUser ? "row" : "row-reverse" ,
          alignItems: "center",
          gap: 1
        }}
      >
        <Avatar sx={{ bgcolor: isCurrentUser ? "primary.main" : "secondary.main" }}>
          {message.user.name.charAt(0)}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isCurrentUser ? 1 : 0,
            mr: isCurrentUser ? 0 : 1,
            backgroundColor: isCurrentUser ? "primary.light" : "secondary.light",
            borderRadius: isCurrentUser ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};