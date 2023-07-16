import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { FaFacebookF, FaTwitter, FaInstagram, FaRoute, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { mainTheme } from "@/utils/Pallete";


const Footer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: mainTheme.palette.primary.dark,
        color: "#fff",
        padding: "3rem",
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
            <Image
            width={180}
            height={30}
            alt="Logo de TecniRem"
            src={"/static/logos/tecnirem-logo.svg"}
            />
             <Box sx={{width: "5em", height: "1em"}} >
            </Box>
          <Typography variant="body2" sx={{ fontWeight: "light" , marginBottom: "0.8em"}}>
          <FaRoute size={14} style={{marginRight: "0.5em"}} />
            Calle Galte y Av. Rodrigo de Chávez
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "light" }}>
          <FaMapMarkedAlt size={14} style={{marginRight: "0.5em"}} />
            Quito - Ecuador
          </Typography>
        </Grid>
        <Grid item xs={12} md={3.5} sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            CONTACTO
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "light" }}>
          <FaPhoneAlt size={14} style={{marginRight: "0.5em"}} />
            0983912977
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "light" }}>
          <FaPhoneAlt size={14} style={{marginRight: "0.5em"}} />
            0998763485
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "light" }}>
            <FaEnvelope size={14} style={{marginRight: "0.5em"}} />
            tecnirem@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={3.5} sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            SÍGUENOS
          </Typography>
          <Grid container justifyContent="center" sx={{ mt: "1rem" }}>
            <a
              href="https://www.facebook.com/profile.php?id=100090380890906&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              style={{ color: "#fff", marginRight: "1rem" }}
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com/tecnirem?t=S0r1q6uUxhlukS5zRX2Aow&s=09"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              style={{ color: "#fff", marginRight: "1rem" }}
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/tecnirem?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{ color: "#fff" }}
            >
              <FaInstagram size={24} />
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} sx={{ textAlign: "center", fontFamily: "monospace"}}>
          <p style={{fontWeight: "bold", fontSize: "1.15em"}}>Pagina Amiga</p>
            <a style={{color: "white", textDecoration: "none"}} href="http://www.doplim.ec" title="Doplim Clasificados Gratis" target="_blank">Doplim Clasificados Gratis</a><br />
            <a style={{color: "white", textDecoration: "none" }} href="http://www.doplim.ec/post-ad.html" title="Publicar Aviso Gratis Ecuador" target="_blank">Publicar Aviso Gratis is Ecuador</a><br />
            <a style={{color: "white", textDecoration: "none" }} href="http://www.doplim.ec/inmuebles-y-propiedades-r-4" title="Clasificados de Inmuebles Ecuador" target="_blank">Clasificados de Inmuebles Ecuador</a>
          </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
