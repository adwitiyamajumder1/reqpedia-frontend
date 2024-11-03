import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from "@mui/icons-material/Description";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [openReports, setOpenReports] = useState(false);
  const location = useLocation();

  const handleReportsClick = () => {
    setOpenReports(!openReports);
  };

  const iconColor = isCollapsed ? "#EC8305" : "#0774c0";
  const fontColor = isCollapsed ? "#EC8305" : "#0774c0";

  const getSelectedStyle = (path) => ({
    color: location.pathname === path ? "#EC8305" : fontColor,
    "& svg": {
      color: location.pathname === path ? "#EC8305" : iconColor,
    },
  });

  return (
    <Drawer
      variant="permanent"
      open={!isCollapsed}
      sx={{
        width: isCollapsed ? "60px" : "240px",
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: isCollapsed ? "60px" : "240px",
          transition: "width 0.3s",
          backgroundColor: "#FFFFFFFF",
          color: fontColor,
        },
      }}
    >
      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
        <MenuIcon style={{ color: iconColor }} />
      </IconButton>
      <List sx={{ padding: 0 }}>
        {/* General Dashboard Link */}
        <ListItem
          button
          component={Link}
          to="/dashboard"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            fontFamily: "'Source Serif 4', serif",
            fontWeight: "bold",
            "&:hover": {
              color: "#0774c0",
              "& svg": {
                color: "#0774c0",
              },
            },
            ...getSelectedStyle("/"),
          }}
        >
          <HomeOutlinedIcon />
          {!isCollapsed && <ListItemText primary="Dashboard" />}
        </ListItem>

        {/* Admin Dashboard Link */}
        <ListItem
          button
          component={Link}
          to="/dashboard-admin"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            fontFamily: "'Source Serif 4', serif",
            fontWeight: "bold",
            "&:hover": {
              color: "#0774c0",
              "& svg": {
                color: "#0774c0",
              },
            },
            ...getSelectedStyle("/dashboard-admin"),
          }}
        >
          <AdminPanelSettingsIcon />
          {!isCollapsed && <ListItemText primary="Admin Dashboard" />}
        </ListItem>

        {/* Candidates Link */}
        <ListItem
          button
          component={Link}
          to="/candidates"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            fontFamily: "'Source Serif 4', serif",
            fontWeight: "bold",
            "&:hover": {
              color: "#0774c0",
              "& svg": {
                color: "#0774c0",
              },
            },
            ...getSelectedStyle("/candidates"),
          }}
        >
          <PeopleOutlinedIcon />
          {!isCollapsed && <ListItemText primary="Candidates" />}
        </ListItem>

        {/* Job Descriptions Link */}
        <ListItem
          button
          component={Link}
          to="/JobDescriptions"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            fontFamily: "'Source Serif 4', serif",
            fontWeight: "bold",
            "&:hover": {
              color: "#0774c0",
              "& svg": {
                color: "#0774c0",
              },
            },
            ...getSelectedStyle("/JobDescriptions"),
          }}
        >
          <DescriptionIcon />
          {!isCollapsed && <ListItemText primary="Job Descriptions" />}
        </ListItem>

        {/* Reports */}
        <ListItem
          button
          component={Link}
          to="/ReportsPage"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            fontFamily: "'Source Serif 4', serif",
            fontWeight: "bold",
            "&:hover": {
              color: "#0774c0",
              "& svg": {
                color: "#0774c0",
              },
            },
            ...getSelectedStyle("/ReportsPage"),
          }}
        >
          <AssessmentIcon />
          {!isCollapsed && <ListItemText primary="Reports" />}
        </ListItem>
        {/* Reports */}
        <ListItem
          button
          component={Link}
          to="/ReportsForAdmins"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            fontFamily: "'Source Serif 4', serif",
            fontWeight: "bold",
            "&:hover": {
              color: "#0774c0",
              "& svg": {
                color: "#0774c0",
              },
            },
            ...getSelectedStyle("/ReportsForAdmins"),
          }}
        >
          <AssessmentIcon />
          {!isCollapsed && <ListItemText primary="Reports for Admin" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
