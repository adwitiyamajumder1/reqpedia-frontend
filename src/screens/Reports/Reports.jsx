import React, { useState, useEffect } from "react";
import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Avatar,
  Typography,
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Header from "../../global/Headers";
import "./Reports.css"; // Replace with the actual CSS file path
import { mockData, columnsForReports } from "../../data/mockData"; // Import mock data from separate file

const ReportsPage = () => {
  const [rowData, setRowData] = useState([]);
  const [expandedRowData, setExpandedRowData] = useState(null); // Track expanded row for profile names
  const [filter, setFilter] = useState("monthly");

  useEffect(() => {
    // Example of filtering logic
    const filteredData = mockData; // Replace with actual filtering logic based on `filter`
    setRowData(filteredData);
  }, [filter]);

  // Handle row click to expand and show profile names
  const handleRowClick = (params) => {
    setExpandedRowData(params.data); // Store the clicked row's data for showing profile details
  };

  // Define profile rendering logic
  const renderProfiles = (profiles) => {
    return profiles.map((profile) => (
      <Box key={profile.name} display="flex" alignItems="center" mb={1}>
        <Avatar
          alt={profile.name}
          src={profile.avatar}
          style={{ marginRight: "10px" }}
        />
        <span
          style={{
            color:
              profile.status === "joined"
                ? "green"
                : profile.status === "offered"
                ? "orange"
                : "black",
          }}
        >
          {profile.name}
        </span>
      </Box>
    ));
  };

  // Columns configuration

  // Legend component
  const Legend = () => (
    <Box
      display="flex"
      alignItems="center"
      mb={2}
      p={1}
      bgcolor="#f9f9f9"
      borderRadius="8px"
      boxShadow="0px 2px 8px rgba(0, 0, 0, 0.1)"
    >
      <Box display="flex" alignItems="center" mr={3}>
        <Box
          width={20}
          height={20}
          bgcolor="green"
          borderRadius="50%"
          mr={1.5}
          boxShadow="0px 2px 4px rgba(0, 128, 0, 0.4)"
        />
        <Typography variant="body2" fontWeight="bold" color="#333">
          Joined
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mr={3}>
        <Box
          width={20}
          height={20}
          bgcolor="orange"
          borderRadius="50%"
          mr={1.5}
          boxShadow="0px 2px 4px rgba(255, 165, 0, 0.4)"
        />
        <Typography variant="body2" fontWeight="bold" color="#333">
          Offered
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Header title="Reports" subtitle="View and manage reports" />
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          padding: "8px",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        {/* Date-based filtering options */}
        <FormControl sx={{ m: 2, minWidth: 150 }}>
          <InputLabel id="filter-label">Filter By</InputLabel>
          <Select
            labelId="filter-label"
            value={filter}
            label="Filter By"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="quarterly">Quarterly</MenuItem>
            <MenuItem value="half-yearly">Half Yearly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
        </FormControl>

        <div
          className="ag-theme-alpine custom-grid"
          style={{ height: 400, width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnsForReports}
            pagination={true}
            paginationPageSize={10}
            onRowClicked={handleRowClick} // Row click event handler
          />
        </div>

        {/* Expanded Row: Profile details */}
        {expandedRowData && (
          <Box mt={2} p={2} border="1px solid #ddd" borderRadius="4px">
            <h3>Profiles for {expandedRowData.jdDescription}</h3>
            {/* Legend */}
            <Legend />
            {renderProfiles(expandedRowData.profiles)}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ReportsPage;
