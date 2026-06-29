import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
import MKTypography from "../MKTypography";
import MKBox from "../MKBox";

const DEFAULT_SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "escuela", label: "Escuela" },
  { id: "clases", label: "Clases" },
  { id: "rental", label: "Alquiler" },
  { id: "contacto", label: "Contacto" },
];

function HamburgerMenu({
  id = "mobile-menu",
  isOpen,
  onClose,
  scrollToSection,
  sections = DEFAULT_SECTIONS,
}) {
  return (
    <Drawer
      id={id}
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0,0,0,0.45)",
        },
        "& .MuiDrawer-paper": {
          width: { xs: "82vw", sm: "330px" },
          maxWidth: "360px",
          background:
            "linear-gradient(145deg, #171b24 0%, #222834 50%, #10131a 100%)",
          color: "#fff",
          padding: "1.4rem",
          display: "flex",
          flexDirection: "column",
          borderLeft: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "-18px 0 45px rgba(0,0,0,0.38)",
        },
      }}
    >
      {/* Header */}
      <MKBox
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pb: "1rem",
          mb: "1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <MKTypography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: 600,
            letterSpacing: "0.03em",
          }}
        >
          Menú
        </MKTypography>

        <IconButton
          onClick={onClose}
          aria-label="Cerrar menú"
          sx={{
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.18)",
            backgroundColor: "rgba(255,255,255,0.04)",
            transition: "all 0.25s ease",

            "&:hover": {
              backgroundColor: "rgba(255,239,24,0.12)",
              color: "#FFEF18",
              borderColor: "rgba(255,239,24,0.45)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </MKBox>

      {/* Links */}
      <MKBox
        role="presentation"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "0.3rem",
        }}
      >
        {sections.map(({ id, label }) => (
          <MKTypography
            key={id}
            component={Link}
            href={`#${id}`}
            underline="none"
            sx={{
              width: "100%",
              color: "#fff",
              fontSize: "1.08rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              textDecoration: "none",
              cursor: "pointer",
              borderRadius: "10px",
              px: "0.8rem",
              py: "0.85rem",
              transition: "all 0.22s ease",
              borderBottom: "1px solid rgba(255,255,255,0.08)",

              "&:hover": {
                color: "#FFEF18",
                backgroundColor: "rgba(255,255,255,0.045)",
                paddingLeft: "1rem",
              },

              "&:focus-visible": {
                outline: "2px solid #FFEF18",
                outlineOffset: "3px",
              },
            }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
          >
            {label}
          </MKTypography>
        ))}
      </MKBox>
    </Drawer>
  );
}

export default HamburgerMenu;