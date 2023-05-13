import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { mainTheme } from "@/utils/Pallete";
import CardComponent from "../cards/Card";
import LeftImageSection from "../global/LeftImageSection";

const Inspection = () => {

  const inspectionInfo ={
    title: "Inspección gratuita",
    description: "¿Listo para dar el primer paso en tu proyecto? ¡Comienza con una inspección gratuita y sin compromiso! Nuestro equipo trabajará contigo para asegurarse de que tengas la mejor solución a tus necesidades.",
    buttonText: "Agenda tu cita",
    imageSrc: "/inspeccion1.jpg",
  }

  return (
<Container maxWidth={false} >
<CardComponent
  smallDevice
  title={inspectionInfo.title}
  description={inspectionInfo.description}
  buttonText={inspectionInfo.buttonText}
  imageSrc={inspectionInfo.imageSrc}
/>
<Grid container columns={{ xs: 1, md: 12 }} spacing={2} sx={{ display: { xs: "none", md: "flex" }, height: "100%", marginTop: "1%" }}>


<LeftImageSection
  title={inspectionInfo.title}
  description={inspectionInfo.description}
  buttontext={inspectionInfo.buttonText}
  imageUrl={inspectionInfo.imageSrc}
  bigDescription={true}
  buttonColor={"secondary"}
/>
  </Grid>
{/* <Grid container spacing={2} sx={{display: {xs: "none", md: "flex"}, height: "90vh", paddingTop: "20px" }}>
      <Grid
        style={{
          backgroundImage: `url(${inspectionInfo.imageSrc})`,
          backgroundSize: "cover",
        }}
        item
        xs={6}
      ></Grid>
      <Grid style={{ padding: "1em", marginLeft: "2em" }} item xs={4}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, lineHeight: 1, my: "1em" }}
        >{inspectionInfo.title.split(" ")[0]}
           <span style={{color: mainTheme.palette.primary.main}}> {inspectionInfo.title.split(" ")[1]}</span>
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: "1.3em", fontWeight: 300, lineHeight: 2 }}>
          {inspectionInfo.description}
        </Typography>
        <Button size="large" variant="contained" color="secondary" style={{margin: "1em", marginTop: "3em"}} >
            <span style={{color: mainTheme.palette.white.main}}>
          {inspectionInfo.buttonText}
            </span>
        </Button>
      </Grid>
    </Grid> */}
</Container>

  );
};

export default Inspection;
