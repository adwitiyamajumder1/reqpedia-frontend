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
  Tooltip, // Import Tooltip from Material UI
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { candidates } from "../../data/mockData";
import Header from "../../global/Headers";
// Sample data for candidates

const CandidatesPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Filter candidates based on the search term
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Header title={"Candidates"} subtitle="Manage Candidates" />
      {/* Grey background for heading and table */}
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          padding: "8px",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h5" // Changed to a smaller variant
          gutterBottom
          align="center" // Align the heading in the center
          className="candidates-heading"
        >
          CANDIDATES
        </Typography>

        {/* Search Bar */}
        <TextField
          label="Search Candidates"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term on input change
          sx={{
            marginBottom: 2, // Add some margin at the bottom
            backgroundColor: "white", // Set background color to white
          }}
          InputProps={{
            style: {
              textAlign: "center", // Center align text in the input
            },
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Table */}
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
                          <Typography>
                            <strong>Referred by:</strong> {candidate.referredby}
                          </Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                  <TableCell align="right">
                    {/* Tooltip added to icons */}
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

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default CandidatesPage;
