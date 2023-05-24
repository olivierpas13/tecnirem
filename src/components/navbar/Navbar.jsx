import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MobileNavbar from "./MobileNavbar";

import { MdKeyboardArrowDown } from "react-icons/md";

const pages = ["Servicios", "Estilos", "Contacto"];
const services = ["Adecuacion de espacios", "Diseño", "Remodelacion"]; // Add your services here

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuStyles = {
    a:{
      textDecoration: "none",
      backgroundColor: "red"
    }
  }

  return (
      <AppBar
        sx={{ display: { xs: "none", md: "flex" } }}
        position="fixed"
        color="tertiary"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{ display: { xs: "none", md: "flex", marginRight: "2em" } }}
            >
              <Link
                style={{
                  display: "block",
                  position: "relative",
                  width: "200px",
                  height: "60px",
                  marginRight: "1em",
                }}
                href="/"
                passHref
              >
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
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "2em",
                },
              }}
            >
              <Typography
                sx={{
                  mr: 4,
                  display: "block",
                  "& a": {
                    color: "#14213d",
                    padding: "0.7em",
                    borderRadius: "0.9em",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#eee",
                      backgroundColor: "#14213d",
                      transition: "background-color 0.3s",
                    },
                  },
                }}
              >
                <Link href={"/quienes-somos"}>QUIENES SOMOS</Link>
              </Typography>
              {pages.map((page) => (
                <Typography
                  key={page}
                  sx={{
                    mr: 4,
                    display: "block",
                    "& a": {
                      color: "#14213d",
                      padding: "0.7em",
                      borderRadius: "0.7em",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#eee",
                        backgroundColor: "#14213d",
                        transition: "background-color 0.3s",
                      },
                    },
                  }}
                >
                  {page === "Servicios" ? (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "block",
                          "& a": {
                            color: "#14213d",
                            padding: "0.7em",
                            borderRadius: "0.9em",
                            textDecoration: "none",
                            "&:hover": {
                              color: "#eee",
                              backgroundColor: "#14213d",
                              transition: "background-color 0.3s",
                            },
                          },
                        }}
                      >
                        <Link href={page.toLowerCase()}>{page.toUpperCase()}</Link>
                      </Typography>
                      <Box
                        sx={{
                          borderRadius: "10em",
                          height: "auto",
                          width: "auto",
                          justifyContent: "center",
                          display: "flex",
                          padding: 0,
                          "&:hover": {
                            backgroundColor: "#eee",
                          },
                        }}
                      >
                        <MdKeyboardArrowDown
                          size={20}
                          onClick={handleClick}
                        />
                      </Box>
                      <Menu
                        onMouseLeave={handleClose}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                      >
                        {services.map((service) => (
                          <MenuItem
                            key={service}
                            onClick={() => setShowMenu(false)}
                            >
                            {/* <Link
                            className="menu-item"
                              style={{
                                textDecoration: "none",
                                a:{
                                  "&:hover":{
                                    backgroundColor: "purple",
                                  }
                                }
                              }}
                              href={`/servicios/${service
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace("ñ", "n")}`}
                            > */}
                              {service}
                            {/* </Link> */}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <Link href={`/${page.toLowerCase()}`}>
                      {page.toUpperCase()}
                    </Link>
                  )}
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default NavBar;
