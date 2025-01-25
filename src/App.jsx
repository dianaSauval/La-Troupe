import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import MKBox from "./components/MKBox/index";
import MKTypography from "./components/MKTypography";
import MKButton from "./components/MKButton";
import Information from "./components/Card/Information";
import FormSimple from "./components/FormSimple/FormSimple";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import SpaceRental from "./components/SpaceRental/SpaceRental";
import Footer from "./components/Footer/Footer";
import { Margin, PaddingOutlined, PaddingSharp, PaddingTwoTone } from "@mui/icons-material";

function App() {
  return (
    <MKBox>
      <Header />
      <MKBox id="escuela" sx={{ backgroundColor: "#261A23", color: "#FFC523" }}>
        <About />
      </MKBox>
      <MKBox
        id="clases"
        sx={{
          backgroundColor: "#F5F5F5",
          paddingTop: "5px",
          paddingBottom: "15px",
        }}
      >
        <Information />
      </MKBox>
      <MKBox id="rental" sx={{ backgroundColor: "#261A23", color: "#FFC523" }}>
        <SpaceRental />
      </MKBox>
      <MKBox
        id="contacto"
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormSimple />
      </MKBox>
      <Footer />
    </MKBox>
  );
}

export default App;
