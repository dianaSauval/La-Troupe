import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import NavBar from "../NavBar/NavBar";
import bgImage from "../../assets/images/fotobanner.jpeg";
import MKButton from "../MKButton";

function Header() {
  return (
    <MKBox component="header" position="relative" sx={{ overflowX: "visible" }}>
      <NavBar />

      {/* Imagen LCP "oculta" para que Lighthouse la detecte (opcional) */}
      <img
        src={bgImage}
        alt="Clases de circo en Banfield: telas, trapecio, aro y rueda Cyr"
        style={{ position: "absolute", width: 0, height: 0, opacity: 0 }}
        fetchpriority="high"
      />

      <MKBox
        id="inicio"
        display="flex"
        alignItems="center"
        minHeight="110vh"
        sx={(theme) => ({
          backgroundImage: `
            linear-gradient(
              ${theme.functions.rgba(theme.palette.gradients.dark.main, 0.5)},
              ${theme.functions.rgba(theme.palette.gradients.dark.state, 0.5)}
            ), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "55px",
          overflow: "visible",
        })}
      >
        <Container sx={{ overflow: "visible" }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
            sx={{
              overflow: "visible",
              padding: { xs: "0 1rem", md: "0" },
            }}
          >
            {/* H1 con keyword local */}
            <MKTypography
              component="h1"
              variant="h1"
              mb={2}
              sx={(theme) => ({
                color: "#FFC523",
                fontSize: {
                  xs: theme.typography.size["2xl"],
                  sm: theme.typography.size["3xl"],
                  md: theme.typography.size["4xl"],
                },
              })}
            >
              La Troupe Multiespacio
            </MKTypography>
            <MKTypography
              component="h2"
              variant="h2"
              mb={2}
              sx={(theme) => ({
                color: "#FFC523",
                fontSize: {
                  xs: theme.typography.size["2xl"],
                  sm: theme.typography.size["3xl"],
                  md: theme.typography.size["4xl"],
                },
              })}
            >
              Escuela de Circo en Banfield
            </MKTypography>

            {/* Intro indexable */}
            <MKTypography
              variant="body1"
              color="white"
              sx={{
                opacity: 0.9,
                pr: { md: "1.5rem" },
                mr: { md: "1.5rem" },
              }}
            >
              En La Troupe, creemos que el circo es más que un espectáculo, es
              una forma de conectar, expresarse y desafiarse a uno mismo
            </MKTypography>

            {/* CTA accesible que baja a "clases" */}
            <MKButton
              variant="contained"
              sx={{
                mt: 3,
                alignSelf: "flex-start",
                backgroundColor: "#FFC523",
                color: "#261A23",
              }}
             onClick={() => {
  // 1) actualiza el hash (no crea una nueva URL “/clases”)
  window.location.hash = "clases";
  // 2) hace scroll
  document.getElementById("clases")?.scrollIntoView({ behavior: "smooth" });
}}

              aria-label="Ver horarios y disciplinas de clases"
            >
              Ver clases y horarios
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Header;
