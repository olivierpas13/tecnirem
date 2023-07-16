import { useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const MapContainer = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  paddingTop: "56.25%",
  marginTop: "24px",
  "& iframe": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    border: "none",
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    interest: "",
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formattedMessage = `Hola, estoy interesado en sus servicios.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nTipo de proyecto: ${formData.projectType}\nInterés: ${formData.interest}\nMensaje: ${formData.message}`;

    const whatsappLink = `https://api.whatsapp.com/send/?phone=593983912977&text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.location.href = whatsappLink;
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ margin: "48px", marginTop: "85px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" sx={{ marginBottom: "24px" }}>
            Contáctanos
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  label="Nombre"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  type="email"
                  label="Correo electrónico"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Teléfono"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="project-type-label">
                    Tipo de proyecto
                  </InputLabel>
                  <Select
                    labelId="project-type-label"
                    id="project-type-select"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFormChange}
                    label="Tipo de proyecto"
                  >
                    <MenuItem value="local_comercial">Local comercial</MenuItem>
                    <MenuItem value="oficina">Oficina</MenuItem>
                    <MenuItem value="otro">Otro</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel id="interest-label">Interés</InputLabel>
                  <Select
                    labelId="interest-label"
                    id="interest-select"
                    name="interest"
                    value={formData.interest}
                    onChange={handleFormChange}
                    label="Interés"
                  >
                    <MenuItem value="diseno_interiores">
                      Diseño de interiores
                    </MenuItem>
                    <MenuItem value="remodelacion">Remodelación</MenuItem>
                    <MenuItem value="mantenimiento">Mantenimiento</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  label="Mensaje"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" sx={{ marginBottom: "24px" }}>
            Encuéntranos
          </Typography>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.88194766243!2d-78.49130596314954!3d-0.21862139577334557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b2d30f1a4a53f9%3A0x5eeaae4eb8ce4b2a!2sCalle%20Galte%20S9-78%2C%20Quito%20170501!5e0!3m2!1sen!2sec!4v1650456791703!5m2!1sen!2sec"
              title="Nuestra ubicación"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </MapContainer>
          <Typography variant="h6" component="h3" sx={{ marginTop: "24px" }}>
            Redes sociales
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" component="p" sx={{ marginTop: "8px" }}>
              Síguenos en nuestras redes sociales:
            </Typography>
            <Box sx={{ display: "flex", marginTop: "16px" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100090380890906&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare
                  size="2.2em"
                  color="black"
                  style={{
                    marginRight: "1em",
                  }}
                />
              </a>
              <a
                href="https://instagram.com/tecnirem?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare
                  size="2.2em"
                  color="black"
                  style={{
                    marginRight: "1em",
                  }}
                />
              </a>
              <a
                href="https://twitter.com/tecnirem?t=S0r1q6uUxhlukS5zRX2Aow&s=09"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                style={{ color: "#fff", marginRight: "1rem" }}
              >
                <FaTwitterSquare
                  size="2.2em"
                  color="black"
                  style={{
                    marginRight: "1em",
                  }}
                />
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
