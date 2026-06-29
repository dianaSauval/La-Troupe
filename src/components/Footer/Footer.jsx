import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 15% 20%, rgba(255,239,24,0.08), transparent 28%), linear-gradient(135deg, var(--color-dark) 0%, var(--color-slate) 48%, var(--color-black) 100%)",
        color: "var(--color-white)",
        borderTop: "1px solid rgba(255,239,24,0.18)",
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 3 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1180px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
          alignItems: "center",
          gap: { xs: 3, md: 4 },
        }}
      >
        {/* Texto */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            © {currentYear} La Troupe Multiespacio
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.62)",
              fontSize: "0.85rem",
              lineHeight: 1.7,
            }}
          >
            Developed by{" "}
            <Box
              component="a"
              href="https://dianasauvaldigital.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "var(--color-yellow)",
                fontWeight: 700,
                textDecoration: "none",
                transition: "color var(--transition-fast)",

                "&:hover": {
                  color: "var(--color-white)",
                },

                "&:focus": {
                  color: "var(--color-yellow)",
                  outline: "none",
                },

                "&:focus-visible": {
                  outline: "2px solid var(--color-yellow)",
                  outlineOffset: "3px",
                  borderRadius: "4px",
                },
              }}
            >
              Diana Sauval
            </Box>
          </Typography>
        </Box>

        {/* Logo */}
        <Box
          component="a"
          href="#inicio"
          aria-label="Ir al inicio"
          sx={{
            justifySelf: "center",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "86px", md: "96px" },
            height: { xs: "86px", md: "96px" },
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.24)",
            transition: "transform var(--transition-base), border-color var(--transition-base)",

            "&:hover": {
              transform: "translateY(-3px)",
              borderColor: "rgba(255,239,24,0.45)",
            },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="La Troupe Multiespacio"
            sx={{
              width: "78%",
              height: "78%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Redes */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <IconButton
            href="https://www.instagram.com/latroupeok/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de La Troupe"
            sx={{
              color: "var(--color-white)",
              width: 42,
              height: 42,
              border: "1px solid rgba(255,255,255,0.16)",
              backgroundColor: "rgba(255,255,255,0.04)",
              transition: "all var(--transition-fast)",

              "&:hover": {
                color: "var(--color-yellow)",
                borderColor: "rgba(255,239,24,0.45)",
                backgroundColor: "rgba(255,239,24,0.08)",
                transform: "translateY(-2px)",
              },

              "&:focus": {
                color: "var(--color-white)",
              },
            }}
          >
            <Instagram />
          </IconButton>

          <IconButton
            href="https://www.facebook.com/latroupe.circo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de La Troupe"
            sx={{
              color: "var(--color-white)",
              width: 42,
              height: 42,
              border: "1px solid rgba(255,255,255,0.16)",
              backgroundColor: "rgba(255,255,255,0.04)",
              transition: "all var(--transition-fast)",

              "&:hover": {
                color: "var(--color-yellow)",
                borderColor: "rgba(255,239,24,0.45)",
                backgroundColor: "rgba(255,239,24,0.08)",
                transform: "translateY(-2px)",
              },

              "&:focus": {
                color: "var(--color-white)",
              },
            }}
          >
            <Facebook />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;