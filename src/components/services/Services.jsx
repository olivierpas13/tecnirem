import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { mainTheme } from "@/utils/Pallete";
import Cards from "./Cards";
import LeftCarouselSection from "../global/LeftCarouselSection";
import RightCarouselSection from "../global/RightCarouselSection";

const Services = () => {

  const sections = [
    {
      title: "Diseño de oficinas modernas, consultorios y locales comerciales",
      description: "En nuestro servicio de diseño de interiores, trabajamos de la mano con nuestros clientes para transformar sus espacios comerciales en ambientes atractivos y funcionales. Nos especializamos en el diseño de locales e islas comerciales, así como en la adecuación y remodelación de oficinas, con el objetivo de crear espacios únicos y a medida para cada cliente. Con nuestra amplia experiencia en el diseño de interiores, podemos ayudarlo a dar vida a su visión y crear un espacio que refleje la personalidad y el carácter de su negocio.",
      imageSrcs: [
        "/services/diseño/tec1.jpg",
        "/services/diseño/tec31.jpg"
      ],
      buttonText: "Conoce nuestros diseños",
    },
    {
      title: "Adecuación de espacios",
      description: "Si está buscando realizar cambios menores y ajustes en un espacio existente, para adaptarlo a nuevas necesidades o funciones, nuestro servicio de adecuación de espacio es lo que necesita. Este proceso es menos complejo y menos costoso que una remodelación completa, ya que no implica grandes cambios estructurales o de diseño.",
      imageSrcs: [
        "/services/adecuacion/tec7.jpg",
        "/services/adecuacion/tec32.jpg"
      ],
      buttonText: "Conoce nuestro proceso",
    },
    {
      title: "Remodelación de oficinas modernas, consultorios y locales comerciales",
      description: "Ofrecemos servicios especializados de remodelación los cuales son perfectos para aquellos que buscan modernizar sus espacios comerciales. Ya sea que desee un cambio radical o simplemente una actualización sutil, podemos ayudarlo a transformar su espacio para que sea más atractivo y funcional. Nos aseguramos de trabajar dentro de su presupuesto y plazos para lograr un resultado final que supere sus expectativas.",
      imageSrcs: [
        "/services/remodelacion/tec13.jpg",
        "/services/remodelacion/tec28.webp"
      ],
      buttonText: "Conoce el proceso",
    },
  ];
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
      <Grid container columns={{ xs: 1, md: 12 }} sx={{ display: { xs: "none", md: "flex" },justifyContent: "space-between", height: "100%", marginTop: "1%", padding: "2.5em" }}>
      <LeftCarouselSection {...sections[0]} bigDescription/>
      <RightCarouselSection {...sections[1]} bigDescription />
      <LeftCarouselSection {...sections[2]} bigDescription/>

      </Grid>
      <Cards />
    </Container>
  );
};

export default Services;
