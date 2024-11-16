import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Box, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PaletteIcon from '@mui/icons-material/Palette';
// import logo from '../assets/logo.png'; // Adjust the path to where your logo is stored

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left: Company Logo */}
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* <img src={logo} alt="Company Logo" style={{ width: '40px', height: '40px' }} /> */}
          </IconButton>
          <Typography variant="h6" component="div">
            Company Name
          </Typography>
        </Box>

        {/* Right: User Profile */}
        <Box display="flex" alignItems="center">
          {/* User Profile Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="profile"
            onClick={handleProfileMenuOpen}
          >
            <Avatar alt="User Profile" src="/path-to-profile-image.jpg" /> {/* Replace with profile image */}
          </IconButton>
          
          {/* Profile Menu Dropdown */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleProfileMenuClose}
            onClick={handleProfileMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar /> Profile Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <PaletteIcon fontSize="small" />
              </ListItemIcon>
              Change Theme Color
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Account Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Log Out
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
