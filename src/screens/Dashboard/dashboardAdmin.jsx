import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DashboardAdmin = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* USERS card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                USERS
              </Typography>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add Recruiter
              </Button>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add Admin access
              </Button>
              <Button variant="contained" sx={{ mr: 1 }}>
                View Users
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Remaining cards unchanged */}
        {/* CANDIDATES card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                CANDIDATES
              </Typography>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add Candidate
              </Button>
              <Button variant="contained">View Candidates</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* JOB DESCRIPTIONS card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                JOB DESCRIPTIONS
              </Typography>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add JD
              </Button>
              <Button variant="contained">View JDs</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* JD ASSIGNMENT card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                JD ASSIGNMENT
              </Typography>
              <Button variant="contained" sx={{ mr: 1 }}>
                Candidates
              </Button>
              <Button variant="contained">Recruiters</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* REPORTS card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                REPORTS
              </Typography>
              <Button variant="contained" sx={{ mr: 1 }}>
                Candidate Reports
              </Button>
              <Button variant="contained" sx={{ mr: 1 }}>
                JD Reports
              </Button>
              <Button variant="contained">Recruiter Reports</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardAdmin;
