import React from 'react';
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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';

// Sample data for jobs
const jobs = [
  {
    id: 'JD001',
    company: 'Tech Corp',
    location: 'New York, USA',
    employeeType: 'Full-time',
    budget: '$80,000 - $120,000',
    experience: '5+ years',
  },
  {
    id: 'JD002',
    company: 'Innovate Ltd',
    location: 'San Francisco, USA',
    employeeType: 'Part-time',
    budget: '$60,000 - $90,000',
    experience: '3+ years',
  },
  // Add more job descriptions here
];

const JobDescriptionsPage = () => {
  return (
    <div style={{ position: 'relative', marginTop: '80px' }}> {/* Adjust marginTop if header is present */}
      {/* Heading */}
      <Typography variant="h4" gutterBottom>
        JOB DESCRIPTIONS
      </Typography>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
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
                  <IconButton color="primary" aria-label="assign candidates">
                    <AssignmentIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="edit job description">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="view job description">
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default JobDescriptionsPage;
