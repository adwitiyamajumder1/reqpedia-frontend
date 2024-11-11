import React, { useState } from "react";
import {
  Grid,
  Card as MuiCard,
  CardContent,
  Typography,
  Button as MuiButton,
  Paper,
} from "@mui/material";
import {
  BarChart as RechartsBarChart,
  Bar,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import AddCandidateModal from "../Modals/AddCandidateModal";
import AddJobDescriptionModal from "../Modals/AddJDmodal";
import "./dashboard.css";
import { reportData, pieData } from "../../data/mockData";
import Header from "../../global/Headers";
import candidateGif from "../../assets/candidate.gif";
import jdGif from "../../assets/job.gif";
import reportGif from "../../assets/report.gif";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    } else {
      console.error("Navigation path is invalid.");
    }
  };

  const handleOpenModal = (type) => {
    if (type === "candidate" || type === "jobDescription") {
      setOpenModal(type);
    } else {
      console.error("Invalid modal type.");
    }
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Header title="Dashboard" subtitle="Navigation and Reports" />

      {/* Top Section: Cards */}
      <Grid
        container
        justifyContent="center"
        spacing={3}
        sx={{
          marginTop: "20px",
          backgroundColor: "#f5f5f5",
          marginBottom: "20px",
          marginLeft: "1px",
          height: "200px",
          width: "1342px",
        }}
      >
        {/* Candidates Card */}
        <Grid item xs={4}>
          <AddCandidateModal
            open={openModal === "candidate"}
            onClose={handleCloseModal}
          />
          <MuiCard
            className="card"
            sx={{
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <img
                src={candidateGif}
                alt="Candidates"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h6">Candidates</Typography>
              <MuiButton
                onClick={() => handleNavigation("/Candidates")}
                className="button view-candidates-button"
                aria-label="View Candidates"
              >
                View Candidates
              </MuiButton>
              <MuiButton
                onClick={() => handleOpenModal("candidate")}
                className="button add-candidate-button"
                sx={{ marginLeft: "10px" }}
                aria-label="Add Candidates"
              >
                Add Candidates
              </MuiButton>
            </CardContent>
          </MuiCard>
        </Grid>

        {/* Job Descriptions Card */}
        <Grid item xs={4}>
          <AddJobDescriptionModal
            open={openModal === "jobDescription"}
            onClose={handleCloseModal}
          />
          <MuiCard
            className="card"
            sx={{
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <img
                src={jdGif}
                alt="Job Descriptions"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h6">Job Descriptions</Typography>
              <MuiButton
                onClick={() => handleNavigation("/JobDescriptions")}
                className="button assigned-button"
                aria-label="View Job Descriptions"
              >
                View JD
              </MuiButton>
              <MuiButton
                onClick={() => handleOpenModal("jobDescription")}
                className="button add-jd-button"
                sx={{ marginLeft: "10px" }}
                aria-label="Add Job Description"
              >
                Add JD
              </MuiButton>
            </CardContent>
          </MuiCard>
        </Grid>

        {/* Reports Card */}
        <Grid item xs={4}>
          <MuiCard
            className="card"
            sx={{
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <img
                src={reportGif}
                alt="Reports"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h6">Reports</Typography>
              <MuiButton
                onClick={() => handleNavigation("/ReportsPage")}
                className="button candidates-report-button"
                aria-label="View Reports"
              >
                View Report
              </MuiButton>
            </CardContent>
          </MuiCard>
        </Grid>
      </Grid>

      {/* Bottom Section: Charts */}
      <Paper
        elevation={3}
        sx={{ marginTop: "20px", padding: "20px", backgroundColor: "#f5f5f5" }}
      >
        <Grid container spacing={3} justifyContent="center">
          {/* Bar Chart: Monthly Trends */}
          <Grid item xs={6}>
            <Typography variant="h6" textAlign="center">
              Monthly Trends
            </Typography>
            {reportData && reportData.length > 0 ? (
              <RechartsBarChart
                width={400}
                height={200}
                data={reportData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="jdsSent" fill="#8884d8" name="JDs Sent" />
                <Bar
                  dataKey="candidatesJoined"
                  fill="#82ca9d"
                  name="Candidates Joined"
                />
              </RechartsBarChart>
            ) : (
              <Typography textAlign="center" color="error">
                No data available for Monthly Trends.
              </Typography>
            )}
          </Grid>

          {/* Pie Chart */}
          <Grid item xs={6}>
            <Typography variant="h6" textAlign="center">
              Recent Updates
            </Typography>
            {pieData && pieData.length > 0 ? (
              <PieChart width={400} height={200}>
                <Pie
                  data={pieData}
                  cx={200}
                  cy={100}
                  outerRadius={80}
                  dataKey="value"
                  activeIndex={activeIndex}
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        index === 0
                          ? "#4CAF50"
                          : index === 1
                          ? "#FFEB3B"
                          : index === 2
                          ? "#FF9800"
                          : "#2196F3"
                      }
                      style={{
                        filter:
                          activeIndex === index ? "brightness(1.2)" : "none",
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            ) : (
              <Typography textAlign="center" color="error">
                No data available for Recent Updates.
              </Typography>
            )}
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ paddingLeft: "20px" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Dashboard;
