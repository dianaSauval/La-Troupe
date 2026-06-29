import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

import MKBox from "../MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";
import SuccessModal from "../SuccessModal/SuccessModal";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

function assertEnv(name, value) {
  if (!value) {
    console.warn(`[ENV] Falta configurar ${name} en tu .env`);
  }
}

assertEnv("REACT_APP_EMAILJS_SERVICE_ID", EMAILJS_SERVICE_ID);
assertEnv("REACT_APP_EMAILJS_TEMPLATE_ID", EMAILJS_TEMPLATE_ID);
assertEnv("REACT_APP_EMAILJS_PUBLIC_KEY", EMAILJS_PUBLIC_KEY);
assertEnv("REACT_APP_RECAPTCHA_SITE_KEY", RECAPTCHA_SITE_KEY);

const inputSx = {
  "& label": {
    color: "rgba(16,19,26,0.62)",
  },

  "& label.Mui-focused": {
    color: "var(--color-dark)",
  },

  "& .MuiInputBase-input": {
    color: "var(--color-dark)",
  },

  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(16,19,26,0.22)",
  },

  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "rgba(16,19,26,0.45)",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--color-yellow-soft)",
  },

  "& .MuiFormHelperText-root": {
    marginLeft: 0,
  },
};

function FormSimple() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    website: "",
  });

  const [formErrors, setFormErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    terms: "",
    recaptcha: "",
  });

  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const handleChecked = () => {
    setChecked((prev) => !prev);

    if (!checked) {
      setFormErrors((prev) => ({ ...prev, terms: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.nombre) {
      errors.nombre = "Este campo es obligatorio.";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Este campo es obligatorio.";
      isValid = false;
    }

    if (!formData.mensaje) {
      errors.mensaje = "Este campo es obligatorio.";
      isValid = false;
    }

    if (!checked) {
      errors.terms = "Debes aceptar los términos y condiciones.";
      isValid = false;
    }

    if (!recaptchaToken) {
      errors.recaptcha = "Por favor, completá el reCAPTCHA.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.website) return;
    if (!validateForm()) return;

    try {
      setLoading(true);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nombre,
          last_name: formData.apellido,
          user_email: formData.email,
          message: formData.mensaje,
          "g-recaptcha-response": recaptchaToken,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setOpenModal(true);

      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: "",
        website: "",
      });

      setChecked(false);
      setRecaptchaToken("");
      recaptchaRef.current?.reset();

      setFormErrors({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: "",
        terms: "",
        recaptcha: "",
      });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MKBox
        component="section"
        id="contacto"
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "var(--color-white-soft)",
          color: "var(--color-dark)",
        }}
      >
        <Container>
          <MKBox
            sx={{
              maxWidth: "760px",
              mx: "auto",
              textAlign: "center",
              mb: { xs: 4, md: 5 },
            }}
          >
            <MKTypography
              component="p"
              sx={{
                color: "var(--color-yellow-soft)",
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Consultas e inscripciones
            </MKTypography>

            <MKTypography
              component="h2"
              sx={{
                color: "var(--color-dark)",
                fontSize: {
                  xs: "2.4rem",
                  sm: "3rem",
                  md: "3.6rem",
                },
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                mb: 2,
              }}
            >
              Contactanos
            </MKTypography>

            <MKTypography
              sx={{
                color: "rgba(16,19,26,0.68)",
                fontSize: {
                  xs: "1rem",
                  md: "1.12rem",
                },
                lineHeight: 1.75,
                maxWidth: "680px",
                mx: "auto",
              }}
            >
              Escribinos para consultar por clases, horarios, alquiler de salas
              o actividades especiales.
            </MKTypography>
          </MKBox>

          <MKBox
            sx={{
              width: "100%",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            <MKBox
              width="100%"
              component="form"
              autoComplete="off"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid rgba(16,19,26,0.1)",
                borderRadius: "24px",
                boxShadow: "0 18px 45px rgba(16,19,26,0.12)",
              }}
            >
              <MKBox p={{ xs: 3, md: 4 }}>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Nombre"
                      fullWidth
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      error={!!formErrors.nombre}
                      helperText={formErrors.nombre}
                      sx={inputSx}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Apellido"
                      fullWidth
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      error={!!formErrors.apellido}
                      helperText={formErrors.apellido}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      type="email"
                      label="Email"
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                      sx={inputSx}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Mensaje"
                      multiline
                      fullWidth
                      rows={6}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      error={!!formErrors.mensaje}
                      helperText={formErrors.mensaje}
                      sx={inputSx}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <MKBox
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.25rem",
                      }}
                    >
                      <Switch
                        checked={checked}
                        onChange={handleChecked}
                        sx={{
                          "& .MuiSwitch-switchBase": {
                            color: "rgba(16,19,26,0.42)",
                          },

                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "var(--color-yellow-soft)",
                          },

                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "var(--color-yellow-soft)",
                              opacity: 0.65,
                            },

                          "& .MuiSwitch-track": {
                            backgroundColor: "rgba(16,19,26,0.28)",
                          },

                          "& .MuiSwitch-switchBase.Mui-focusVisible .MuiSwitch-thumb":
                            {
                              color: "var(--color-yellow-soft)",
                            },
                        }}
                      />

                      <MKTypography
                        variant="button"
                        fontWeight="regular"
                        sx={{
                          color: "rgba(16,19,26,0.72)",
                          cursor: "pointer",
                          userSelect: "none",
                        }}
                        onClick={handleChecked}
                      >
                        Acepto los
                      </MKTypography>

                      <MKTypography
                        component="a"
                        href="#"
                        variant="button"
                        fontWeight="bold"
                        sx={{
                          color: "var(--color-dark)",
                          textDecoration: "underline",
                          textDecorationColor: "var(--color-yellow-soft)",
                          textUnderlineOffset: "4px",

                          "&:hover": {
                            color: "var(--color-yellow-soft)",
                          },

                          "&:focus": {
                            color: "var(--color-dark)",
                          },

                          "&:active": {
                            color: "var(--color-dark)",
                          },
                        }}
                      >
                        Términos y Condiciones
                      </MKTypography>
                    </MKBox>

                    {formErrors.terms && (
                      <MKTypography variant="body2" color="error" mt={1}>
                        {formErrors.terms}
                      </MKTypography>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <MKBox
                      sx={{
                        transform: { xs: "scale(0.9)", sm: "scale(1)" },
                        transformOrigin: "left center",
                      }}
                    >
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY || ""}
                        onChange={(token) => {
                          setRecaptchaToken(token || "");

                          if (token) {
                            setFormErrors((prev) => ({
                              ...prev,
                              recaptcha: "",
                            }));
                          }
                        }}
                      />
                    </MKBox>

                    {formErrors.recaptcha && (
                      <MKTypography variant="body2" color="error" mt={1}>
                        {formErrors.recaptcha}
                      </MKTypography>
                    )}
                  </Grid>
                </Grid>

                <Grid container justifyContent="center" xs={12} mt={3}>
                  <MKButton
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={{
                      backgroundColor: "var(--color-dark) !important",
                      color: "var(--color-white) !important",
                      borderRadius: "var(--radius-pill)",
                      py: 1.2,
                      fontWeight: 800,
                      boxShadow: "none !important",
                      transition: "all var(--transition-fast)",
                      textTransform: "none",

                      "&:hover": {
                        backgroundColor: "var(--color-black) !important",
                        color: "var(--color-yellow) !important",
                        boxShadow: "none !important",
                      },

                      "&:focus": {
                        backgroundColor: "var(--color-dark) !important",
                        color: "var(--color-white) !important",
                        boxShadow: "none !important",
                      },

                      "&:active": {
                        backgroundColor: "var(--color-dark) !important",
                        color: "var(--color-white) !important",
                        boxShadow: "none !important",
                      },

                      "&.Mui-focusVisible": {
                        backgroundColor: "var(--color-dark) !important",
                        color: "var(--color-white) !important",
                        outline: "2px solid var(--color-yellow-soft)",
                        outlineOffset: "3px",
                        boxShadow: "none !important",
                      },

                      "&.Mui-disabled": {
                        backgroundColor: "rgba(16,19,26,0.28) !important",
                        color: "rgba(255,255,255,0.7) !important",
                      },
                    }}
                  >
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Container>
      </MKBox>

      <SuccessModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}

export default FormSimple;
