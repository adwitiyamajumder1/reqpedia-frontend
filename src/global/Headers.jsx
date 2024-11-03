import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5", // Light background for the header
        padding: "20px",
        borderBottom: "1px solid #ddd", // Border at the bottom
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#001F5B", // Deep blue color
          transition: "color 0.3s, text-shadow 0.3s", // Smooth transition for hover effect
          "&:hover": {
            color: "#001F5B", // Keep deep blue on hover
            textShadow: "0 0 10px #0774c0", // Shadow effect on hover
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#EC8305", // Subtitle color
          transition: "color 0.3s, text-shadow 0.3s", // Smooth transition for hover effect
          "&:hover": {
            color: "#EC8305", // Keep subtitle color on hover
            textShadow: "0 0 5px #FFAB7D", // Lighter shadow effect on hover
          },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
