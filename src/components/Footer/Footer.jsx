import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        py: 1,
        px: 4,
        backgroundColor: "#000", // Fondo negro o ajusta al estilo de La Troupe
        color: "#fff", // Texto blanco para contraste
      }}
    >
      {/* Texto del lado izquierdo */}
      <Typography variant="body2" sx={{ textAlign: { xs: "center", md: "left" } }}>
        Copyright © {currentYear} La Troupe
        <Box component="span" sx={{ display: "block", mt: { xs: 1, md: 0 } }}>
          Developed by Diana Sauval
        </Box>
      </Typography>

      {/* Iconos de redes sociales */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          mt: { xs: 2, md: 0 },
          gap: 2,
        }}
      >
        <IconButton
          href="https://www.instagram.com/latroupeok/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "transform 0.3s ease",
            "&:hover": {
              color: "#E4405F", // Color de Instagram
              transform: "scale(1.2)",
            },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/latroupe.circo"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "transform 0.3s ease",
            "&:hover": {
              color: "#1877F2", // Color de Facebook
              transform: "scale(1.2)",
            },
          }}
        >
          <Facebook />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;








