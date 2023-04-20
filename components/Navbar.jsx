import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import { GiHamburgerMenu } from 'react-icons/gi';


const pages = [ 'Inicio', 'Servicios', 'Contacto'];

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <AppBar position="fixed" color="tertiary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{ display: { xs: 'none', md: 'flex', marginRight: '2em' } }}
            >
              <Link style={{
                    display: 'block',
                    position: 'relative',
                    width: '200px',
                    height: '60px',
                    marginRight: '1em',
                  }} href="/" passHref>                  
                  <Image
                    fill
                    src="/tecnirem-logo-dark.svg"
                    quality={100}
                    alt="Tecnirem Logo"
                  />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <GiHamburgerMenu />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Link
                    style={{
                    display: 'block',
                    position: 'relative',
                    width: '200px',
                    height: '60px',
                    marginRight: '1em',
                  }} href="/" passHref>
                  <Image
                    fill
                    src="/tecnirem-logo-dark.svg"
                    quality={100}
                    alt="Tecnirem Logo"
                  />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{ display: { xs: 'none', md: 'flex', marginRight: '2em' } }}
            >
              <Typography
                sx={{
                  mr: 4,
                  display: 'block',
                  '& a': {
                    color: '#14213d',
                    padding: '0.7em',
                    borderRadius: '0.9em',
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: '#eee',
                      transition: 'background-color 0.3s',
                    },
                  },
                }}
              >
                <Link href={'/quienes-somos'}>
                  QUIENES SOMOS
                </Link>
              </Typography>
              {pages.map((page) => (
                <Typography
                  key={page}
                  sx={{
                    mr: 4,
                    display: 'block',
                    '& a': {
                      color: '#14213d',
                      padding: '0.7em',
                      borderRadius: '0.7em',
                      textDecoration: 'none',
                      '&:hover': {
                        backgroundColor: '#eee',
                        transition: 'background-color 0.3s',
                      },
                    },
                  }}
                >
                  <Link href={`/${page.toLowerCase()}`}>
                    {page.toUpperCase()}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default NavBar;