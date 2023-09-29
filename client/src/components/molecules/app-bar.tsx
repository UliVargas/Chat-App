import { Avatar, AppBar as MAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode } from 'react';

export const AppBar = ({ children }: { children: ReactNode }) => {
  return (
    <MAppBar position="static">
      <Toolbar sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {children}
      </Toolbar>
    </MAppBar>
  )
}
