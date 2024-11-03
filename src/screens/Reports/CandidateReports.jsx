import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Header from "../../global/Headers";
function CandidateReports() {
  const [openRow, setOpenRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("daily");

  // Sample data
  const candidates = [
    {
      id: "C001",
      name: "John Doe",
      designation: "Software Engineer",
      jds: [
        { jdId: "JD101", title: "Frontend Developer", status: "Interviewed" },
        { jdId: "JD102", title: "Backend Developer", status: "Screened" },
      ],
    },
    {
      id: "C002",
      name: "Jane Smith",
      designation: "Data Analyst",
      jds: [{ jdId: "JD201", title: "Data Scientist", status: "Interviewed" }],
    },
  ];

  const handleRowClick = (rowId) => {
    setOpenRow(openRow === rowId ? null : rowId);
  };

  // Filter and search logic
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <Header
        title={"Candidate Reports"}
        subtitle="Add and View Candidate Reports"
      />
      {/* Grey Box around heading and table */}
      <Box
        sx={{
          backgroundColor: "#f0f0f0", // Light grey background
          padding: "20px",
          borderRadius: "8px",
          marginTop: "20px",
          marginBottom: "20px", // Rounded corners for aesthetics
        }}
      >
        {/* Center-aligned Heading */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontSize: "24px", fontWeight: "bold" }} // Adjust font size and make heading bold
        >
          CANDIDATE REPORTS
        </Typography>

        {/* Search and Filter Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          {/* Search Bar */}
          <TextField
            label="Search Candidate"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: "40%" }}
          />

          {/* Filter Dropdown */}
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel>Filter</InputLabel>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              label="Filter"
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Table Container */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell sx={{ fontWeight: "bold" }}>Candidate ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Candidate Name
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Designation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCandidates.map((candidate) => (
                <React.Fragment key={candidate.id}>
                  <TableRow>
                    <TableCell>
                      <IconButton onClick={() => handleRowClick(candidate.id)}>
                        {openRow === candidate.id ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell>{candidate.id}</TableCell>
                    <TableCell>{candidate.name}</TableCell>
                    <TableCell>{candidate.designation}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                    >
                      <Collapse
                        in={openRow === candidate.id}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Box margin={1}>
                          <Typography variant="h6">Assigned JDs</Typography>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell>JD ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Status</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {candidate.jds.map((jd) => (
                                <TableRow key={jd.jdId}>
                                  <TableCell>{jd.jdId}</TableCell>
                                  <TableCell>{jd.title}</TableCell>
                                  <TableCell>{jd.status}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default CandidateReports;
