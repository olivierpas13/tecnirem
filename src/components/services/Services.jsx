import Link from "next/link";

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
      <Grid container columns={{ xs: 1, md: 12 }} spacing={2} sx={{ display: { xs: "none", md: "flex" }, height: "100%", marginTop: "1%" }}>
        <Grid
          sx={{
            display: { xs: "none", md: "flex" },
            backgroundImage: `url(/services/tec1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
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
              lineHeight: 1.2,
              my: "1em",
              color: mainTheme.palette.primary.main,
            }}
          >
            Diseño de oficinas modernas, consultorios y locales comerciales
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
            Si está buscando realizar cambios menores y ajustes en un espacio existente, para adaptarlo a nuevas necesidades o funciones, nuestro servicio de adecuación de espacio es lo que necesita. Este proceso es menos complejo y menos costoso que una remodelación completa, ya que no implica grandes cambios estructurales o de diseño.
          </Typography>
          <Link
          href={"/servicios/adecuacion-de-espacios"}
          >
          <Button
            color="secondary"
            variant="outlined"
            style={{ margin: "1.5em" }}
            >
            Conoce nuestro proceso
          </Button>
            </Link>
        </Grid>
        <Grid
          item
          xs={1}
          md={5}
          sx={{
            backgroundImage: `url(/adecuacion.webp)`,
            display: { xs: "none", md: "flex" },
          }}
        >
        </Grid>
        <Grid
          style={{
            backgroundImage: `url(/remodelacion.webp)`,
            backgroundSize: "cover",
            display: { xs: "none", md: "flex" },
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
              lineHeight: 1.3,
              my: "1em",
              color: mainTheme.palette.primary.main,
            }}
          >
            Remodelación de oficinas modernas, consultorios y locales comerciales
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
      </Grid>
      <Cards />
    </Container>
  );
};

export default Services;
