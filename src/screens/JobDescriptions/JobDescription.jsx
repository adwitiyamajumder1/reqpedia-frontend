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
  Tooltip,
  TextField,
  InputAdornment,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../global/Headers";
import AddJobDescriptionModal from "../Modals/AddJDmodal"; // Import the modal component

const jobsData = [
  { id: "JD001", company: "Tech Corp", location: "New York, USA", employeeType: "Full-time", budget: "$80,000 - $120,000", experience: "5+ years" },
  { id: "JD002", company: "Innovate Ltd", location: "San Francisco, USA", employeeType: "Part-time", budget: "$60,000 - $90,000", experience: "3+ years" },
  { id: "JD003", company: "Future Solutions", location: "Chicago, USA", employeeType: "Contract", budget: "$70,000 - $100,000", experience: "4+ years" },
  { id: "JD004", company: "Global Tech", location: "Austin, USA", employeeType: "Full-time", budget: "$90,000 - $130,000", experience: "6+ years" },
  { id: "JD005", company: "Alpha Inc.", location: "Los Angeles, USA", employeeType: "Internship", budget: "$30,000 - $50,000", experience: "0-1 years" },
];

const JobDescriptionsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState(jobsData);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const filteredJobs = jobs.filter((job) =>
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle opening and closing the modal
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <Box sx={{ position: "relative" }}>
      <Header title="Job Descriptions" subtitle="Send and View Job Descriptions" />

      <Box
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" gutterBottom align="center" style={{ fontSize: "28px" }}>
          JOB DESCRIPTIONS
        </Typography>

        <TextField
          label="Search Job Descriptions"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ backgroundColor: "#fff" }}
          InputProps={{
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
                <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Company Name</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.id}</TableCell>
                  <TableCell>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-${job.id}-content`}
                        id={`panel-${job.id}-header`}
                      >
                        <Typography>{job.company}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Typography><strong>Location:</strong> {job.location}</Typography>
                          <Typography><strong>Employee Type:</strong> {job.employeeType}</Typography>
                          <Typography><strong>Expected Budget:</strong> {job.budget}</Typography>
                          <Typography><strong>Experience Required:</strong> {job.experience}</Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Assign Candidates" arrow>
                      <IconButton color="primary" aria-label="assign candidates">
                        <AssignmentIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit Job Description" arrow>
                      <IconButton color="primary" aria-label="edit job description">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="View Job Description" arrow>
                      <IconButton color="primary" aria-label="view job description">
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

      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
        }}
        onClick={handleModalOpen} // Open modal on FAB click
      >
        <AddIcon />
      </Fab>

      {/* AddJobDescriptionModal with visibility control */}
      <AddJobDescriptionModal open={isModalOpen} onClose={handleModalClose} />
    </Box>
  );
};

export default JobDescriptionsPage;
