import React, { useState } from "react";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import CandidatesPage from "./screens/Candidates/Candidates";
import Dashboard from "./screens/Dashboard/dashboard";
import DashboardAdmin from "./screens/Admin/Dashboard/dashboardAdmin";
import JobDescriptionsPage from "./screens/JobDescriptions/JobDescription";
import Login from "./screens/loginPage/login";
import theme from "./global/theme";
import ReportsPage from "./screens/Reports/Reports";
import ProtectedRoute from "./ProtectedRoutes"; // Import ProtectedRoute
import ExistingUsersPage from "./screens/Admin/ExistingUsers/ExistingUsers";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  // Check if the current route is the login page ("/")
  const isLoginPage = location.pathname === "/";

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* Conditionally render Sidebar and Topbar if not on login page */}
        {!isLoginPage && (
          <>
            <Sidebar
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                transition: "margin-left 0.3s",
              }}
            >
              <Topbar isCollapsed={isCollapsed} />
              <Box sx={{ flexGrow: 1, p: 3 }}>
                <Routes>
                  {/* Protect the routes that require authentication */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/dashboard-admin"
                    element={
                      <ProtectedRoute>
                        <DashboardAdmin />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/candidates"
                    element={
                      <ProtectedRoute>
                        <CandidatesPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/ReportsPage"
                    element={
                      <ProtectedRoute>
                        <ReportsPage />
                      </ProtectedRoute>
                    }
                  />
                  {/* <Route
                    path="/CandidateReports"
                    element={
                      <ProtectedRoute>
                        <CandidateReportsPage />
                      </ProtectedRoute>
                    }
                  /> */}
                  <Route
                    path="/JobDescriptions"
                    element={
                      <ProtectedRoute>
                        <JobDescriptionsPage />
                      </ProtectedRoute>
                    }
                  />
                    <Route
                    path="/Existing-Users"
                    element={
                      <ProtectedRoute>
                        <ExistingUsersPage />
                      </ProtectedRoute>
                    }
                  />
                  {/* <Route
                    path="/ReportsForAdmins"
                    element={
                      <ProtectedRoute>
                        <ReportsForAdmins />
                      </ProtectedRoute>
                    }
                  /> */}
                  {/* <Route
                    path="/sign-up-recruiter"
                    element={<SignUpRecruiter />}
                  /> */}
                  {/* <Route path="/sign-up-admin" element={<SignUpAdmin />} /> */}
                </Routes>
              </Box>
            </Box>
          </>
        )}

        {/* Render the login page when on the login route */}
        {isLoginPage && (
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
