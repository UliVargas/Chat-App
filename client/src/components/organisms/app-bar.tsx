import { AppBar as MAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MAppBar position="static">
        <Toolbar sx={{
          width: '1200px',
          margin: '0 auto'
        }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>
          <Button color="inherit">Registrarse</Button>
          <Button color="inherit">Iniciar sesión</Button>
        </Toolbar>
      </MAppBar>
    </Box>
  );
}
