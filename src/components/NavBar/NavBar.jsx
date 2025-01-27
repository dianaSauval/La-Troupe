import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MKBox from "../MKBox";
import MKTypography from "../MKTypography";
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
      setIsScrolled(window.scrollY > 50); // Cambia de estado cuando se haga scroll hacia abajo
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MKBox
      component="nav"
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
      {/* Logo fuera del navbar */}
      <MKBox
  component="img"
  src={logo}
  alt="Logo"
  sx={{
    position: isScrolled ? "relative" : "absolute",
    top: isScrolled ? "auto" : "20px",
    left: isScrolled ? "10%" : "20%",
    transform: isScrolled ? "none" : "translateX(-50%)",
    height: isScrolled ? "35px" : { xs: "60px", sm: "80px", md: "100px" },
    transition: "all 0.3s ease",
    zIndex: 2000, // Asegura que esté sobre el navbar
    maxWidth: { xs: "90%", sm: "80%", md: "none" }, // Ajusta el ancho para pantallas pequeñas
  }}
/>
      <Container>
        <Grid container flexDirection="row" alignItems="center" style={{ height: "100%" }}>
          {/* Menú de navegación */}
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            my={0}
            mx="auto"
            sx={{
              listStyle: "none",
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
