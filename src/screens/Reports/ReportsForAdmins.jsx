import React, { useState, useEffect } from "react";
import {
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Avatar,
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Header from "../../global/Headers";
import "./Reports.css"; // Replace with the actual CSS file path
import {
  mockDataForReportsAdmin,
  mockDataForReportsAdmincolumnsForReports,
} from "../../data/mockData"; // Import mock data from separate file

const ReportsForAdmins = () => {
  const [rowData, setRowData] = useState([]);
  const [expandedRowData, setExpandedRowData] = useState(null); // Track expanded row for profile names
  const [filter, setFilter] = useState("monthly");

  useEffect(() => {
    const filteredData = mockDataForReportsAdmin; // Replace with actual filtering logic based on `filter`
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
  const columns = [
    { headerName: "JD No.", field: "jdNo", sortable: true, filter: true },
    {
      headerName: "JD Description",
      field: "jdDescription",
      sortable: true,
      filter: true,
    },
    {
      headerName: "No of profiles submitted",
      field: "profilesSubmitted",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Recruiter",
      field: "recruiter",
      sortable: true,
      filter: true,
    },
    {
      headerName: "No of profiles under discussion",
      field: "profilesUnderDiscussion",
      sortable: true,
      filter: true,
    },
    { headerName: "Offered", field: "offered", sortable: true, filter: true },
    { headerName: "Joined", field: "joined", sortable: true, filter: true },
    {
      headerName: "%age profile selected",
      field: "selectedPercentage",
      valueGetter: (params) => {
        const { offered, profilesSubmitted } = params.data;
        return ((offered / profilesSubmitted) * 100).toFixed(2) + "%";
      },
      sortable: true,
      filter: true,
    },
    {
      headerName: "%age profile rejected",
      field: "rejectedPercentage",
      valueGetter: (params) => {
        const { profilesSubmitted, joined } = params.data;
        const rejected = profilesSubmitted - joined;
        return ((rejected / profilesSubmitted) * 100).toFixed(2) + "%";
      },
      sortable: true,
      filter: true,
    },
  ];

  return (
    <Box>
      <Header title="Reports" subtitle="View and manage reports" />

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
          columnDefs={columns}
          pagination={true}
          paginationPageSize={10}
          onRowClicked={handleRowClick} // Row click event handler
        />
      </div>

      {/* Expanded Row: Profile details */}
      {expandedRowData && (
        <Box mt={2} p={2} border="1px solid #ddd" borderRadius="4px">
          <h3>Profiles for {expandedRowData.jdDescription}</h3>
          {renderProfiles(expandedRowData.profiles)}
        </Box>
      )}
    </Box>
  );
};

export default ReportsForAdmins;
