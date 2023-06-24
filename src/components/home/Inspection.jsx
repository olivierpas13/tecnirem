import Grid from "@mui/material/Grid";
import wpLink from "@/utils/wpLink";
import Container from "@mui/material/Container";

import CardComponent from "../cards/Card";
import LeftImageSection from "../global/LeftImageSection";

const Inspection = () => {

  const inspectionInfo ={
    title: "Inspección gratuita",
    description: "¿Listo para dar el primer paso en tu proyecto? ¡Comienza con una inspección gratuita y sin compromiso! Nuestro equipo trabajará contigo para asegurarse de que tengas la mejor solución a tus necesidades.",
    buttonText: "Agenda tu cita",
    imageSrc: "/static/home/inspeccion.webp",
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
  href={wpLink}
/>
  </Grid>
</Container>

  );
};

export default Inspection;
