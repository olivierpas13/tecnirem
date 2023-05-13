import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Image from "next/image";

const HeroSection = () => {

  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          overflow: "hidden",
        }}
      >
        <Carousel
        interval={3500}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "90vh",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: "url(/bg-tecnirem.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
          <Image
            width={400}
            height={150}
            src="/tecnirem-logo-dark.svg"
            quality={100}
            alt="Tecnirem Logo"
          />

            <Typography sx={{display: "flex", fontWeight: "500",}} variant="h5" >
                Adecuación y Remodelación de Ambientes
            </Typography>
            <Button style={{marginTop: "2em"}}variant="contained" color="primary">
              Contáctanos
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              height: "90vh",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: "url(/bg-tecnirem2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
          <Image
            width={400}
            height={150}
            src="/tecnirem-logo-dark.svg"
            quality={100}
            alt="Tecnirem Logo"
          />

            <Typography sx={{display: "flex", fontWeight: "500", color: "#eee", textShadow: "black 0px"}} variant="h5" >
              Renovamos tus ideas
            </Typography>
            <Button style={{marginTop: "2em"}}variant="contained" color="primary">
              Contáctanos
            </Button>
            </Box>        
        </Carousel>
      </Box>
    </Box>
  );
};

export default HeroSection;
