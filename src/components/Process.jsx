import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Process() {
  return (
    <Container sx={{ marginTop: "48px", marginBottom: "48px" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ textAlign: "center",  marginBottom: "24px" }}
      >
        Nuestro Proceso
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              height="240"
              image="/card-image-1.jpg"
              alt="Card Image 1"
            />
            <CardContent sx={{ padding: "24px" }}>
              <Typography variant="h3" component="h3" gutterBottom>
                1
              </Typography>
              <Typography variant="h5" component="h3" gutterBottom>
                Inspección gratuita
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comenzamos con una inspección gratuita del espacio que necesitas
                remodelar o adecuar. Nos reuniremos contigo para entender tus
                necesidades y objetivos, y te ofreceremos soluciones
                personalizadas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              height="240"
              image="/card-image-2.jpg"
              alt="Card Image 2"
            />
            <CardContent sx={{ padding: "24px" }}>
              <Typography variant="h3" component="h3" gutterBottom>
                2
              </Typography>
              <Typography variant="h5" component="h3" gutterBottom>
                Propuestas de diseño y planificación
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Una vez que entendamos tus necesidades y objetivos, nuestro
                equipo de expertos en diseño y construcción comenzará a trabajar
                en propuestas de diseño y planificación que cumplan con tus
                expectativas. Trabajaremos contigo en cada etapa del proceso
                para asegurarnos de que estés satisfecho con los resultados.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              height="240"
              image="/card-image-3.jpg"
              alt="Card Image 3"
            />
            <CardContent sx={{ padding: "24px" }}>
              <Typography variant="h3" component="h3" gutterBottom>
                3
              </Typography>
              <Typography variant="h5" component="h3" gutterBottom>
                Evaluación del presupuesto
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Una vez que hayamos acordado las propuestas de diseño y
                planificación, evaluaremos el presupuesto para asegurarnos de
                que esté dentro de tus posibilidades. Te presentaremos un
                presupuesto detallado y transparente para que sepas exactamente
                en qué estás invirtiendo.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardMedia
              component="img"
              height="240"
              image="/card-image-4.jpg"
              alt="Card Image 4"
            />
            <CardContent sx={{ padding: "24px" }}>
              <Typography variant="h3" component="h3" gutterBottom>
                4
              </Typography>
              <Typography variant="h5" component="h3" gutterBottom>
                Realización
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Una vez que hayamos acordado el diseño, planificación y
                presupuesto, comenzaremos la realización de la obra. Nos
                aseguraremos de que la obra se realice de manera profesional y
                oportuna, cumpliendo con los estándares de calidad y seguridad.
                Te mantendremos informado en todo momento sobre el progreso de
                la obra y te garantizamos que estarás satisfecho con los
                resultados finales.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
