import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { FiMenu } from 'react-icons/fi';


const MobileNavbar = ({ setIsSidebarVisible }) => {
  const router = useRouter();

  const handleOptionClick = (page) => {
    router.push(`/${page}`)
  }

    return (
      <Box
        role="presentation"
        onClick={() => {setIsSidebarVisible(false);}}
        onKeyDown={() => {setIsSidebarVisible(false);}}
      >
        <List>
          <ListItem  disablePadding>
            <ListItemButton onClick={() => {handleOptionClick('quienes-somos');}} >
              <ListItemIcon>
                <FiMenu />
              </ListItemIcon>
              <ListItemText>
              Quiénes somos
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem  disablePadding>
            <ListItemButton onClick={() => {handleOptionClick('servicios');}} >
              <ListItemIcon>
                <FiMenu />
              </ListItemIcon>
              <ListItemText>
              Servicios
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem  disablePadding>
            <ListItemButton onClick={() => {handleOptionClick('contacto');}} >
              <ListItemIcon>
                <FiMenu />
              </ListItemIcon>
              <ListItemText>
              Contacto
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
};  

export default MobileNavbar;;