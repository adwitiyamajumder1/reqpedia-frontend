import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const drawerWidth = 240;

const ResponsiveDrawer = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the respective route
    setOpen(false); // Close the drawer after navigation
  };

  return (
    <div style={{ display: 'flex' }}>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Keep the component mounted for better performance
        }}
        sx={{
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
      >
        <Toolbar />
        <Divider />

        <List>
          <ListItem button onClick={() => handleNavigation('/dashboard')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button onClick={() => handleNavigation('/candidates')}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Candidate" />
          </ListItem>

          <ListItem button onClick={() => handleNavigation('/job-descriptions')}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Job Description" />
          </ListItem>

          <ListItem button onClick={() => handleNavigation('/reports')}>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default ResponsiveDrawer;
