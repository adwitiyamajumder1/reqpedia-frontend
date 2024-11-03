import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: "8px",
  maxHeight: "80%",
  overflowY: "auto",
};

const AddCandidateModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-candidate-modal-title"
      aria-describedby="add-candidate-modal-description"
    >
      <Box sx={modalStyle}>
        {/* Close button in the top-right corner */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          id="add-candidate-modal-title"
          variant="h6"
          sx={{ fontSize: "1rem", mb: 2 }}
        >
          ADD CANDIDATE
        </Typography>

        <TextField
          label="Name"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />
        <TextField
          label="Email"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />
        <TextField
          label="Phone Number"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />
        <TextField
          label="Current CTC"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />
        <TextField
          label="Expected CTC"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />
        <TextField
          label="Years of Experience"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />
        <TextField
          label="Current Organization"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />
        <TextField
          label="Skillset"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />

        <Typography variant="subtitle1" sx={{ fontSize: "0.875rem", mb: 1 }}>
          Notice Status
        </Typography>
        <RadioGroup row>
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Yes"
            sx={{ fontSize: "0.875rem" }}
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="No"
            sx={{ fontSize: "0.875rem" }}
          />
        </RadioGroup>

        <TextField
          label="Notice Period"
          fullWidth
          sx={{ mb: 2, fontSize: "0.875rem" }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="contained" sx={{ fontSize: "0.875rem" }}>
            Submit
          </Button>
          <Button
            variant="outlined"
            sx={{ fontSize: "0.875rem" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddCandidateModal;
