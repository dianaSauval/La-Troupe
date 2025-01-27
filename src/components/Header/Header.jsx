import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
// Images
import bgImage from "../../assets/images/fotobanner.jpeg";

// Components
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <MKBox component="header" position="relative" sx={{ overflowX: "visible" }}>
      <NavBar />
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
              overflow: "visible", // Evita cortar contenido
              padding: {
                xs: "0 1rem", // Agrega espacio lateral en dispositivos pequeños
                md: "0", // Sin padding adicional en dispositivos grandes
              },
              
            }}
          >
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={(theme) => ({
                color: "#FFC523",
                fontSize: {
                  xs: theme.typography.size["2xl"], // Ajusta para pantallas pequeñas
                  sm: theme.typography.size["3xl"],
                  md: theme.typography.size["4xl"],
                },
              })}
            >
              La Troupe Multiespacio
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              sx={{
                paddingRight: {
                  xs: "0", // Sin padding en dispositivos pequeños
                  md: "1.5rem",
                },
                marginRight: {
                  xs: "0", // Sin margen en dispositivos pequeños
                  md: "1.5rem",
                },
              }}
            >
              En La Troupe, creemos que el circo es más que un espectáculo, es una forma de conectar,
              expresarse y desafiarse a uno mismo
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Header;
