import React, { useState, useEffect } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
// Material Kit 2 React components
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
// Componente del menú hamburguesa
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "../../assets/images/logo3.png";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = 55; // Altura del NavBar
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsDrawerOpen(false); // Cierra el menú móvil después de seleccionar una sección
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MKBox
  component="nav"
  position="fixed"
  top="0"
  width="100vw" // Asegura que ocupe solo el ancho del viewport
  zIndex="1100"
  sx={{
    transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: isScrolled ? "#FFCE00" : "transparent",
    color: isScrolled ? "black" : "white",
    boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
    height: "55px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden", // Evita desbordamientos dentro del componente
  }}
>
      <Container>
        <Grid container flexDirection="row" alignItems="center" style={{ height: "100%" }}>
        <MKBox
            component={Link}
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textDecoration: "none",
            }}
          >
            <MKBox
              component="img"
              src={logo} // Cambia esta ruta si el logo está en otro lugar
              alt="Logo"
              sx={{
                height: isScrolled ? "35px" : "45px", // Ajusta el tamaño dinámicamente
                transition: "height 0.3s ease",
              }}
            />
          </MKBox>
          {/* Botón de menú hamburguesa */}
          <IconButton
            onClick={() => toggleDrawer(true)}
            sx={{
              display: { xs: "block", lg: "none" },
              color: isScrolled ? "black" : "white",
              ml: "auto",
            }}
          >
            <MKBox component="i" className="fas fa-bars" />
          </IconButton>
          {/* Menú de navegación para pantallas grandes */}
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            my={0}
            mx="auto"
            sx={{
              listStyle: "none",
              overflowX: "visible", // Evitar desbordamiento horizontal
              paddingInlineStart: 0,
            }}
          >
            {["inicio", "escuela", "clases", "alquiler", "contacto"].map((section) => (
              <MKBox component="li" key={section} sx={{ marginInlineEnd: "1rem" }}>
                <MKTypography
                  component={Link}
                  href={`#${section}`}
                  variant="p"
                  color={isScrolled ? "black" : "white"}
                  fontWeight="regular"
                  p={1}
                  sx={{
                    fontSize: isScrolled ? "1rem" : "1.125rem",
                    transition: "font-size 0.3s ease",
                    textDecoration: "none",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </MKTypography>
              </MKBox>
            ))}
          </MKBox>
        </Grid>
      </Container>
      {/* Componente del menú hamburguesa */}
      <HamburgerMenu
        isOpen={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        scrollToSection={scrollToSection}
      />
    </MKBox>
  );
}

export default NavBar;
