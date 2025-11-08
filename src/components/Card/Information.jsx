import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import RotatingCard from "../Card/RotatingCard";
import RotatingCardFront from "../Card/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../Card/RotatingCard/RotatingCardBack";
import cardsData from "../../assets/data/cardsData.json";
import { Padding } from "@mui/icons-material";

function Information() {
  return (
    <MKBox
      component="section"
      py={3}
      my={3}
      sx={{ backgroundColor: "#F5F5F5" }}
    >
      <MKTypography
        variant="h1"
        align="center"
        fontWeight="bold"
        mb={4}
        sx={{ color: "#FFC523", padding: "5px" }}
      >
        Nuestras Clases
      </MKTypography>
      <Container maxWidth="lg" sx={{ px: 3 }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {cardsData.map((card, index) => (
            <Grid
              item
              xs={12} // 1 tarjeta en pantallas muy pequeñas
              sm={6} // 2 tarjetas en pantallas pequeñas
              md={4} // 3 tarjetas en pantallas medianas
              lg={3} // 5 tarjetas en pantallas grandes
              key={index}
            >
              <RotatingCard flipped={false}>
                <RotatingCardFront
                  image={card.front.image}
                  icon=""
                  title={card.front.title}
                  description={card.front.description}
                  sx={{
                    backgroundPosition: "center top",
                  }}
                />
                <RotatingCardBack
                  image={card.back.image}
                  title={card.back.title}
                  description={card.back.description}
                  description2={card.back.description2}
                  action={card.back.action}
                  extraInfo={card.back.extraInfo}
                />
              </RotatingCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Sección de "Horarios" */}
      <MKBox mt={6}>
        <MKTypography
          variant="h1"
          align="center"
          fontWeight="bold"
          mb={4}
          sx={{ color: "#FFC523", padding: "5px" }}
        >
          Horarios
        </MKTypography>
        <MKBox
          component="img"
          src="https://res.cloudinary.com/dkdhdy9e5/image/upload/v1760086488/La%20Troupe/horario_octubre_nhk8i9.jpghttps://res.cloudinary.com/dkdhdy9e5/image/upload/v1762602449/La%20Troupe/horarios-noviembre_ggfl4w.jpg" // Reemplaza con la ruta de tu imagen
          alt="Horarios"
          sx={{
            width: "100%", // Ancho máximo
            maxWidth: "1200px", // Máximo ancho para grandes pantallas
            height: "auto", // Altura automática para mantener la proporción
            margin: "0 auto", // Centrar la imagen
            display: "block", // Centrar con margin auto
            borderRadius: "12px", // Bordes redondeados
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Sombra
          }}
        />
      </MKBox>
    </MKBox>
  );
}

export default Information;
