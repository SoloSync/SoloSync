import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Home from '@mui/icons-material/Home';
import Notifications from '@mui/icons-material/Notifications';
import Message from '@mui/icons-material/Message';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';


function NavBar() {  
  return (
    <div id='navBarContainer'>
      <Box sx={{width: '100%', maxWidth:'240px'}}>
        <nav aria-label='main mailbox folders'>
          <List >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Notifications/>
                </ListItemIcon>
                <ListItemText>Notifications</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Message />
                </ListItemIcon>
                <ListItemText>Messages</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>

    </div>
  )
}

export default NavBar;