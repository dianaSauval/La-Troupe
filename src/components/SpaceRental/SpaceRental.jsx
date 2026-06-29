import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import MKTypography from "../MKTypography";
import { motion } from "framer-motion";
import salas from "../../assets/data/salasData";
import ModalComponent from "../ModalComponent/ModalComponent";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

function SpaceRental() {
  const [selectedSala, setSelectedSala] = useState(null);
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleOpen = (sala) => {
    setSelectedSala(sala);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSala(null);
  };

  return (
    <Box
      id="rental"
      component="section"
      py={{ xs: 7, md: 9 }}
      sx={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(255,239,24,0.08), transparent 28%), linear-gradient(135deg, var(--color-dark) 0%, var(--color-slate) 48%, var(--color-black) 100%)",
        color: "var(--color-text)",
        overflow: "hidden",
      }}
    >
      <Container>
        <MKTypography
          variant="h2"
          align="center"
          fontWeight="bold"
          mb={1}
          sx={{
            color: "var(--color-white)",
            fontSize: { xs: "2rem", md: "2.8rem" },
            letterSpacing: "-0.03em",
          }}
        >
          Alquiler de{" "}
          <Box component="span" sx={{ color: "var(--color-yellow)" }}>
            Salas
          </Box>
        </MKTypography>

        <Box
          sx={{
            width: "76px",
            height: "3px",
            backgroundColor: "var(--color-yellow)",
            borderRadius: "999px",
            mx: "auto",
            mb: { xs: 4, md: 5 },
          }}
        />

        <Grid container spacing={4} justifyContent="center">
          {salas.map((sala, index) => (
            <Grid item xs={12} sm={6} md={4} key={sala.id}>
              <motion.div
                initial={
                  !isSmallScreen ? { opacity: 0, y: 45 } : { opacity: 1 }
                }
                whileInView={
                  !isSmallScreen ? { opacity: 1, y: 0 } : { opacity: 1 }
                }
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.12, 0.35),
                  ease: "easeOut",
                }}
                style={{ width: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    transition: "transform 0.25s ease",

                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={sala.images[0]}
                    alt={sala.name}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      boxShadow: "var(--shadow-soft)",
                      objectFit: "cover",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />

                  <MKTypography
                    variant="h5"
                    align="center"
                    fontWeight="bold"
                    sx={{
                      mt: 2,
                      color: "var(--color-yellow)",
                    }}
                  >
                    {sala.name}
                  </MKTypography>

                  <MKTypography
                    variant="body1"
                    sx={{
                      color: "var(--color-text-muted)",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      lineHeight: 1.7,
                    }}
                    mb={2}
                  >
                    {sala.description}
                  </MKTypography>

                  <Button
                    variant="contained"
                    disableElevation
                    disableRipple
                    onClick={() => handleOpen(sala)}
                    sx={{
                      alignSelf: { xs: "center", md: "flex-start" },
                      backgroundColor: "var(--color-yellow)",
                      color: "var(--color-black)",
                      px: 3.2,
                      py: 1.15,
                      borderRadius: "999px",
                      fontWeight: 800,
                      letterSpacing: "0.02em",
                      boxShadow: "0 14px 30px rgba(0,0,0,0.32)",
                      transition: "all 0.25s ease",

                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "var(--color-black)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 18px 38px rgba(0,0,0,0.38)",
                      },
                      "&:focus": {
                        backgroundColor: "var(--color-yellow-soft) !important",
                        color: "var(--color-black) !important",
                        outline: "none",
                        boxShadow: "none !important",
                      },

                      "&:active": {
                        backgroundColor: "var(--color-yellow-soft) !important",
                        color: "var(--color-black) !important",
                        boxShadow: "none !important",
                      },

                      "&.Mui-focusVisible": {
                        backgroundColor: "var(--color-yellow-soft) !important",
                        color: "var(--color-black) !important",
                        outline: "2px solid var(--color-yellow)",
                        outlineOffset: "3px",
                        boxShadow: "none !important",
                      },
                    }}
                  >
                    Ver más
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {selectedSala && (
        <ModalComponent open={open} onClose={handleClose} sala={selectedSala}>
          <ImageCarousel
            images={selectedSala.images}
            description={selectedSala.description}
          />
        </ModalComponent>
      )}
    </Box>
  );
}

export default SpaceRental;
