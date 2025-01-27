import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";

const SuccessModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <MKTypography variant="h3" mb={1}>
              ¡Mensaje Enviado!
            </MKTypography>
      </DialogTitle>
      <DialogContent>
        <p style={{ color: "#333", fontSize: "16px" }}>
          Gracias por contactarnos. Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo pronto.
        </p>
      </DialogContent>
      <DialogActions>
        <MKButton onClick={handleClose} color="dark" variant="gradient">
          Cerrar
        </MKButton>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessModal;
