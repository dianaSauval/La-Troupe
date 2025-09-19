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
import {
  Margin,
  PaddingOutlined,
  PaddingSharp,
  PaddingTwoTone,
} from "@mui/icons-material";
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

        {/* JSON-LD: PerformingGroup + LocalBusiness (ajustá dirección/teléfono) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["PerformingGroup", "LocalBusiness"],
            name: "La Troupe Multiespacio",
            url: "https://latroupecirco.com.ar",
            image: "https://latroupecirco.com.ar/social-image.jpg",
            telephone: "+54 11 0000-0000",
            email: "contacto@latroupecirco.com.ar",
            address: {
              "@type": "PostalAddress",
              streetAddress: "(tu calle y número)",
              addressLocality: "Banfield",
              addressRegion: "Buenos Aires",
              postalCode: "(CP)",
              addressCountry: "AR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-34.743", // opcional si lo sabés
              longitude: "-58.39",
            },
            sameAs: [
              "https://www.instagram.com/latroupecirco", // actualizá
            ],
            areaServed: [
              "Banfield",
              "Lomas de Zamora",
              "Zona Sur",
              "Buenos Aires",
            ],
            knowsAbout: [
              "Telas",
              "Trapecio",
              "Aro",
              "Rueda Cyr",
              "Acrobacia en pareja",
              "Clases de circo",
              "Shows para eventos",
            ],
            openingHours: "Mo-Sa 10:00-21:00",
          })}
        </script>

        {/* FAQPage (si tenés una sección de preguntas frecuentes) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Dónde está la escuela?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En Banfield, Zona Sur de Buenos Aires. Consultanos la dirección exacta por mensaje.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué disciplinas enseñan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Telas, trapecio, aro, rueda Cyr, acrobacia en dúo y más. Hay niveles para infancias y personas adultas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo reservo una clase?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Escribinos por el formulario de contacto o por Instagram para coordinar horarios y disponibilidad.",
                },
              },
            ],
          })}
        </script>
      </Helmet>
      <MKBox>
        <Header />
        <MKBox
          id="escuela"
          sx={{ backgroundColor: "#261A23", color: "#FFC523" }}
        >
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
        <MKBox
          id="rental"
          sx={{ backgroundColor: "#261A23", color: "#FFC523" }}
        >
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
    </HelmetProvider>
  );
}

export default App;
