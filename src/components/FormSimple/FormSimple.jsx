import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import MKBox from "../MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";
import SuccessModal from "../SuccessModal/SuccessModal";

// --- Variables de entorno (Vite) ---
const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_SITE_KEY  = process.env.REACT_APP_RECAPTCHA_SITE_KEY;


// (Opcional) helper para avisar si falta algo
function assertEnv(name, value) {
  if (!value) {
    // Podés cambiar alert por console.warn si preferís
    console.warn(`[ENV] Falta configurar ${name} en tu .env (VITE_...)`);
  }
}
assertEnv("VITE_EMAILJS_SERVICE_ID", EMAILJS_SERVICE_ID);
assertEnv("VITE_EMAILJS_TEMPLATE_ID", EMAILJS_TEMPLATE_ID);
assertEnv("VITE_EMAILJS_PUBLIC_KEY", EMAILJS_PUBLIC_KEY);
assertEnv("VITE_RECAPTCHA_SITE_KEY", RECAPTCHA_SITE_KEY);

function FormSimple() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    website: "", // honeypot
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
    setChecked(!checked);
    if (!checked) setFormErrors((prev) => ({ ...prev, terms: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.nombre) { errors.nombre = "Este campo es obligatorio."; isValid = false; }
    if (!formData.email) { errors.email = "Este campo es obligatorio."; isValid = false; }
    if (!formData.mensaje) { errors.mensaje = "Este campo es obligatorio."; isValid = false; }
    if (!checked) { errors.terms = "Debes aceptar los términos y condiciones."; isValid = false; }
    if (!recaptchaToken) { errors.recaptcha = "Por favor, completá el reCAPTCHA."; isValid = false; }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website) return; // honeypot
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
        EMAILJS_PUBLIC_KEY
      );

      setOpenModal(true);
      setFormData({ nombre: "", apellido: "", email: "", mensaje: "", website: "" });
      setChecked(false);
      setRecaptchaToken("");
      recaptchaRef.current?.reset();
      setFormErrors({ nombre: "", apellido: "", email: "", mensaje: "", terms: "", recaptcha: "" });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>Contáctanos</MKTypography>
          </Grid>

          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" autoComplete="off" onSubmit={handleSubmit}>
              <MKBox p={3}>
                {/* Honeypot oculto */}
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
                    />
                  </Grid>

                  {/* Checkbox términos */}
                  <Grid item xs={12} alignItems="center" ml={-1}>
                    <Switch checked={checked} onChange={handleChecked} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      onClick={handleChecked}
                    >
                      &nbsp;&nbsp;Acepto los&nbsp;
                    </MKTypography>
                    <MKTypography component="a" href="#" variant="button" fontWeight="regular" color="dark">
                      Términos y Condiciones
                    </MKTypography>
                    {formErrors.terms && (
                      <MKTypography variant="body2" color="error" mt={1}>
                        {formErrors.terms}
                      </MKTypography>
                    )}
                  </Grid>

                  {/* reCAPTCHA V2 */}
                  <Grid item xs={12}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY || ""}
                      onChange={(token) => {
                        setRecaptchaToken(token || "");
                        if (token) setFormErrors((prev) => ({ ...prev, recaptcha: "" }));
                      }}
                    />
                    {formErrors.recaptcha && (
                      <MKTypography variant="body2" color="error" mt={1}>
                        {formErrors.recaptcha}
                      </MKTypography>
                    )}
                  </Grid>
                </Grid>

                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton type="submit" variant="gradient" color="dark" fullWidth disabled={loading}>
                    Enviar Mensaje
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>

      <SuccessModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}

export default FormSimple;
