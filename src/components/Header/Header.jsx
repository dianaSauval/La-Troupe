import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import NavBar from "../NavBar/NavBar";
import bgImage from "../../assets/images/fotobanner.jpeg";
import MKButton from "../MKButton";

function Header() {
  const scrollToClasses = () => {
    window.location.hash = "clases";
    document.getElementById("clases")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MKBox component="header" position="relative" sx={{ overflowX: "hidden" }}>
      <NavBar />

      <img
        src={bgImage}
        alt="Clases de circo en Banfield: telas, trapecio, aro y rueda Cyr"
        style={{ position: "absolute", width: 0, height: 0, opacity: 0 }}
        fetchPriority="high"
      />

      <MKBox
        id="inicio"
        component="section"
        display="flex"
        alignItems="center"
        minHeight={{ xs: "100svh", md: "110vh" }}
        sx={{
          position: "relative",
          isolation: "isolate",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 7, 11, 0.94) 0%,
              rgba(16, 19, 26, 0.86) 36%,
              rgba(16, 19, 26, 0.46) 68%,
              rgba(16, 19, 26, 0.18) 100%
            ),
            url(${bgImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "center" },
          paddingTop: { xs: "82px", md: "96px" },
          overflow: "hidden",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: -1,
            background:
              "radial-gradient(circle at 18% 48%, rgba(255, 239, 24, 0.12), transparent 30%)",
            pointerEvents: "none",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "180px",
            zIndex: -1,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(16,19,26,0.92) 100%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
            sx={{
              px: { xs: 2, md: 0 },
              textAlign: { xs: "center", md: "left" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <MKTypography
              component="p"
              sx={{
                color: "var(--color-yellow)",
                fontSize: { xs: "0.72rem", md: "0.82rem" },
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Multiespacio · Circo · Movimiento
            </MKTypography>

            <MKTypography
              component="h1"
              variant="h1"
              sx={{
                color: "#fff",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.045em",
                mb: 1.5,
                textShadow: "0 10px 32px rgba(0,0,0,0.52)",
                fontSize: {
                  xs: "3rem",
                  sm: "4rem",
                  md: "4.8rem",
                  lg: "5.2rem",
                },
              }}
            >
              La Troupe
              <MKBox
                component="span"
                sx={{
                  display: "block",
                  color: "var(--color-yellow)",
                }}
              >
                Multiespacio
              </MKBox>
            </MKTypography>

            <MKTypography
              component="h2"
              sx={{
                color: "rgba(255,255,255,0.88)",
                fontSize: { xs: "1.18rem", md: "1.55rem" },
                fontWeight: 500,
                lineHeight: 1.35,
                mb: 2,
              }}
            >
              Escuela de circo en Banfield
            </MKTypography>

            <MKTypography
              component="p"
              sx={{
                color: "rgba(255,255,255,0.76)",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.8,
                maxWidth: "560px",
              }}
            >
              Un espacio para entrenar, crear y descubrir el circo como lenguaje
              de expresión, encuentro y desafío personal.
            </MKTypography>

            <MKBox
              sx={{
                width: "76px",
                height: "2px",
                backgroundColor: "var(--color-yellow)",
                mt: 3,
                mb: 3,
                borderRadius: "999px",
              }}
            />

            <MKButton
              variant="contained"
              onClick={scrollToClasses}
              aria-label="Ver horarios y disciplinas de clases"
              sx={{
                alignSelf: { xs: "center", md: "flex-start" },
                backgroundColor: "var(--color-yellow)",
                color: "var(--color-black)",
                px: 3.2,
                py: 1.15,
                borderRadius: "999px",
                fontWeight: 800,
                letterSpacing: "0.02em",
                boxShadow: "0 14px 30px rgba(0,0,0,0.32)",
                transition: "all 0.25s ease",

                "&:hover": {
                  backgroundColor: "#fff",
                  color: "var(--color-black)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 18px 38px rgba(0,0,0,0.38)",
                },
              }}
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