import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Home from '@mui/icons-material/Home';
import Face from '@mui/icons-material/Face';
import Notifications from '@mui/icons-material/Notifications';
import Message from '@mui/icons-material/Message';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom'


function NavBar() {  
  return (
    <div id='navBarContainer'>
      <Box sx={{width: '100%', maxWidth:'240px'}}>
        <nav aria-label='main mailbox folders'>
          <List id='List'>
            <Link to='/Homepage' className='Links'>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon style={{color:'white'}}>
                      <Home/>
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                  </ListItemButton>
              </ListItem>
            </Link>
            <Link to='/Profile' className='Links'>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon style={{color:'white'}}>
                      <Face/>
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </ListItemButton>
              </ListItem>
            </Link>
            <Link to='/Notification' className='Links'>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{color:'white'}}>
                    <Notifications/>
                  </ListItemIcon>
                  <ListItemText>Notification</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to='/Messages' className='Links'>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{color:'white'}}>
                    <Message />
                  </ListItemIcon>
                  <ListItemText>Messages</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to='/' className='Links'>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{color:'white'}}>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to='/Settings' className='Links'>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{color:'white'}}>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </nav>
      </Box>
    </div>
  )
}

export default NavBar;