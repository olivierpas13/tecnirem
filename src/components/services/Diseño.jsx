import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";

import LeftCarouselSection from "../global/LeftCarouselSection";
import LeftImageSection from "../global/LeftImageSection";
import RightImageSection from "../global/RightImageSection";
import { mainTheme } from "@/utils/Pallete";

const Diseño = () => {
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "inline-block",
            width: "100vw",
            padding: "1.5em 20em",
            borderRadius: "1em",
            margin: "0.8em auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              textAlign: "center",
              margin: "0 auto",
              letterSpacing: "0.1em",
            }}
          >
            DISEÑO DE ESPACIOS
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
        <LeftCarouselSection
          bigDescription={true}
          description={
            "Trabajamos de la mano con nuestros clientes para transformar sus espacios comerciales en ambientes atractivos y funcionales. Nos especializamos en el diseño de oficinas modernas, locales e islas comerciales, con el objetivo de crear espacios únicos y a medida para cada cliente. Con nuestra amplia experiencia en el diseño de interiores, podemos ayudarlo a dar vida a su visión y crear un espacio que refleje la personalidad y el carácter de su negocio."
          }
          imageSrcs={[
            "/static/services/diseño/tec5.jpg",
            "/static/services/diseño/tec6.jpg",
          ]}
        />
      </Grid>
      <Box sx={{ display: "flex", marginY: "3em" }}>
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "inline-block",
            width: "100vw",
            padding: "1.5em 20em",
            borderRadius: "0.3em",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              textAlign: "center",
              letterSpacing: "0.3rem",
              margin: "0 auto",
            }}
          >
            ¿Cómo lo hacemos?
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
          title={"1. Análisis del espacio existente"}
          description={
            "Esto implica evaluar las características del espacio, incluyendo la distribución, la iluminación, los materiales de construcción y la altura del techo. "
          }
          imageUrl={"/static/services/diseño/tec2.jpg"}
        />
        <LeftImageSection
          bigDescription={true}
          title={"2. Identificación de las necesidades"}
          description={
            "Se debe analizar los requerimientos del usuario o del propietario del espacio, incluyendo las funciones que el espacio debe cumplir, el estilo deseado y cualquier requisito especial."
          }
          imageUrl={"/static/services/diseño/tec3.jpg"}
        />
        <RightImageSection
          bigDescription={true}
          title={"3. Creación de un plan"}
          description={
            "En función del análisis del espacio existente y de las necesidades identificadas, se crea un plan que incluye el diseño del espacio, la selección de materiales, acabados y mobiliario, y un presupuesto estimado."
          }
          imageUrl={"/static/services/diseño/tec4.jpg"}
        />
        <LeftImageSection
          bigDescription={true}
          title={"4. Representación gráfica"}
          description={
            "Se debe analizar los requerimientos del usuario o del propietario del espacio, incluyendo las funciones que el espacio debe cumplir, el estilo deseado y cualquier requisito especial."
          }
          imageUrl={"/static/services/diseño/tec5.jpg"}
        />
        <RightImageSection
          bigDescription={true}
          title={"5. Revisión y aprobación"}
          description={
            "En función del análisis del espacio existente y de las necesidades identificadas, se crea un plan que incluye el diseño del espacio, la selección de materiales, acabados y mobiliario, y un presupuesto estimado."
          }
          imageUrl={"/static/services/diseño/tec6.jpg"}
        />
              <Box sx={{
                margin: "1em auto",
                backgroundColor: mainTheme.palette.primary.main,
                borderRadius: "5em",
                padding: "0.6em",
                paddingX: "10em",   
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
                }}>
                  <Typography sx={{fontWeight: 600,letterSpacing: "0.1em", color: "#fff", padding: "1em"}} variant="h5">
                  Nos ajustamos a tu presupuesto       

                  </Typography>
        <Fab variant="extended" color="white" sx={{padding: "1em 4em"}}>
                
        Contáctanos
      </Fab>
      </Box>
      </Grid>

    </Box>
  );
};

export default Diseño;
