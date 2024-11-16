import React, { useState } from 'react';
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

// Sample data for candidates
const candidates = [
  {
    name: 'John Doe',
    id: '1234',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    qualification: 'MBA',
    experience: '5 years',
  },
  {
    name: 'Jane Smith',
    id: '5678',
    email: 'jane.smith@example.com',
    phone: '555-555-5555',
    qualification: 'PhD',
    experience: '8 years',
  },
  // Add more candidates here
];

const CandidatesPage = () => {
  return (
    <div style={{ position: 'relative', marginTop: '80px' }}> {/* Added marginTop to leave space for header */}
      {/* Heading */}
      <Typography variant="h4" gutterBottom>
        CANDIDATES
      </Typography>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell> {/* Added ID heading */}
              <TableCell>Name</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>{candidate.id}</TableCell> {/* Displaying ID */}
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
                        <Typography><strong>Email:</strong> {candidate.email}</Typography>
                        <Typography><strong>Phone:</strong> {candidate.phone}</Typography>
                        <Typography><strong>Qualification:</strong> {candidate.qualification}</Typography>
                        <Typography><strong>Experience:</strong> {candidate.experience}</Typography>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </TableCell>
                <TableCell align="right">
                  <IconButton color="primary" aria-label="assign jd">
                    <AssignmentIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="view">
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

export default CandidatesPage;
