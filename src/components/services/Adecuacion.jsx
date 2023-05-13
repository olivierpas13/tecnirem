import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LeftImageSection from "../global/LeftImageSection";
import RightImageSection from "../global/RightImageSection";

const Adecuacion = () => {
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
            Adecuación de Espacios
          </Typography>
        </Box>
      </Box>
      <Grid
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
      </Grid>
      <Box sx={{ display: "flex", margin: "2em" }}>
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "inline-block",
            padding: "1.5em 9em",
            borderRadius: "0.3em",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "500", textAlign: "center", margin: "0 auto" }}
          >
            Aspectos Importantes
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        columns={{ xs: 1, md: 12 }}
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
          marginTop: "1%",
        }}
      >
        <LeftImageSection
          bigDescription={true}
          title={"Reorganización de los elementos existentes"}
          description={
            "Cambiar la disposición de los muebles, estanterías, superficies de trabajo, equipos y otros elementos para mejorar la funcionalidad del espacio. "
        }
          imageUrl={"/diseño.webp"}
        />
        <RightImageSection
          bigDescription={true}
          title={"Ajuste de las instalaciones eléctricas, de plomería o de climatización"}
          description={
            "Esto implica realizar ajustes en las instalaciones existentes para mejorar su funcionamiento o para adaptarlos a nuevos requisitos. "
        }
          imageUrl={"/diseño.webp"}
        />
        <LeftImageSection
          bigDescription={true}
          title={"Cambio de acabados"}
          description={
            "Esto puede incluir la pintura de paredes, la instalación de nuevos pisos, la sustitución de las puertas o la colocación de paneles acústicos. "
        }
          imageUrl={"/diseño.webp"}
        />
        <RightImageSection
          bigDescription={true}
          title={"Incorporación de nuevos elementos"}
          description={
            "Añadir nuevos elementos al espacio, como muebles, equipos o elementos decorativos que contribuyan a la funcionalidad y a la estética. "
        }
          imageUrl={"/diseño.webp"}
        />
        <LeftImageSection
          bigDescription={true}
          title={"Mejora de la iluminación"}
          description={
            "Esto puede incluir la instalación de nuevas luminarias o nueva distribución de las mismas. También aprovechar la iluminación natural del espacio. "
        }
          imageUrl={"/diseño.webp"}
        />
      </Grid>
    </Box>
  );
};

export default Adecuacion;
