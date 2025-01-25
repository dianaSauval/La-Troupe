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
    <MKBox component="section" py={3} my={3} sx={{ backgroundColor: "#F5F5F5" }}>
  <MKTypography variant="h1" align="center" fontWeight="bold" mb={4} sx={{ color: "#FFC523", padding:"5px" }}>
    Nuestras Clases
  </MKTypography>
  <Container maxWidth="lg" sx={{ px: 3 }}>
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {cardsData.map((card, index) => (
        <Grid 
          item 
          xs={12}   // 1 tarjeta en pantallas muy pequeñas
          sm={6}    // 2 tarjetas en pantallas pequeñas
          md={4}    // 3 tarjetas en pantallas medianas
          lg={3}  // 5 tarjetas en pantallas grandes
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
              action={card.back.action}
            />
          </RotatingCard>
        </Grid>
      ))}
    </Grid>
  </Container>
</MKBox>
  );
}

export default Information;

