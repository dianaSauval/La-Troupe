import React from "react";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 // Importa los estilos predeterminados del carrusel.

function ImageCarousel({ images }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%", // Asegura que ocupe todo el alto del modal
        display: "flex",
        alignItems: "center", // Centra el contenido
        justifyContent: "center", // Centra el contenido
        overflow: "hidden", // Evita el scroll dentro del carrusel
      }}
    >
      <Carousel 
        showThumbs={false} 
        autoPlay 
        infiniteLoop 
        dynamicHeight={false} 
        showStatus={true} // Muestra la posición actual
        showIndicators={true} // Muestra las "bolitas" de posición
        statusFormatter={(current, total) => `${current} / ${total}`} // Formato de la posición (ejemplo: 1 / 5)
        stopOnHover
        emulateTouch // Mejora la experiencia en dispositivos táctiles
        interval={3000} // Tiempo entre cada cambio de imagen
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
                objectFit: "cover", // Mantiene las proporciones y cubre el área
              }}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;

