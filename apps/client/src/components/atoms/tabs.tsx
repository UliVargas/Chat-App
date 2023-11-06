import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { ReactNode, useState } from 'react'
import { Chat, SupervisedUserCircleSharp } from '@mui/icons-material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { changeTab } from '../../redux/features/ui/ui.slice'
import { Box } from '@mui/system'

export default function IconTabs({ children }: { children: ReactNode }) {

  const dispatch = useAppDispatch()
  const { value } = useAppSelector(state => state.ui)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    dispatch(changeTab(newValue))
  }
  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab icon={<Chat sx={{ color: 'white' }} />} aria-label="Chats" value='0' />
            <Tab icon={<SupervisedUserCircleSharp sx={{ color: 'white' }} />} value='1' aria-label="Usuarios" />
          </TabList>
        </Box>
        {children}
      </TabContext>
    </Box>
  )
}