import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import MenuIcon from "@mui/icons-material/Menu";

const SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "escuela", label: "Escuela" },
  { id: "clases", label: "Clases" },
  { id: "rental", label: "Alquiler" },
  { id: "contacto", label: "Contacto" },
];

const logo = "/logo-header.webp";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MKBox
      component="nav"
      role="navigation"
      aria-label="Menú principal"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="1100"
      sx={{
        width: "100%",
        height: isScrolled ? "64px" : { xs: "82px", sm: "90px", md: "96px" },
        display: "flex",
        alignItems: "center",
        overflow: "visible",
        transition:
          "background 0.3s ease, box-shadow 0.3s ease, border-bottom 0.3s ease, height 0.3s ease",

        // Antes del scroll: transparente para que se vea la foto detrás.
        background: isScrolled
          ? "linear-gradient(135deg, #171b24 0%, #242a35 45%, #10131a 100%)"
          : "transparent",

        backdropFilter: isScrolled ? "blur(12px)" : "none",

        borderBottom: isScrolled
          ? "1px solid rgba(255, 239, 24, 0.28)"
          : "none",

        boxShadow: isScrolled ? "0 12px 35px rgba(0,0,0,0.28)" : "none",
      }}
    >
      {/* Logo */}
      <MKBox
        component="a"
        href="#inicio"
        aria-label="Ir al inicio"
        sx={{
          position: "absolute",
          left: { xs: "16px", md: "8%" },
          top: "50%",
          transform: isScrolled
            ? "translateY(-50%) scale(0.9)"
            : "translateY(calc(-50% + 12px)) scale(1.05)",
          transformOrigin: "left center",
          transition: "transform 0.28s ease",
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
            height: isScrolled
              ? "50px"
              : { xs: "62px", sm: "76px", md: "90px" },
            width: "auto",
            transition: "all 0.3s ease",
            display: "block",
          }}
        />
      </MKBox>

      <Container>
        <Grid
          container
          flexDirection="row"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          {/* Menú desktop */}
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            my={0}
            mx="auto"
            sx={{
              listStyle: "none",
              paddingInlineStart: 0,
              gap: "1.4rem",
              alignItems: "center",
            }}
          >
            {SECTIONS.map(({ id, label }) => (
              <MKBox component="li" key={id}>
                <MKTypography
                  component={Link}
                  href={`#${id}`}
                  underline="none"
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    fontSize: isScrolled ? "0.95rem" : "1rem",
                    position: "relative",
                    transition: "all 0.25s ease",
                    px: "0.25rem",
                    py: "0.4rem",
                    textShadow: isScrolled
                      ? "none"
                      : "0 2px 10px rgba(0,0,0,0.7)",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      bottom: 0,
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#FFEF18",
                      transform: "translateX(-50%)",
                      transition: "width 0.25s ease",
                    },

                    "&:hover": {
                      color: "#FFEF18",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },

                    "&:focus-visible": {
                      outline: "2px solid #FFEF18",
                      outlineOffset: "4px",
                      borderRadius: "4px",
                    },
                  }}
                >
                  {label}
                </MKTypography>
              </MKBox>
            ))}
          </MKBox>

          {/* Botón hamburguesa mobile */}
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={isDrawerOpen ? "true" : "false"}
            sx={{
              display: { xs: "flex", lg: "none" },
              ml: "auto",
              width: 46,
              height: 46,

              color: "#fff",

              border: "1px solid rgba(255,255,255,.25)",
              backgroundColor: "rgba(0,0,0,.20)",

              transition: "all .25s ease",

              "&:hover": {
                backgroundColor: "rgba(255,255,255,.08)",
                borderColor: "#FFEF18",
                color: "#FFEF18",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
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
          window.location.hash = sectionId;

          document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        sections={SECTIONS}
      />
    </MKBox>
  );
}

export default NavBar;
