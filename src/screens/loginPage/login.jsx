import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImage from "../../assets/req.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dummyEmail = "test@example.com";
  const dummyPassword = "password123";

  const handleLogin = async (event) => {
    event.preventDefault();

    if (email === dummyEmail && password === dummyPassword) {
      localStorage.setItem("token", "dummyToken");
      navigate("/dashboard");
    } else {
      try {
        const response = await axios.post("http://localhost:8080/api/login", {
          email,
          password,
        });

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        }
      } catch (error) {
        setError("Invalid email or password. Please try again.");
        console.error("Login error:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFD7C4",
        }}
      >
        <img
          src={logoImage}
          alt="Company Logo"
          style={{ width: "70%", maxWidth: "400px" }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          backgroundColor: "#ffffff",
        }}
      >
        <Paper
          elevation={6}
          sx={{ padding: 4, maxWidth: "400px", width: "100%" }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 3, textAlign: "center" }}
          >
            Login to your account
          </Typography>

          {error && (
            <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
              {error}
            </Typography>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, padding: 1 }}
            >
              Login
            </Button>
          </form>

          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Don’t have an account? <a href="/register">Sign Up</a>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}

export default Login;
