import * as React from 'react';
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Message from '@mui/icons-material/Message';
import Notifications from '@mui/icons-material/Notifications';
import Home from '@mui/icons-material/Home';

function NavBar() {
  const actions = [
    {icon: <Home />, name: "Home"},
    {icon: <Notifications />, name: "Notifications"},
    {icon: <Message />, name: "Messages"},
    {icon: <Logout />, name: "Logout"},
    {icon: <Settings />, name: "Settings"}
  ];
  
  return (
    <Box sx={{height:320, tranform: 'translateZ(0px)', flexGrow:1}}>
      <SpeedDial
        sx={{position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon/>}
      >
        {actions.map((action) => {
          <SpeedDialAction  
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        })}
      </SpeedDial>
    </Box>
  )
}

export default NavBar;