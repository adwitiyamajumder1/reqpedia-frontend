import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Paper,
  Box,
  Fab,
  TextField,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { candidates } from "../../data/mockData";
import Header from "../../global/Headers";
import AddCandidateModal from "../Modals/AddCandidateModal";
const CandidatesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Open and close functions for the modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Header title={"Candidates"} subtitle="Manage Candidates" />
      
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          padding: "8px",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          className="candidates-heading"
        >
          CANDIDATES
        </Typography>

        <TextField
          label="Search Candidates"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            marginBottom: 2,
            backgroundColor: "white",
          }}
          InputProps={{
            style: { textAlign: "center" },
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  ID
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Name
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCandidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>{candidate.id}</TableCell>
                  <TableCell>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-${candidate.id}-content`}
                        id={`panel-${candidate.id}-header`}
                      >
                        <Typography>{candidate.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Typography>
                            <strong>Email:</strong> {candidate.email}
                          </Typography>
                          <Typography>
                            <strong>Phone:</strong> {candidate.phone}
                          </Typography>
                          <Typography>
                            <strong>Qualification:</strong>{" "}
                            {candidate.qualification}
                          </Typography>
                          <Typography>
                            <strong>Experience:</strong> {candidate.experience}
                          </Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Assign JD">
                      <IconButton
                        sx={{
                          color: "#0774c0",
                          "&:hover": {
                            color: "#EC8305",
                          },
                        }}
                        aria-label="assign jd"
                      >
                        <AssignmentIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit">
                      <IconButton
                        sx={{
                          color: "#0774c0",
                          "&:hover": {
                            color: "#EC8305",
                          },
                        }}
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="View">
                      <IconButton
                        sx={{
                          color: "#0774c0",
                          "&:hover": {
                            color: "#EC8305",
                          },
                        }}
                        aria-label="view"
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Floating Action Button to open the AddCandidateModal */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpenModal} // Set onClick to open modal
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
        }}
      >
        <AddIcon />
      </Fab>

      {/* AddCandidateModal component */}
      <AddCandidateModal open={isModalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default CandidatesPage;
