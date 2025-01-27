import { useState } from "react";
import emailjs from "emailjs-com";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import MKBox from "../MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";
import SuccessModal from "../SuccessModal/SuccessModal"; // El componente modal

function FormSimple() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const [formErrors, setFormErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    terms: "",
  });

  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false); // Para el modal de éxito

  const handleChecked = () => {
    setChecked(!checked);
    // Limpiar el error de los términos y condiciones al hacer clic
    if (!checked) {
      setFormErrors((prevErrors) => ({ ...prevErrors, terms: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Limpiar el error del campo al cambiarlo
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    let errors = {};
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

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Si la validación falla, no enviamos el formulario
    }

    // Enviar el correo solo si la validación es correcta
    emailjs
      .send(
        "service_latroupe", // Service ID de EmailJS
        "template_hhg5u9d", // Template ID de EmailJS
        {
          from_name: formData.nombre,
          last_name: formData.apellido,
          user_email: formData.email,
          message: formData.mensaje,
        },
        "rp_Hg49zwIGylvXLF" // Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log("Correo enviado exitosamente:", response.status, response.text);
          setOpenModal(true); // Abrir el modal al enviar el mensaje
          setFormData({
            nombre: "",
            apellido: "",
            email: "",
            mensaje: "",
          });
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          alert("Hubo un error al enviar tu mensaje. Intenta nuevamente.");
        }
      );
  };

  return (
    <>
      <MKBox component="section" py={12}>
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Contáctanos
            </MKTypography>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" autoComplete="off" onSubmit={handleSubmit}>
              <MKBox p={3}>
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
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                    Enviar Mensaje
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>

      {/* Modal de éxito */}
      <SuccessModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}

export default FormSimple;
