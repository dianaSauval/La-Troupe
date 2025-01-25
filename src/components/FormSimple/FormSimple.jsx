import { useState } from "react";
import emailjs from "emailjs-com";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "../MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";

function FormSimple() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });
  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que los campos no estén vacíos
    if (!formData.nombre || !formData.mensaje || !formData.email) {
      alert("Por favor, llena todos los campos requeridos.");
      return;
    }

    if (!checked) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    // Verificando si el nombre y el mensaje están siendo enviados correctamente
    console.log(formData); // Esto es solo para ver los valores que están siendo enviados

    emailjs
      .send(
        "service_la_troupe", // Reemplaza con tu Service ID de EmailJS
        "template_hhg5u9d", // Reemplaza con tu Template ID de EmailJS
        {
          from_name: formData.nombre, // Asegúrate de usar "from_name" si en tu plantilla lo definiste así
          last_name: formData.apellido,
          user_email: formData.email,
          message: formData.mensaje,
        },
        "rp_Hg49zwIGylvXLF" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log(
            "Correo enviado exitosamente:",
            response.status,
            response.text
          );
          alert("Tu mensaje ha sido enviado exitosamente.");
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
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={10}
          lg={7}
          mx="auto"
          textAlign="center"
        >
          <MKTypography variant="h3" mb={1}>
            Contáctanos
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox
            width="100%"
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
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
                  <MKTypography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="dark"
                  >
                    Términos y Condiciones
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton
                  type="submit"
                  variant="gradient"
                  color="dark"
                  fullWidth
                >
                  Enviar Mensaje
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FormSimple;
