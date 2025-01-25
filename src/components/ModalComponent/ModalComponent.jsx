import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

function ModalComponent({ open, onClose, sala }) {
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
          borderRadius: "16px",
          boxShadow: 24,
          width: { xs: "90%", sm: "80%", md: "70%" },
          maxHeight: "90%",
          display: "flex",
          flexDirection: "column",
          p: 2,
          outline: "none",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            pb: 2,
          }}
        >
          <Typography
            id="modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            {sala.name}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#666" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Contenido */}
        <Box
          sx={{
            flex: 1,
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "auto",
          }}
        >
          <ImageCarousel images={sala.images} description={sala.description} />
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalComponent;

