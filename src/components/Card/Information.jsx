// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../MKBox";

// Material Kit 2 React examples
import RotatingCard from "../Card/RotatingCard";
import RotatingCardFront from "../Card/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../Card/RotatingCard/RotatingCardBack";
import MKTypography from "../MKTypography";

// Images
import bgFront from "../../assets/images/rotating-card-bg-front.jpeg";
import bgBack from "../../assets/images/rotating-card-bg-back.jpeg";
import tela from "../../assets/images/tela.jpg";
import aro from "../../assets/images/aro.jpg";

function Information() {
  return (
    <MKBox component="section" py={3} my={3} sx={{ backgroundColor: "#F5F5F5" }}>
      <MKTypography variant="h1" align="center" fontWeight="bold" mb={4} sx={{ color: "#FFC523" }}>
        Nuestras Clases
      </MKTypography>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={tela}
                icon=""
                title={
                  <>
                    Tela
                    <br />
                    Teens
                  </>
                }
                description="(+10 años)"
              >
                {/* Aplicamos un fondo amarillo transparente al contenedor */}
                <MKBox
                  sx={{
                    position: "absolute", // Esto asegura que el fondo cubra la tarjeta
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 197, 35, 0.5)", // Transparencia amarilla
                    borderRadius: "8px", // Bordes redondeados
                    zIndex: -1, // Asegura que el fondo esté detrás del contenido
                  }}
                />
              </RotatingCardFront>
              <RotatingCardBack
                image={bgBack}
                title="Información"
                description="Lunes y miércoles 21hs"
                action={{
                  type: "external",
                  route: "https://duoserendipia.com.ar/",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={aro}
                icon=""
                title={
                  <>
                    Trapecio y Aro
                    <br />
                    Adultos
                  </>
                }
                description=""
              >
                {/* Aplicamos un fondo amarillo transparente al contenedor */}
                <MKBox
                  sx={{
                    position: "absolute", // Esto asegura que el fondo cubra la tarjeta
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 197, 35, 0.5)", // Transparencia amarilla
                    borderRadius: "8px", // Bordes redondeados
                    zIndex: -1, // Asegura que el fondo esté detrás del contenido
                  }}
                />
              </RotatingCardFront>
              <RotatingCardBack
                image={bgBack}
                title="Información"
                description="Lunes y miercoles 18hs"
                action={{
                  type: "external",
                  route: "https://duoserendipia.com.ar/",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;

