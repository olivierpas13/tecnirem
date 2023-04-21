import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { mainTheme } from "@/utils/Pallete";

const Inspection = () => {
  return (
    <Grid container spacing={2} sx={{ height: "90vh", paddingTop: "20px" }}>
      <Grid
        style={{
          backgroundImage: `url(/bg-about-dark.jpg)`,
          backgroundSize: "cover",
        }}
        item
        xs={6}
      ></Grid>
      <Grid style={{ padding: "1em", marginLeft: "2em" }} item xs={4}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, lineHeight: 1, my: "1em" }}
        >
          Inspección <span style={{color: mainTheme.palette.primary.main}}>gratuita</span>
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: "1.3em", fontWeight: 300, lineHeight: 2 }}>
          ¿Listo para dar el primer paso en tu proyecto? ¡Comienza con una
          inspección <span style={{color: mainTheme.palette.primary.main}}>gratuita</span> y sin compromiso! Nuestro equipo trabajará contigo
          para asegurarse de que tengas la mejor solución a tus necesidades.
        </Typography>
        <Button size="large" variant="contained" color="secondary" style={{margin: "1em", marginTop: "3em"}} >
            <span style={{color: mainTheme.palette.white.main}}>
            Agenda tu cita
            </span>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Inspection;
