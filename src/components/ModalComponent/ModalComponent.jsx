import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ModalComponent({ open, onClose, title, children }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      closeAfterTransition
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: "16px", // Más redondeado
          boxShadow: 24,
          width: "80%",
          height: "85%", // Ocupa casi toda la pantalla
          overflow: "hidden", // Asegura que el contenido extra no salga
          display: "flex",
          flexDirection: "column",
          p: 3,
          outline: "none",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0", // Línea sutil para separar el header
            pb: 2,
          }}
        >
          <Typography
            id="modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#666" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Contenido del modal */}
        <Box
          sx={{
            flex: 1, // Hace que el contenido ocupe el espacio restante
            overflowY: "auto", // Scroll para contenido largo
            mt: 2,
            px: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalComponent;
