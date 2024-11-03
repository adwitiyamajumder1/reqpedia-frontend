import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AddJobDescriptionModal = ({ open, onClose }) => {
  // Inline styles for the modal box
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h5" mb={2} align="center">
          Add JD
        </Typography>

        <Grid container spacing={2}>
          {/* Key Experience */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Key Experience"
              variant="outlined"
              required
            />
          </Grid>

          {/* Years of Experience */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Years of Experience"
              variant="outlined"
              type="number"
              required
            />
          </Grid>

          {/* Location */}
          <Grid item xs={12}>
            <TextField fullWidth label="Location" variant="outlined" required />
          </Grid>

          {/* Expected Budget */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Expected Budget"
              variant="outlined"
              type="number"
              required
            />
          </Grid>

          {/* Company Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Name"
              variant="outlined"
              required
            />
          </Grid>

          {/* Shift Timings */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Shift Timings"
              variant="outlined"
              required
            />
          </Grid>

          {/* Employee Type */}
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Employee Type</InputLabel>
              <Select label="Employee Type" required>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Buttons */}
          <Grid item xs={12} display="flex" justifyContent="space-between">
            {/* Cancel Button */}
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Cancel
            </Button>

            {/* Upload JD Button */}
            <Button variant="contained" component="label" color="info">
              Upload JD
              <input type="file" hidden />
            </Button>

            {/* Submit Button */}
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default AddJobDescriptionModal;
