import { Grid } from "@mui/material";
import CardComponent from "../cards/Card";

const ServicesCards = () => {
  return (
    <Grid container spacing={6} md={12} sx={{padding: "5em", marginBottom: "3em" }}>
      <Grid item md={4} >
        <CardComponent
          title={"Diseños de Interiores"}
          imageSrc={"/di1.jpg"}
          buttonText={"Más información"}
          buttonDestination={"/servicios/diseño"}
        />
      </Grid>
      <Grid item md={4} >
        <CardComponent
          title={"Adecuación de Espacios"}
          imageSrc={"/ad1.jpg"}
          buttonText={"Más información"}
        />
      </Grid>
      <Grid item md={4} >
        <CardComponent
          title={
            "Remodelación de oficinas modernas, consultorios y locales comerciales"
          }
          imageSrc={"/rem1.jpg"}
          buttonText={"Más información"}
        />
      </Grid>
    </Grid>
  );
};

export default ServicesCards;
