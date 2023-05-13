import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Carousel from "react-material-ui-carousel";

import { mainTheme } from "@/utils/Pallete";
import RightImageSection from "../global/RightImageSection";

const Remodelacion = () => {
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "inline-block",
            padding: "1.5em 7em",
            borderRadius: "0.3em",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "500", textAlign: "center", margin: "0 auto" }}
          >
            Remodelación de Oficinas Modernas, Consultorios y Locales
            Comerciales{" "}
          </Typography>
        </Box>
      </Box>
      {/* <Grid
        container
        columns={{ xs: 1, md: 12 }}
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
          marginTop: "1%",
        }}
      >
        <RightImageSection
          bigDescription={true}
          description={
            "Si está buscando realizar cambios menores y ajustes en un espacio existente, para adaptarlo a nuevas necesidades o funciones, nuestro servicio de adecuación de espacio es lo que necesita. Este proceso es menos complejo y menos costoso que una remodelación completa, ya que no implica grandes cambios estructurales o de diseño. "
          }
          imageUrl={"/diseño.webp"}
        />
      </Grid> */}
      <Box
        sx={{
          height: "100%",
          margin: "auto",
          width: "70%",
          padding: "5em",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            lineHeight: 1.4,
            my: "1em",
            textAlign: "center",
            color: mainTheme.palette.primary.main,
          }}
        >
          Estos son algunos servicios que contemplan nuestros procesos de
          renovación:
        </Typography>
        <Carousel navButtonsAlwaysVisible={true}>
          <Box sx={{ height: "50vh", width: "70%", padding: "5em" }}>
            <Image fill alt="Imágen" src={"/diseño.webp"} />
            <Typography
              variant="h5"
              sx={{
                position: "relative",
                fontWeight: 500,
                // lineHeight: 1.4,
                my: "1em",
                left: 0,
                bottom: 0,
              }}
            >
              Diseño de interiores
            </Typography>
          </Box>
          <Box sx={{ height: "50vh", width: "70%", padding: "5em" }}>
            <Image fill alt="Imágen" src={"/diseño.webp"} />
          </Box>
          <Box sx={{ height: "50vh", width: "70%", padding: "5em" }}>
            <Image fill alt="Imágen" src={"/diseño.webp"} />
          </Box>
          <Box sx={{ height: "50vh", width: "70%", padding: "5em" }}>
            <Image fill alt="Imágen" src={"/diseño.webp"} />
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};

export default Remodelacion;
