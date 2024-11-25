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
  TextField,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../../global/Headers";
import AddUserModal from "../../Modals/AddUserModal";
import { usersData } from "../../../data/mockData";

const ExistingUsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Open and close functions for the modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Filter users based on the search term
  const filteredExistingUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Header title={"Existing Users"} subtitle="Manage Existing Users" />
      
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          padding: "8px",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          className="existing-users-heading"
        >
          EXISTING USERS
        </Typography>

        <TextField
          label="Search Existing Users"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            marginBottom: 2,
            backgroundColor: "white",
          }}
          InputProps={{
            style: { textAlign: "center" },
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
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  ID
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Name
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredExistingUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-${user.id}-content`}
                        id={`panel-${user.id}-header`}
                      >
                        <Typography>{user.name}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box>
                          <Typography>
                            <strong>ID:</strong> {user.id}
                          </Typography>
                          <Typography>
                            <strong>Phone:</strong> {user.phone}
                          </Typography>
                          <Typography>
                            <strong>Email:</strong> {user.email}
                          </Typography>
                          <Typography>
                            <strong>Role:</strong> {user.role}
                          </Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Assign JD">
                      <IconButton
                        sx={{
                          color: "#0774c0",
                          "&:hover": {
                            color: "#EC8305",
                          },
                        }}
                        aria-label="assign jd"
                      >
                        <AssignmentIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit">
                      <IconButton
                        sx={{
                          color: "#0774c0",
                          "&:hover": {
                            color: "#EC8305",
                          },
                        }}
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="View">
                      <IconButton
                        sx={{
                          color: "#0774c0",
                          "&:hover": {
                            color: "#EC8305",
                          },
                        }}
                        aria-label="view"
                      >
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

      {/* Floating Action Button to open the AddUserModal */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpenModal} // Set onClick to open modal
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
        }}
      >
        <AddIcon />
      </Fab>

      {/* AddUserModal component */}
      <AddUserModal open={isModalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default ExistingUsersPage;
