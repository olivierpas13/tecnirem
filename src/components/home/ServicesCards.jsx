import { Grid } from "@mui/material";
import CardComponent from "../cards/Card";

const ServicesCards = () => {
  return (
    <Grid container spacing={6} sx={{padding: "5em", marginBottom: "3em" }}>
      <Grid item md={4} >
        <CardComponent
          title={"Diseños de Espacios"}
          imageSrc={"/static/home/diseno.webp"}
          buttonText={"Más información"}
          buttonDestination={"/servicios/diseno-de-espacios"}
        />
      </Grid>
      <Grid item md={4} >
        <CardComponent
          title={"Adecuación de Espacios"}
          imageSrc={"/static/home/adecuacion.webp"}
          buttonText={"Más información"}
          buttonDestination={"/servicios/adecuacion-de-espacios"}
        />
      </Grid>
      <Grid item md={4} >
        <CardComponent
          title={
            "Remodelación de oficinas modernas, consultorios y locales comerciales"
          }
          imageSrc={"/static/home/remodelacion.webp"}
          buttonText={"Más información"}
          buttonDestination={"/servicios/remodelacion-de-oficinas"}
        />
      </Grid>
    </Grid>
  );
};

export default ServicesCards;
