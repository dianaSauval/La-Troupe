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

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sección Horarios */}
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

        <Container maxWidth="xl" sx={{ px: { xs: 1.5, sm: 2, md: 3 } }}>
          <MKBox
            sx={{
              width: "100%",
              maxWidth: "1280px",
              mx: "auto",
              borderRadius: { xs: "10px", sm: "14px", md: "18px" },
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.22)",
              backgroundColor: "#11151d",
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
                transition: "transform 0.25s ease",

                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            />
          </MKBox>

          <MKTypography
            variant="body2"
            align="center"
            mt={1.5}
            sx={{ color: "#555" }}
          >
            Tocá la imagen para ampliarla
          </MKTypography>
        </Container>
      </MKBox>

      {/* Modal con zoom */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullScreen
        PaperProps={{
          sx: {
            backgroundColor: "rgba(10, 10, 10, 0.96)",
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
            backgroundColor: "rgba(255,255,255,0.12)",
            color: "#fff",

            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.22)",
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
          wheel={{
            step: 0.015,
          }}
          doubleClick={{
            mode: "zoomIn",
            step: 0.5,
          }}
          pinch={{
            step: 2,
          }}
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
                  backgroundColor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "999px",
                  padding: "6px",
                }}
              >
                <IconButton
                  onClick={() => zoomOut(0.25)}
                  sx={{ color: "#fff" }}
                >
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
                    borderRadius: "10px",
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
