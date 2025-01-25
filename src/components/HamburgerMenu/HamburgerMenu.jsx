import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MKTypography from "../MKTypography";
import MKBox from "../MKBox";
import Link from "@mui/material/Link";

function HamburgerMenu({ isOpen, onClose, scrollToSection }) {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "280px",
          backgroundColor: "#FFC523",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      {/* Header del menú con el botón de cerrar */}
      <MKBox
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <MKTypography
          variant="h5"
          color="black"
          fontWeight="bold"
          sx={{
            fontFamily: "'Roboto Slab', serif", // Cambia esto según tu preferencia
          }}
        >
          Menú
        </MKTypography>
        <IconButton onClick={onClose} sx={{ color: "black" }}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </MKBox>
      {/* Opciones del menú */}
      <MKBox
        role="presentation"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <MKTypography
          component={Link}
          href="#inicio"
          variant="h6"
          color="black"
          fontWeight="bold"
          sx={{
            fontSize: "1.5rem",
            marginBottom: 2,
            textDecoration: "none",
            cursor: "pointer",
            fontFamily: "'Roboto Slab', serif",
            "&:hover": {
              color: "#444",
            },
          }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("inicio");
          }}
        >
          Inicio
        </MKTypography>
        {/* Línea divisora */}
        <MKBox
          component="hr"
          sx={{
            width: "80%",
            border: "none",
            height: "2px",
            backgroundColor: "#444",
            margin: "1rem 0",
          }}
        />
        {["escuela", "clases", "alquiler", "contacto"].map((section) => (
          <MKTypography
            key={section}
            component={Link}
            href={`#${section}`}
            variant="p"
            color="black"
            fontWeight="regular"
            sx={{
              fontSize: "1.25rem",
              marginBottom: 2,
              textDecoration: "none",
              cursor: "pointer",
              fontFamily: "'Roboto Slab', serif",
              "&:hover": {
                color: "#444",
                fontWeight: "bold",
              },
            }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section);
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </MKTypography>
        ))}
      </MKBox>
    </Drawer>
  );
}

export default HamburgerMenu;

