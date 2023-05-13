import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LeftImageSection from "../global/LeftImageSection";
import RightImageSection from "../global/RightImageSection";

const Diseño = () => {
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "inline-block",
            padding: "1.5em",
            borderRadius: "0.3em",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "500", textAlign: "center", margin: "0 auto" }}
          >
            Diseño de Oficinas Modernas, Consultorios y Locales Comerciales
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        columns={{ xs: 1, md: 12 }}
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
          marginTop: "1%",
        }}
      >
        <RightImageSection
          bigDescription={true}
          title={"Diseño de interiores"}
          description={
            "Trabajamos de la mano con nuestros clientes para transformar sus espacios comerciales en ambientes atractivos y funcionales. Nos especializamos en el diseño de oficinas modernas, locales e islas comerciales, con el objetivo de crear espacios únicos y a medida para cada cliente. Con nuestra amplia experiencia en el diseño de interiores, podemos ayudarlo a dar vida a su visión y crear un espacio que refleje la personalidad y el carácter de su negocio."
          }
          imageUrl={"/diseño.webp"}
        />
      </Grid>
      <Box sx={{ display: "flex", margin: "2em" }}>
        <Box
          sx={{
            backgroundColor: "#eee",
            display: "inline-block",
            padding: "1.5em 9em",
            borderRadius: "0.3em",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "500", textAlign: "center", margin: "0 auto" }}
          >
            Aspectos Importantes
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        columns={{ xs: 1, md: 12 }}
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
          height: "100%",
          marginTop: "1%",
        }}
      >
        <LeftImageSection
          bigDescription={true}
          title={"Análisis del espacio existente"}
          description={
            "Esto implica evaluar las características del espacio, incluyendo la distribución, la iluminación, los materiales de construcción y la altura del techo. "
          }
          imageUrl={"/diseño.webp"}
        />
        <RightImageSection
          bigDescription={true}
          title={"Identificación de las necesidades"}
          description={
            "Se debe analizar los requerimientos del usuario o del propietario del espacio, incluyendo las funciones que el espacio debe cumplir, el estilo deseado y cualquier requisito especial."
          }
          imageUrl={"/diseño.webp"}
        />
        <LeftImageSection
          bigDescription={true}
          title={"Creación de un plan"}
          description={
            "En función del análisis del espacio existente y de las necesidades identificadas, se crea un plan que incluye el diseño del espacio, la selección de materiales, acabados y mobiliario, y un presupuesto estimado."
          }
          imageUrl={"/diseño.webp"}
        />
        <RightImageSection
          bigDescription={true}
          title={"Identificación de las necesidades"}
          description={
            "Se debe analizar los requerimientos del usuario o del propietario del espacio, incluyendo las funciones que el espacio debe cumplir, el estilo deseado y cualquier requisito especial."
          }
          imageUrl={"/diseño.webp"}
        />
        <LeftImageSection
          bigDescription={true}
          title={"Representación gráfica"}
          description={
            "El diseño puede incluir representaciones gráficas, como planos en 2D o 3D, para mostrar cómo se verá el espacio una vez terminado."
          }
          imageUrl={"/diseño.webp"}
        />
        <RightImageSection
          bigDescription={true}
          title={"Revisión y aprobación"}
          description={
            "Una vez que se ha creado el diseño, se presenta al propietario o al usuario para su revisión y aprobación. Si se necesitan cambios, se realizan ajustes y se vuelve a presentar el diseño para su aprobación final."
          }
          imageUrl={"/diseño.webp"}
        />
      </Grid>
    </Box>
  );
};

export default Diseño;
