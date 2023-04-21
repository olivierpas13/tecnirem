import Image from "next/image";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { mainTheme } from "@/utils/Pallete";
import Cards from "./Cards";

const Services = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        marginTop: "60px",
        height: "100%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          py: "1rem",
          textAlign: "center",
          color: mainTheme.palette.primary.main,
          textTransform: "uppercase",
        }}
      >
        Nuestros servicios
      </Typography>
      <Grid container columns={{ xs: 1, md: 12 }} spacing={2} sx={{display:{xs: "none", md: "flex"}, height: "100%", marginTop: "1%" }}>
        <Grid
          sx={{
            display: {xs: "none", md: "flex"},
            backgroundImage: `url(/diseño.webp)`,
          }}
          item
          xs={1}
          md={7}
        >
        </Grid>
        <Grid
          style={{ padding: "2em" }}
          item
          xs={1}
          md={5}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              my: "1em",
              color: mainTheme.palette.primary.main,
            }}
          >
            Diseño
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, lineHeight: 2.2 }}
          >
            En nuestro servicio de diseño de interiores, trabajamos de la mano
            con nuestros clientes para transformar sus espacios comerciales en
            ambientes atractivos y funcionales. Nos especializamos en el diseño
            de locales e islas comerciales, así como en la adecuación y
            remodelación de oficinas, con el objetivo de crear espacios únicos y
            a medida para cada cliente. Con nuestra amplia experiencia en el
            diseño de interiores, podemos ayudarlo a dar vida a su visión y
            crear un espacio que refleje la personalidad y el carácter de su
            negocio.
          </Typography>
          <Button variant="outlined" style={{ margin: "1.5em" }}>
            Conoce nuestros diseños
          </Button>
        </Grid>
        <Grid style={{ padding: "4em" }} item xs={1} md={7}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              my: "1em",
              color: mainTheme.palette.secondary.dark,
            }}
          >
            Adecuación de espacios
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, lineHeight: 2.5 }}
          >
            Si está buscando renovar o actualizar sus espacios comerciales,
            nuestro servicio de adecuación de espacios es lo que necesita. En
            colaboración con nuestros clientes, creamos soluciones
            personalizadas para optimizar el espacio y mejorar la funcionalidad
            y el flujo de tráfico. Ya sea que necesite actualizar sus
            instalaciones existentes o esté buscando un cambio de imagen
            completo, nuestro equipo de expertos está aquí para ayudarlo.
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            style={{ margin: "1.5em" }}
          >
            Conoce nuestro proceso
          </Button>
        </Grid>
        <Grid
          item
          xs={1}
          md={5}
          sx={{
            backgroundImage: `url(/adecuacion.webp)`,
            display: {xs: "none", md: "flex"},
          }}
        >
        </Grid>
        <Grid
          style={{
            backgroundImage: `url(/remodelacion.webp)`,
            backgroundSize: "cover",
            display: {xs: "none", md: "flex"},
          }}
          item
          xs={1}
          md={7}
        ></Grid>
        <Grid style={{ padding: "2em" }} item xs={1} md={5}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              my: "1em",
              color: mainTheme.palette.primary.main,
            }}
          >
            Remodelación de oficinas y locales comerciales
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, lineHeight: 2 }}
          >
            Ofrecemos servicios especializados de remodelación los cuales son
            perfectos para aquellos que buscan modernizar sus espacios
            comerciales. Ya sea que desee un cambio radical o simplemente una
            actualización sutil, podemos ayudarlo a transformar su espacio para
            que sea más atractivo y funcional. Nos aseguramos de trabajar dentro
            de su presupuesto y plazos para lograr un resultado final que supere
            sus expectativas.
          </Typography>
          <Button variant="outlined" style={{ margin: "1.5em" }}>
            Conoce el proceso
          </Button>
        </Grid>
        <Grid style={{ padding: "4em" }} item xs={1} md={7}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              my: "1em",
              color: mainTheme.palette.secondary.main,
            }}
          >
            Islas comerciales
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, lineHeight: 2.5 }}
          >
            En cuanto al diseño y construcción de islas comerciales, es perfecto
            para aquellos que buscan atraer a más clientes y mejorar sus ventas.
            Creamos soluciones personalizadas para cada cliente, teniendo en
            cuenta las necesidades de su negocio y las tendencias actuales del
            mercado. Nuestro equipo altamente capacitado se asegura de que cada
            isla sea atractiva, funcional y de alta calidad.
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            style={{ margin: "2em" }}
          >
            Agenda tu cita
          </Button>
        </Grid>
        <Grid
          style={{
            backgroundImage: `url(/islas.webp)`,
            backgroundSize: "cover",
            display: {xs: "none", md: "flex"},
          }}
          item
          xs={1}
          md={5}
        ></Grid>
        <Grid
          style={{
            backgroundImage: `url(/pintura.webp)`,
            backgroundSize: "cover",
            display: {xs: "none", md: "flex"},
          }}
          item
          xs={1}
          md={7}
        ></Grid>
        <Grid style={{ padding: "4em" }} item xs={1} md={5}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              my: "1em",
              color: mainTheme.palette.primary.main,
            }}
          >
            Pintura interior y exterior
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, lineHeight: 2 }}
          >
            La pintura es una parte fundamental de cualquier proyecto de
            renovación. En TecniRem contamos con expertos en pintura interior y
            exterior, utilizando los mejores materiales y técnicas para lograr
            acabados perfectos y duraderos.
          </Typography>
          <Button variant="outlined" style={{ margin: "1.5em" }}>
            Cotizar
          </Button>
        </Grid>
        <Grid style={{ padding: "4em" }} item xs={1} md={7}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              my: "1em",
              color: mainTheme.palette.secondary.main,
            }}
          >
            Impermeabilización de terrazas
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, lineHeight: 2 }}
          >
            En TecniRem sabemos que la impermeabilización es esencial para
            mantener tus espacios seguros y en buen estado. Por eso, ofrecemos
            soluciones de impermeabilización de terrazas que te ayudarán a
            prevenir filtraciones y daños causados por el agua, protegiendo tus
            espacios y prolongando su vida útil.
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            style={{ margin: "2.5em" }}
          >
            Conoce más acerca de la impermeabilización
          </Button>
        </Grid>
        <Grid
          style={{
            backgroundImage: `url(/terraza.webp)`,
            backgroundSize: "cover",
            display: {xs: "none", md: "flex"},
          }}
          item
          xs={1}
          md={5}
        ></Grid>
      </Grid>
      <Cards/>
    </Container>
  );
};

export default Services;
