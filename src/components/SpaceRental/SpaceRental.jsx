import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MKTypography from "../MKTypography";
import { motion } from "framer-motion";
import salas from "../../assets/data/salasData";
import ModalComponent from "../ModalComponent/ModalComponent";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

function SpaceRental() {
  const [selectedSala, setSelectedSala] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (sala) => {
    setSelectedSala(sala);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSala(null);
  };

  return (
    <Box id="alquiler" component="section" py={5} sx={{ backgroundColor: "#261A23", color: "#FFC523" }}>
      <MKTypography variant="h2" align="center" fontWeight="bold" mb={4} sx={{ color: "#FFC523" }}>
        Alquiler de Salas
      </MKTypography>

      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {salas.map((sala) => (
            <Grid item xs={12} md={4} key={sala.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 * sala.id }}
              >
                <Box
                  component="img"
                  src={sala.images[0]}
                  alt={sala.name}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                    objectFit: "cover",
                  }}
                />
                <MKTypography variant="h5" align="center" fontWeight="bold" sx={{ mt: 2, color: "#FFC523" }}>
                  {sala.name}
                </MKTypography>
                <MKTypography variant="body1" sx={{ color: "#F2F2F2", fontSize: { xs: "0.9rem", sm: "1rem" } }} mb={2}>
                  {sala.description}
                </MKTypography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#FFC523", color: "#261A23", ":hover": { backgroundColor: "#FFD54F" }, ":focus": { backgroundColor: "#FFC523 !important", outline: "none" } }}
                  onClick={() => handleOpen(sala)}
                >
                  Ver más
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {selectedSala && (
        <ModalComponent open={open} onClose={handleClose} title={selectedSala.name}>
          <ImageCarousel images={selectedSala.images} />
        </ModalComponent>
      )}
    </Box>
  );
}

export default SpaceRental;


