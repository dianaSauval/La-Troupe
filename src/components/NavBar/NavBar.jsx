import React, { useState, useEffect } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
// Material Kit 2 React components
import MKBox from "../MKBox";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MKBox
      component="nav"
      position="fixed"
      top="0"
      width="100%"
      zIndex="10"
      sx={{
        transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: isScrolled ? "#FFC523" : "transparent",
        color: isScrolled ? "black" : "white",
        boxShadow: isScrolled ? 4 : 0,
        height: "55px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container flexDirection="row" alignItems="center" style={{ height: "100%" }}>
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            color={isScrolled ? "black" : "white"}
            fontWeight="regular"
            py={0.8125}
            mr={2}
            sx={{
              fontSize: isScrolled ? "1.25rem" : "1.5rem",
              transition: "font-size 0.3s ease",
            }}
          >
            La Troupe
          </MKTypography>
          <MKButton
            variant="outlined"
            color={isScrolled ? "black" : "white"}
            sx={{
              display: { xs: "block", lg: "none" },
              ml: "auto",
              fontSize: isScrolled ? "0.875rem" : "1rem",
            }}
          >
            <MKBox component="i" color={isScrolled ? "black" : "white"} className="fas fa-bars" />
          </MKButton>
          <MKBox
            component="ul"
            display={{ xs: "none", lg: "flex" }}
            p={0}
            my={0}
            mx="auto"
            sx={{ listStyle: "none" }}
          >
            {["inicio", "escuela", "clases", "contacto"].map((section) => (
              <MKBox component="li" key={section}>
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
    </MKBox>
  );
}

export default NavBar;
