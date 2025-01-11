// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKTypography from "../MKTypography";

// Librería para animaciones
import { motion } from "framer-motion";

import circusImage from "../../assets/images/bg-coworking.jpeg"; // Asegúrate de importar una imagen de circo.

function About() {
  return (
    <Box component="section" py={5} sx={{ backgroundColor: "#261A23", color: "#FFC523" }}>
      {/* Título */}
      <MKTypography variant="h2" align="center" fontWeight="bold" mb={4} sx={{ color: "#FFC523", fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" } }}>
        Acerca de Nosotros
      </MKTypography>

      <Container>
        {/* Contenido: Imagen y texto */}
        <Grid container spacing={4} alignItems="center" direction={{ xs: "column", md: "row" }}>
          {/* Imagen desde un enlace */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} // Controla la visibilidad
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                component="img"
                src={circusImage} // Reemplaza con el enlace de tu imagen.
                alt="Escuela de Circo"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  mb: { xs: 3, md: 0 }, // Añade margen inferior en móviles
                }}
              />
            </motion.div>
          </Grid>

          {/* Texto */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }} // Controla la visibilidad
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MKTypography
                variant="body1"
                fontWeight="medium"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  lineHeight: "1.8",
                  color: "#F2F2F2",
                  textAlign: { xs: "center", md: "left" }, // Centrar el texto en móviles
                }}
              >
                La Troupe Multiespacio, fundada en 2013, es una de las escuelas de
                circo más grandes de Buenos Aires. Ofrecemos una amplia variedad de
                clases que incluyen telas aéreas, trapecio, acrobacia y talleres
                especializados. Además, brindamos la posibilidad de alquilar
                nuestros espacios para eventos como fiestas infantiles y salas de
                ensayo.
              </MKTypography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;


