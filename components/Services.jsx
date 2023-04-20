import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Process from "./Process";

const Services = () => {
  return (
    <Container maxWidth={false} sx={{ paddingTop: "64px", height: "100vh" }}>
            <Typography variant="h4" sx={{ fontWeight: 700,py: "1rem" }}>
            Nuestros servicios
          </Typography>
      <Grid container spacing={2} sx={{ height: "90vh", paddingTop: "40px" }}>
        <Grid
          style={{
            backgroundImage: `url(/bg-about-dark.jpg)`,
            backgroundSize: "cover",
          }}
          item
          xs={7}
        >
          <Box sx={{ width: "10em", height: "1em" }}></Box>
        </Grid>
        <Grid style={{ padding: "2em"}} item xs={4}>
          <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: 1, my: "1em" }}>
            Adecuación y remodelación de locales comerciales y oficinas
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 300, lineHeight: 2 }}>
            ¿Necesitas renovar tu local comercial u oficina? En Tecnirem,
            contamos con un equipo de expertos en diseño y construcción que te
            ayudará a crear un espacio funcional y atractivo que se adapte a tus
            necesidades y presupuesto. Nos enfocamos en mejorar la productividad
            y la imagen de tu negocio, ofreciendo soluciones personalizadas y
            eficientes. Trabajamos contigo en cada etapa del proyecto para
            asegurarnos de que el resultado final cumpla con tus expectativas.
            ¡Confía en nosotros para transformar tu espacio en algo que
            realmente refleje la identidad de tu negocio!
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ height: "90vh", paddingTop: "40px" }}>
        <Grid
          style={{
            backgroundImage: `url(/bg-about-dark.jpg)`,
            backgroundSize: "cover",
          }}
          item
          xs={4}
        >
          <Box sx={{ width: "10em", height: "1em" }}></Box>
        </Grid>
        <Grid style={{ padding: "2em"}} item xs={7}>
          <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: 1, my: "1em" }}>
            Adecuación y remodelación de locales comerciales y oficinas
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 300, lineHeight: 2 }}>
            ¿Necesitas renovar tu local comercial u oficina? En Tecnirem,
            contamos con un equipo de expertos en diseño y construcción que te
            ayudará a crear un espacio funcional y atractivo que se adapte a tus
            necesidades y presupuesto. Nos enfocamos en mejorar la productividad
            y la imagen de tu negocio, ofreciendo soluciones personalizadas y
            eficientes. Trabajamos contigo en cada etapa del proyecto para
            asegurarnos de que el resultado final cumpla con tus expectativas.
            ¡Confía en nosotros para transformar tu espacio en algo que
            realmente refleje la identidad de tu negocio!
          </Typography>
        </Grid>
      </Grid>
      <Process/>
    </Container>
  );
};

export default Services;
