import React from "react";
import Grid from "@mui/material/Grid";
import RotatingCard from "../RotatingCard/index";
import RotatingCardFront from "../RotatingCard/RotatingCardFront";
import RotatingCardBack from "../RotatingCard/RotatingCardBack";
import MKBox from "../../MKBox";

const ClassCard = ({ frontImage, frontTitle, frontDescription, backImage, backTitle, backDescription, action }) => (
  <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
    <RotatingCard flipped={false}>
      <RotatingCardFront
        image={frontImage}
        title={frontTitle}
        description={frontDescription}
        sx={{
          backgroundPosition: "center top",
          transform: "translateY(-40%)",
        }}
      >
        <MKBox
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 197, 35, 0.5)",
            borderRadius: "8px",
            zIndex: -1,
          }}
        />
      </RotatingCardFront>
      <RotatingCardBack
        image={backImage}
        title={backTitle}
        description={backDescription}
        action={action}
      />
    </RotatingCard>
  </Grid>
);

export default ClassCard;
