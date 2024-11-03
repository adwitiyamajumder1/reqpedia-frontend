import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import logoImage from "./req.png"; // Adjust the path if needed

const Topbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "10px 10px",
      }}
    >
      {/* LOGO */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={logoImage}
          alt="Logo"
          style={{ height: "50px", width: "auto" }}
        />
      </Box>

      {/* SEARCH BAR */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #f5eded",
          borderRadius: "5px",
          backgroundColor: "white",
          transition: "box-shadow 0.3s ease",
          "&:hover": { boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" },
        }}
      >
        <InputBase
          placeholder="Search"
          sx={{ padding: "5px 10px", color: "#333", width: "200px" }}
        />
        <IconButton sx={{ backgroundColor: "transparent", color: "#5e596b" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box sx={{ display: "flex", gap: "15px" }}>
        {[
          NotificationsOutlinedIcon,
          SettingsOutlinedIcon,
          PersonOutlinedIcon,
        ].map((Icon, index) => (
          <IconButton
            key={index}
            sx={{
              color: "#ec8305",
              "&:hover": {
                color: "#0774c0",
              },
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Topbar;
