import React from 'react';
import { TextField, Button, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    // Redirect to the dashboard on login button click
    navigate('/dashboard');
  };

  return (
    <Grid container style={{ minHeight: '100vh' }}>
      <Grid
        item
        xs={12}
        sm={6}
        style={{
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <IconButton style={{ height: '80px', width: '80px' }}>
          <AccountCircleIcon style={{ fontSize: '80px', color: '#000' }} /> 
        </IconButton>
        <Typography variant="h4" style={{ marginLeft: '10px', fontWeight: 'bold', color: '#000' }}>
          LOGO
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5F5F5',
          padding: '30px',
        }}
      >
        <Box width="80%" maxWidth="400px">
          <Typography variant="h4" style={{ marginBottom: '20px', color: '#000' }}>
            LOGIN
          </Typography>

          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            margin="normal"
            InputProps={{ style: { backgroundColor: '#E0E0E0' } }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            InputProps={{ style: { backgroundColor: '#E0E0E0' } }}
          />

          <Link href="#" variant="body2" style={{ display: 'block', marginTop: '10px', color: '#000' }}>
            Forgot Password?
          </Link>

          {/* Login Button */}
          <Button
            variant="contained"
            fullWidth
            size="large"
            style={{
              marginTop: '20px',
              backgroundColor: '#000000',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '10px 0',
            }}
            onClick={handleLogin} // Trigger redirect on click
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
