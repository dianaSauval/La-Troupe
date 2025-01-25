import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel({ images, description }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Carrusel de imágenes */}
      <Box
        sx={{
          width: "100%", // Aumenta la altura
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          dynamicHeight={false}
          showStatus={true}
          showIndicators={true}
          stopOnHover
          emulateTouch
          interval={3000}
        >
          {images.map((image, index) => (
            <div key={index} style={{ height: "100%" }}>
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Mantiene proporciones
                }}
              />
            </div>
          ))}
        </Carousel>
      </Box>

      {/* Descripción */}
      {description && (
        <Box
          sx={{
            textAlign: "center",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: "text.secondary",
            }}
          >
            {description}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ImageCarousel;


