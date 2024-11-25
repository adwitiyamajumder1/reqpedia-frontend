import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

const AddUserModal = ({ open, onClose, onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleAddUser = () => {
    onAddUser(formData); // Pass the data to parent
    setFormData({ name: "", email: "", password: "", role: "" }); // Reset form
    onClose(); // Close the modal
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="add-user-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="add-user-modal" variant="h6" sx={{ mb: 2 }}>
          Add User
        </Typography>

        {/* Name Field */}
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email ID"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        {/* Role Dropdown */}
        <TextField
          fullWidth
          select
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          sx={{ mb: 3 }}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Executive">Executive</MenuItem>
          <MenuItem value="Recruiter">Recruiter</MenuItem>
          <MenuItem value="Lead Recruiter">Lead Recruiter</MenuItem>
        </TextField>

        {/* Add Button */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleAddUser}
          disabled={!formData.name || !formData.email || !formData.password || !formData.role} // Disable if fields are empty
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
