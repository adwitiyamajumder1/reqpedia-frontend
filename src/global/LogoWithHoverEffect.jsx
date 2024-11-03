// LogoWithHoverEffect.jsx
import React from "react";
import { Box } from "@mui/material";

const LogoWithHoverEffect = ({ logoImage }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "50px", // Set the height of the logo container
        width: "auto", // Auto width for responsive logo
        overflow: "hidden",
        "&:hover::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(to right, #EC8305 10%, #0774c0 10%)`,
          zIndex: 1,
          transition: "background 0.3s ease",
        },
      }}
    >
      <img
        src={logoImage}
        alt="Logo"
        style={{
          height: "100%", // Adjust logo height to fit the container
          width: "auto", // Maintain aspect ratio
          position: "relative",
          zIndex: 2, // Keep the image above the overlay
        }}
      />
    </Box>
  );
};

export default LogoWithHoverEffect;
