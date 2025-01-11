import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
// Images
import bgImage from "../../assets/images/bg-coworking.jpeg";

// Components
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <MKBox component="header" position="relative">
      <NavBar />
      <MKBox
        id="inicio"
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pt: "55px",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                color: "#FFC523",
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              La Troupe Multiespacio
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
            En La Troupe, creemos que el circo es más que un espectáculo, es una forma de conectar, expresarse y desafiarse a uno mismo
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Header;

