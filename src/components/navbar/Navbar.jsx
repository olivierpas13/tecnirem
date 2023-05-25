import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

import { MdKeyboardArrowDown } from "react-icons/md";

const pages = ["Servicios", "Estilos", "Contacto"];
const services = ["Diseño de espacios", "Adecuacion de espacios", "Remodelacion"];

const NavBar = () => {

  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

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
                src="/static/logos/tecnirem-logo-dark.svg"
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
                  <>
                    <Button
                      id="menu-btn"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#14213d",
                        borderRadius: "1em",
                        "&:hover": {
                          color: "#eee",
                          backgroundColor: "#14213d",
                          transition: "background-color 0.3s",
                        },
                      }}
                      onMouseOver={() => setShowMenu(true)}
                      onMouseLeave={() => setShowMenu(false)}
                    >
                      <Typography
                        sx={{
                          display: "block",
                          padding: "0.7em",
                          borderRadius: "0.9em",
                          textDecoration: "none",
                          "&:hover": {
                            color: "#eee",
                          },
                        }}
                      >
                        {page.toUpperCase()}
                      </Typography>
                      <MdKeyboardArrowDown size={20} />
                    </Button>
                    {showMenu && (
                      <Box
                        sx={{
                          position: "absolute",
                          display: "flex",
                          backgroundColor: "#fff",
                          borderRadius: "0.3em",
                        }}
                        onMouseOver={() => setShowMenu(true)}
                        onMouseLeave={() => setShowMenu(false)}
                      >
                        <List
                          sx={{
                            padding: "0.2em",
                            width: "max",
                          }}
                        >
                          {services.map((service) => {
                            return (
                              <ListItem key={service} disablePadding>
                                <ListItemButton
                                  onClick={() =>
                                    router.push(
                                      `/servicios/${service
                                        .replace(/ñ/g, "n")
                                        .replace(/ /g, "-")
                                        .toLowerCase()}`
                                    )
                                  }
                                >
                                  <ListItemText primary={service} />
                                </ListItemButton>
                              </ListItem>
                            );
                          })}
                        </List>
                      </Box>
                    )}{" "}
                  </>
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
