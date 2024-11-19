import { Box, IconButton, InputBase, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import logoImage from "./req.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const navigate = useNavigate(); // For redirection

  // Handlers for profile menu
  const handleProfileClick = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleProfileMenuOption = (option) => {
    if (option === "Logout") {
      handleLogout();
    } else {
      console.log(`Selected: ${option}`);
    }
    handleProfileClose();
  };

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    navigate("/"); // Redirect to login page
  };

  // Placeholder handlers for Notifications and Settings
  const handleNotificationsClick = () => {
    alert("View notifications");
  };

  const handleSettingsClick = () => {
    alert("Open settings");
  };

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
        {/* Notifications Icon */}
        <IconButton
          sx={{
            color: "#ec8305",
            "&:hover": { color: "#0774c0" },
          }}
          onClick={handleNotificationsClick}
        >
          <NotificationsOutlinedIcon />
        </IconButton>

        {/* Settings Icon */}
        <IconButton
          sx={{
            color: "#ec8305",
            "&:hover": { color: "#0774c0" },
          }}
          onClick={handleSettingsClick}
        >
          <SettingsOutlinedIcon />
        </IconButton>

        {/* Profile Icon with Menu */}
        <IconButton
          sx={{
            color: "#ec8305",
            "&:hover": { color: "#0774c0" },
          }}
          onClick={handleProfileClick}
        >
          <PersonOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={profileMenuAnchor}
          open={Boolean(profileMenuAnchor)}
          onClose={handleProfileClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={() => handleProfileMenuOption("View Profile")}>
            View Profile
          </MenuItem>
          <MenuItem onClick={() => handleProfileMenuOption("Settings")}>
            Settings
          </MenuItem>
          <MenuItem onClick={() => handleProfileMenuOption("Logout")}>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
