import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/Container";
import MobileNavbar from "./MobileNavbar";

const pages = ["Servicios", "Estilos","Contacto"];
const services = ["Adecuacion de espacios", "Diseño", "Remodelacion"]; // Add your services here

const NavBar = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{ display: { xs: "none", md: "flex" } }}
      position="fixed"
      color="tertiary"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex", marginRight: "2em" } }}>
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
          <Box sx={{ display: { xs: "none", md: "flex", justifyContent: "center", alignItems: "center", marginRight: "2em" } }}>
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
                  <div                       onMouseEnter={(e)=>handleClick(e)}
                  >
                    <Button
                      aria-controls="services-menu"
                      aria-haspopup="true"
                      // onMouseEnter={(e)=>handleClose(e)}
                      onClick={()=>{router.push("/servicios")}}
                      sx={{
                        color: "#14213d",
                        padding: "0.7em",
                        borderRadius: "0.7em",
                        textDecoration: "none",
                        "&:hover": {
                          color: "#eee",
                          backgroundColor: "#14213d",
                          transition: "background-color 0.3s",
                        },
                      }}
                    >
                      {page.toUpperCase()}
                    </Button>
                    <Menu
                      id="services-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      onMouseLeave={handleClose}
                      MenuListProps={{
                        onMouseLeave: handleClose,
                      }}
                    >
                      {services.map((service) => (
                        <MenuItem
                          key={service}
                          onClick={()=>handleClose()}
                          sx={{
                            textDecoration: "none",
                            "&:hover": {
                              backgroundColor: "black",
                              color: "white",
                            },
                          }}
                        >
                          <Link                           sx={{
                            textDecoration: "none",
                            "&:hover": {
                              backgroundColor: "black",
                              color: "white",
                            },
                          }} href={`/servicios/${service.toLowerCase().replace(/\s+/g, '-').replace("ñ", "n")}`}>
                            {service}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                ):



                <Link
                href={`/${page.toLowerCase()}`}>
                  {page.toUpperCase()}
                  
                </Link>}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
