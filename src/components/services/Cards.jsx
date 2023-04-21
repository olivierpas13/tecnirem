import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { mainTheme } from "@/utils/Pallete";

export default function Cards() {
  const servicesData = [
    {
      title: "Diseño",
      description:
        "En nuestro servicio de diseño de interiores, trabajamos de la mano con nuestros clientes para transformar sus espacios comerciales en ambientes atractivos y funcionales. Nos especializamos en el diseño de locales e islas comerciales, así como en la adecuación y remodelación de oficinas, con el objetivo de crear espacios únicos y a medida para cada cliente. Con nuestra amplia experiencia en el diseño de interiores, podemos ayudarlo a dar vida a su visión y crear un espacio que refleje la personalidad y el carácter de su negocio.",
      buttonText: "Conoce nuestros diseños",
      imageSource: "/diseño.webp",
    },
    {
      title: "Adecuación de espacios",
      description:
        "Si está buscando renovar o actualizar sus espacios comerciales, nuestro servicio de adecuación de espacios es lo que necesita. En colaboración con nuestros clientes, creamos soluciones personalizadas para optimizar el espacio y mejorar la funcionalidad y el flujo de tráfico. Ya sea que necesite actualizar sus instalaciones existentes o esté buscando un cambio de imagen completo, nuestro equipo de expertos está aquí para ayudarlo.",
      buttonText: "Conoce nuestro proceso",
      imageSource: "/adecuacion.webp",
    },
    {
      title: "Remodelación de oficinas y locales comerciales",
      description:
        "Ofrecemos servicios especializados de remodelación los cuales son perfectos para aquellos que buscan modernizar sus espacios comerciales. Ya sea que desee un cambio radical o simplemente una actualización sutil, podemos ayudarlo a transformar su espacio para que sea más atractivo y funcional. Nos aseguramos de trabajar dentro de su presupuesto y plazos para lograr un resultado final que supere sus expectativas.",
      buttonText: "Conoce el proceso",
      imageSource: "/remodelacion.webp",
    },
    {
      title: "Islas comerciales",
      description:
        "En cuanto al diseño y construcción de islas comerciales, es perfecto para aquellos que buscan atraer a más clientes y mejorar sus ventas. Creamos soluciones personalizadas para cada cliente, teniendo en cuenta las necesidades de su negocio y las tendencias actuales del mercado. Nuestro equipo altamente capacitado se asegura de que cada isla sea atractiva, funcional y de alta calidad.",
      buttonText: "Agenda tu cita",
      imageSource: "/islas.webp",
    },
    {
      title: "Pintura interior y exterior",
      description:
        "La pintura es una parte fundamental de cualquier proyecto de renovación. En TecniRem contamos con expertos en pintura interior y exterior, utilizando los mejores materiales y técnicas para lograr acabados perfectos y duraderos.",
      buttonText: "Cotizar",
      imageSource: "/pintura.webp",
    },
    {
      title: "Impermeabilización de terrazas",
      description:
        "En TecniRem sabemos que la impermeabilización es esencial para mantener tus espacios seguros y en buen estado. Por eso, ofrecemos soluciones de impermeabilización de terrazas que te ayudarán a prevenir filtraciones y daños causados por el agua, protegiendo tus espacios y prolongando su vida útil.",
      buttonText: "Conoce más acerca de la impermeabilización",
      imageSource: "/terraza.webp",
    },
  ];

  return (
    <Grid container spacing={{xs: 5, sm: 4}} columns={{xs: 1, sm: 2}} sx={{display:{xs: "flex", md: "none"}}} >
      {servicesData.map((service) => {
        return (
          <Grid item key={service.title} xs={1} md={1} sx={{margin: "0 auto"}}>
            <Card>
              <CardMedia
                sx={{ height: 300 }}
                image={service.imageSource}
                title={service.title}
              />
              <CardContent>
              <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1,
              my: "1em",
              color: mainTheme.palette.primary.main,
            }}
          >                  {service.title}
                </Typography>
                <Typography
            variant="subtitle2"
            sx={{ fontWeight: 300, lineHeight: 2 }}
          >                  {service.description}
                </Typography>
              </CardContent>
              <CardActions sx={{display: "flex", justifyContent: "center", margin: "1em"}}>
              <Button
              size="large"
              color="secondary"
              sx={{
                color: mainTheme.palette.secondary.dark,
                '&:hover': {
                  backgroundColor: mainTheme.palette.secondary.main,
                },
              }}            
              variant="outlined"
                style={{ margin: "1.5em" }}
          >{service.buttonText}</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
