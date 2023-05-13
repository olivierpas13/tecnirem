import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import LeftImageSection from "@/components/global/LeftImageSection";
import { mainTheme } from "@/utils/Pallete";

const Adecuacion = () => {
  return (
    <MainLayout>
      <Container
        maxWidth={false}
        sx={{
          marginTop: "60px",
          height: "100%",
          padding: "2em",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "800",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Adecuación de espacios
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "800",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          A continuación, algunos trabajos que engloba la adecuación de
          espacios:
        </Typography>

        <Grid container columns={{ xs: 1, md: 12 }} spacing={2} sx={{ display: { xs: "none", md: "flex" }, height: "100%", marginTop: "1%" }}>
        <LeftImageSection
        title={'Reorganización de los elementos existentes'}
        description={'Cambiar la disposición de los muebles, estanterías, superficies de trabajo, equipos y otros elementos para mejorar la funcionalidad del espacio. '}
        imageUrl={"/adecuacion.webp"}
        />

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
            display: { xs: "none", md: "flex" },
          }}
          item
          xs={1}
          md={5}
        ></Grid>
        <Grid
          style={{
            backgroundImage: `url(/pintura.webp)`,
            backgroundSize: "cover",
            display: { xs: "none", md: "flex" },
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
      </Grid>
      </Container>
    </MainLayout>
  );
};

export default Adecuacion;
