import React from "react";
import MKBox from "./components/MKBox/index";
import Information from "./components/Card/Information";
import FormSimple from "./components/FormSimple/FormSimple";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import SpaceRental from "./components/SpaceRental/SpaceRental";
import Footer from "./components/Footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>La Troupe – Escuela de Circo en Banfield</title>
        <meta
          name="description"
          content="Clases de telas, trapecio, aro, rueda Cyr y más en Banfield. También shows y alquiler de espacio."
        />
        <link rel="canonical" href="https://latroupecirco.com.ar/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Troupe – Escuela de Circo" />
        <meta
          property="og:description"
          content="Clases y shows de circo en Banfield, Buenos Aires."
        />
        <meta
          property="og:image"
          content="https://latroupecirco.com.ar/social-image.jpg"
        />
        <meta property="og:url" content="https://latroupecirco.com.ar/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <MKBox component="main">
        <Header />
        <About />
        <Information />
        <SpaceRental />
        <FormSimple />
      </MKBox>

      <Footer />
    </HelmetProvider>
  );
}

export default App;