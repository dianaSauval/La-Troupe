import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "../../assets/images/logo3.png";

const SECTIONS = [
  { id: "inicio",   label: "Inicio" },
  { id: "escuela",  label: "Escuela" },
  { id: "clases",   label: "Clases" },
  { id: "rental",   label: "Alquiler" }, // <-- antes ponías "alquiler" (mismatch). Ajustado a "rental"
  { id: "contacto", label: "Contacto" },
];

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MKBox
      component="nav"
      role="navigation"
      aria-label="Menú principal"
      position="fixed"
      top="0"
      width="100vw"
      zIndex="1100"
      sx={{
        transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: isScrolled ? "#FFCE00" : "transparent",
        color: isScrolled ? "black" : "white",
        boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        height: "55px",
        display: "flex",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      {/* Logo como link a inicio */}
      <MKBox
        component="a"
        href="#inicio"
        aria-label="Ir al inicio"
        sx={{
          position: isScrolled ? "relative" : "absolute",
          top: isScrolled ? "auto" : "20px",
          left: isScrolled ? "10%" : "20%",
          transform: isScrolled ? "none" : "translateX(-50%)",
          display: "inline-flex",
          alignItems: "center",
          zIndex: 2000,
        }}
      >
        <MKBox
          component="img"
          src={logo}
          alt="La Troupe Multiespacio – logo"
          sx={{
            height: isScrolled ? "35px" : { xs: "60px", sm: "80px", md: "100px" },
            width: "auto",
            transition: "all 0.3s ease",
            maxWidth: { xs: "90%", sm: "80%", md: "none" },
          }}
        />
      </MKBox>

      <Container>
        <Grid container flexDirection="row" alignItems="center" sx={{ height: "100%" }}>
          {/* Menú desktop */}
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            my={0}
            mx="auto"
            sx={{ listStyle: "none", paddingInlineStart: 0, gap: "1rem" }}
          >
            {SECTIONS.map(({ id, label }) => (
              <MKBox component="li" key={id}>
                <MKTypography
                  component={Link}
                  href={`#${id}`}          // hash nativo
                  variant="h4"
                  color={isScrolled ? "black" : "white"}
                  fontWeight="regular"
                  p={1}
                  underline="none"
                  sx={{
                    fontSize: isScrolled ? "1rem" : "1.125rem",
                    position: "relative",
                    transition: "all 0.3s ease",
                    outlineOffset: "2px",
                    "&:hover": { color: "#261A23", fontWeight: "bold" },
                    "&:focus-visible": {
                      outline: "2px solid currentColor",
                      borderRadius: "4px",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      height: "2px",
                      width: "100%",
                      background: "#261A23",
                      transform: "scaleX(0)",
                      transformOrigin: "right",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                      transformOrigin: "left",
                    },
                  }}
                >
                  {label}
                </MKTypography>
              </MKBox>
            ))}
          </MKBox>

          {/* Botón hamburguesa (mobile) */}
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={isDrawerOpen ? "true" : "false"}
            sx={{
              display: { xs: "block", lg: "none" },
              color: isScrolled ? "black" : "white",
              ml: "auto",
              "&:hover": { transform: "rotate(90deg)", transition: "transform 0.3s ease" },
            }}
          >
            <MKBox component="i" className="fas fa-bars" />
          </IconButton>
        </Grid>
      </Container>

      {/* Menú móvil */}
      <HamburgerMenu
        id="mobile-menu"
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        scrollToSection={(sectionId) => {
          setIsDrawerOpen(false);
          // hash nativo: actualiza URL y permite compartir
          window.location.hash = sectionId;
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }}
        sections={SECTIONS} // si tu componente lo admite
      />
    </MKBox>
  );
}

export default NavBar;
