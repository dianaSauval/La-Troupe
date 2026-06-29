import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import RotatingCard from "../Card/RotatingCard";
import RotatingCardFront from "../Card/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../Card/RotatingCard/RotatingCardBack";
import cardsData from "../../assets/data/cardsData.json";

const horariosImage =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1782732298/La%20Troupe/horarios_x4ra2p.jpg";

function Information() {
  const [open, setOpen] = useState(false);

  return (
    <MKBox
      component="section"
      id="clases"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: "#f5f5f0",
        color: "#10131a",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <MKTypography
          component="p"
          align="center"
          sx={{
            color: "#b89b00",
            fontSize: "0.78rem",
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Disciplinas
        </MKTypography>

        <MKTypography
          component="h2"
          align="center"
          fontWeight="bold"
          sx={{
            color: "#10131a",
            fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
            mb: 1.5,
            letterSpacing: "-0.03em",
          }}
        >
          Nuestras{" "}
          <MKBox component="span" sx={{ color: "#d6aa00" }}>
            clases
          </MKBox>
        </MKTypography>

        <MKTypography
          align="center"
          sx={{
            color: "rgba(16,19,26,0.68)",
            maxWidth: "680px",
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.06rem" },
            lineHeight: 1.7,
            mb: { xs: 4, md: 5 },
          }}
        >
          Entrenamientos para distintas edades y niveles: aéreos, acrobacia,
          circo infantil, telas, trapecio, aro y más.
        </MKTypography>

        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <MKBox
                sx={{
                  height: "100%",
                  filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.14))",
                }}
              >
                <RotatingCard flipped={false}>
                  <RotatingCardFront
                    image={card.front.image}
                    icon=""
                    title={card.front.title}
                    description={card.front.subtitle}
                  />

                  <RotatingCardBack
                    image={card.front.image}
                    title={card.back.title}
                    meta={card.back.meta}
                    schedules={card.back.schedules}
                    action={card.back.action}
                  />
                </RotatingCard>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Horarios */}
      <MKBox mt={{ xs: 7, md: 9 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 1.5, sm: 2, md: 3 } }}>
          <MKTypography
            component="p"
            align="center"
            sx={{
              color: "#b89b00",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Grilla semanal
          </MKTypography>

          <MKTypography
            component="h2"
            align="center"
            fontWeight="bold"
            sx={{
              color: "#10131a",
              fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
              mb: 1.5,
              letterSpacing: "-0.03em",
            }}
          >
            Horarios
          </MKTypography>

          <MKTypography
            align="center"
            sx={{
              color: "rgba(16,19,26,0.65)",
              fontSize: { xs: "0.95rem", md: "1rem" },
              mb: { xs: 3, md: 4 },
            }}
          >
            Tocá la imagen para ampliarla y hacer zoom.
          </MKTypography>

          <MKBox
            sx={{
              width: "100%",
              maxWidth: "1280px",
              mx: "auto",
              p: { xs: 1, md: 1.25 },
              borderRadius: { xs: "16px", md: "24px" },
              backgroundColor: "#10131a",
              boxShadow: "0 22px 55px rgba(16,19,26,0.24)",
              border: "1px solid rgba(16,19,26,0.12)",
            }}
          >
            <MKBox
              component="img"
              src={horariosImage}
              alt="Horarios de clases"
              onClick={() => setOpen(true)}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                cursor: "zoom-in",
                borderRadius: { xs: "12px", md: "18px" },
                transition: "transform 0.25s ease, filter 0.25s ease",

                "&:hover": {
                  transform: "scale(1.006)",
                  filter: "brightness(1.03)",
                },
              }}
            />
          </MKBox>
        </Container>
      </MKBox>

      {/* Modal con zoom */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen
        PaperProps={{
          sx: {
            backgroundColor: "rgba(5, 7, 11, 0.96)",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          aria-label="Cerrar horarios"
          sx={{
            position: "fixed",
            right: 16,
            top: 16,
            zIndex: 20,
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.18)",

            "&:hover": {
              backgroundColor: "#ffef18",
              color: "#05070b",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <TransformWrapper
          initialScale={1}
          minScale={0.7}
          maxScale={4}
          centerOnInit
          wheel={{ step: 0.015 }}
          doubleClick={{ mode: "zoomIn", step: 0.5 }}
          pinch={{ step: 2 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <MKBox
                sx={{
                  position: "fixed",
                  left: "50%",
                  bottom: { xs: 16, sm: 24 },
                  transform: "translateX(-50%)",
                  zIndex: 20,
                  display: "flex",
                  gap: 1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: "999px",
                  padding: "6px",
                }}
              >
                <IconButton onClick={() => zoomOut(0.25)} sx={{ color: "#fff" }}>
                  <ZoomOutIcon />
                </IconButton>

                <IconButton
                  onClick={() => resetTransform()}
                  sx={{ color: "#fff" }}
                >
                  <RestartAltIcon />
                </IconButton>

                <IconButton onClick={() => zoomIn(0.25)} sx={{ color: "#fff" }}>
                  <ZoomInIcon />
                </IconButton>
              </MKBox>

              <TransformComponent
                wrapperStyle={{
                  width: "100vw",
                  height: "100vh",
                }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={horariosImage}
                  alt="Horarios de clases ampliado"
                  style={{
                    maxWidth: "96vw",
                    maxHeight: "92vh",
                    width: "auto",
                    height: "auto",
                    display: "block",
                    cursor: "grab",
                    borderRadius: "12px",
                  }}
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </Dialog>
    </MKBox>
  );
}

export default Information;