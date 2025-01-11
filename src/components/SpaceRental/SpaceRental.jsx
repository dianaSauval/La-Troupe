// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKTypography from "../MKTypography";

// Librería para animaciones
import { motion } from "framer-motion";

import circusImage from "../../assets/images/bg-coworking.jpeg"; // Imagen de circo

function SpaceRental() {
  return (
    <Box component="section" py={5} sx={{ backgroundColor: "#261A23", color: "#FFC523" }}>
      {/* Título */}
      <MKTypography variant="h2" align="center" fontWeight="bold" mb={4} sx={{ color: "#FFC523" }}>
        Alquiler de Salas
      </MKTypography>

      <Container>
        {/* Contenido: Imagen y texto */}
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Sala 1 */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                component="img"
                src={circusImage}
                alt="Sala de Ensayo 1"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
              <MKTypography variant="h5" align="center" fontWeight="bold" sx={{ mt: 2, color: "#FFC523" }}>
                Sala 1: Espacio Creativo
              </MKTypography>
              <MKTypography variant="body1" sx={{ color: "#F2F2F2" }}>
                Sala equipada con equipo de sonido, iluminación profesional y espacio para 10 personas. Ideal para proyectos innovadores.
              </MKTypography>
            </motion.div>
          </Grid>

          {/* Sala 2 */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box
                component="img"
                src={circusImage}
                alt="Sala de Ensayo 2"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
              <MKTypography variant="h5" align="center" fontWeight="bold" sx={{ mt: 2, color: "#FFC523" }}>
                Sala 2: Espacio Versátil
              </MKTypography>
              <MKTypography variant="body1" sx={{ color: "#F2F2F2" }}>
                Un espacio amplio y flexible, ideal para ensayos de circo, danza y teatro. Equipado con espejos, barra y equipo de sonido.
              </MKTypography>
            </motion.div>
          </Grid>

          {/* Sala 3 */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box
                component="img"
                src={circusImage}
                alt="Sala de Ensayo 3"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              />
              <MKTypography variant="h5" align="center" fontWeight="bold" sx={{ mt: 2, color: "#FFC523" }}>
                Sala 3: Espacio de Alta Energía
              </MKTypography>
              <MKTypography variant="body1" sx={{ color: "#F2F2F2" }}>
                Un espacio vibrante, perfecto para grupos grandes, talleres y entrenamientos intensivos. Equipado con todo lo necesario para el circo.
              </MKTypography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SpaceRental;
