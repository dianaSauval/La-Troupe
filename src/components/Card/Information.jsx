import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import RotatingCard from "../Card/RotatingCard";
import RotatingCardFront from "../Card/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../Card/RotatingCard/RotatingCardBack";
import cardsData from "../../assets/data/cardsData.json";

function Information() {
  return (
    <MKBox component="section" py={3} my={3} sx={{ backgroundColor: "#F5F5F5" }}>
      <MKTypography variant="h1" align="center" fontWeight="bold" mb={4} sx={{ color: "#FFC523" }}>
        Nuestras Clases
      </MKTypography>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} lg={4} key={index} sx={{ mx: "auto" }}>
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
