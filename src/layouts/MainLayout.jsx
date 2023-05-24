import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import { GiHamburgerMenu } from "react-icons/gi";

import MobileNavbar from "@/components/navbar/MobileNavbar";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  return (
    <section>
      <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
        <GiHamburgerMenu
          style={{
            padding: "1.5em",
          }}
          className="sidebar-toggle"
          onClick={() => {
            setIsMobileSidebarVisible(true);
          }}
        />
        <Drawer
          anchor="left"
          open={isMobileSidebarVisible}
          onClose={() => {
            setIsMobileSidebarVisible(false);
          }}
        >
          {<MobileNavbar setIsSidebarVisible={setIsMobileSidebarVisible} />}
        </Drawer>
        <Box
          sx={{
            width: "200px",
            height: "40px",
            display: { xs: "flex", md: "none" },
            margin: "0 auto",
          }}
        >
          <Link
            style={{
              display: "block",
              position: "relative",
              width: "200px",
              height: "60px",
              marginRight: "1em",
              zIndex: 100,
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
      </Box>
      {!isMobileSidebarVisible && <NavBar />}
      {children}
      <Footer />
    </section>
  );
};

export default MainLayout;
