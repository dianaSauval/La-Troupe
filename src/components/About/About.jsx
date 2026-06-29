import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MKTypography from "../MKTypography";
import { motion } from "framer-motion";
import circusImage from "../../assets/images/about.jpeg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const imageEnter = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
};

const textEnter = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
};

function About() {
  return (
    <Box
      component="section"
      id="escuela"
      sx={{
        position: "relative",
        py: { xs: 7, md: 10 },
        background:
          "radial-gradient(circle at 20% 20%, rgba(255, 239, 24, 0.08), transparent 28%), linear-gradient(135deg, #10131a 0%, #242a35 48%, #05070b 100%)",
        color: "#f5f5f0",
        overflow: "hidden",
      }}
    >
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <MKTypography
            component="p"
            align="center"
            sx={{
              color: "#ffef18",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            Desde 2013
          </MKTypography>

          <MKTypography
            component="h2"
            align="center"
            fontWeight="bold"
            sx={{
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
              mb: { xs: 4, md: 6 },
              letterSpacing: "-0.03em",
            }}
          >
            Acerca de{" "}
            <Box component="span" sx={{ color: "#ffef18" }}>
              La Troupe
            </Box>
          </MKTypography>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              variants={imageEnter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 18px 45px rgba(0, 0, 0, 0.35)",
                  border: "1px solid rgba(255,255,255,0.12)",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.35) 100%)",
                    pointerEvents: "none",
                  },
                }}
              >
                <Box
                  component="img"
                  src={circusImage}
                  alt="Escuela de circo La Troupe en Banfield"
                  sx={{
                    width: "100%",
                    height: { xs: "320px", md: "460px" },
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={textEnter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            >
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.055)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "24px",
                  p: { xs: 3, md: 4 },
                  boxShadow: "0 18px 45px rgba(0,0,0,0.22)",
                }}
              >
                <MKTypography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    lineHeight: 1.85,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  La Troupe Multiespacio, fundada en 2013, es una de las
                  escuelas de circo más grandes de Buenos Aires. Ofrecemos una
                  amplia variedad de clases que incluyen telas aéreas, trapecio,
                  acrobacia y talleres especializados.
                </MKTypography>

                <MKTypography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    lineHeight: 1.85,
                    mt: 2,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Además, brindamos la posibilidad de alquilar nuestros espacios
                  para eventos, fiestas infantiles y salas de ensayo.
                </MKTypography>

                <Box
                  sx={{
                    width: "72px",
                    height: "3px",
                    backgroundColor: "#ffef18",
                    borderRadius: "999px",
                    mt: 3,
                    mx: { xs: "auto", md: 0 },
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;