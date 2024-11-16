import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";

const DashboardAdmin = () => {
  return (
    <Box
      sx={{ flexGrow: 1, p: 3, backgroundColor: "#f0f2f5", minHeight: "100vh" }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {/* USERS card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#e3f2fd", minHeight: "200px" }}>
            <CardContent>
              <PeopleIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <Typography variant="h6" gutterBottom>
                USERS
              </Typography>
              <Button variant="contained" sx={{ mr: 1, mt: 1 }}>
                Add Recruiter
              </Button>
              <Button variant="contained" sx={{ mr: 1, mt: 1 }}>
                Add Admin Access
              </Button>
              <Button variant="contained" sx={{ mr: 1, mt: 1 }}>
                View Users
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* CANDIDATES card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#fce4ec", minHeight: "200px" }}>
            <CardContent>
              <PersonAddIcon sx={{ fontSize: 40, color: "#d81b60" }} />
              <Typography variant="h6" gutterBottom>
                CANDIDATES
              </Typography>
              <Button variant="contained" sx={{ mr: 1, mt: 1 }}>
                Add Candidate
              </Button>
              <Button variant="contained" sx={{ mt: 1 }}>
                View Candidates
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* JOB DESCRIPTIONS card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#fff3e0", minHeight: "200px" }}>
            <CardContent>
              <AssignmentIcon sx={{ fontSize: 40, color: "#ff9800" }} />
              <Typography variant="h6" gutterBottom>
                JOB DESCRIPTIONS
              </Typography>
              <Button variant="contained" sx={{ mr: 1, mt: 1 }}>
                Add JD
              </Button>
              <Button variant="contained" sx={{ mt: 1 }}>
                View JDs
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* JD ASSIGNMENT card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#ede7f6", minHeight: "200px" }}>
            <CardContent>
              <AssignmentIcon sx={{ fontSize: 40, color: "#673ab7" }} />
              <Typography variant="h6" gutterBottom>
                JD ASSIGNMENT
              </Typography>
              <Button variant="contained" sx={{ mr: 1, mt: 1 }}>
                Candidates
              </Button>
              <Button variant="contained" sx={{ mt: 1 }}>
                Recruiters
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* REPORTS card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: "#e8f5e9", minHeight: "200px" }}>
            <CardContent>
              <ReportIcon sx={{ fontSize: 40, color: "#4caf50" }} />
              <Typography variant="h6" gutterBottom>
                REPORTS
              </Typography>
              <Button variant="contained" sx={{ mr: 1, mt: 1 }}>
                Candidate Reports
              </Button>
              <Button variant="contained" sx={{ mr: 1, mt: 1 }}>
                JD Reports
              </Button>
              <Button variant="contained" sx={{ mt: 1 }}>
                Recruiter Reports
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardAdmin;
