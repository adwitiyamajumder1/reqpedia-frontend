import React, { useState } from 'react';
import { Card, Grid, Typography, Collapse, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const JDReportsPage = () => {
  const [openCard, setOpenCard] = useState(null);

  // Updated mock data for JDs and candidates
  const mockData = {
    sentJDs: [
      { jdId: 'JD101', candidate: 'John Doe', status: 'Interviewed' },
      { jdId: 'JD102', candidate: 'Jane Smith', status: 'Pending' },
      { jdId: 'JD103', candidate: 'Alice Johnson', status: 'Screened' },
    ],
    screenedCandidates: [
      { jdId: 'JD101', candidate: 'John Doe', status: 'Screened' },
      { jdId: 'JD103', candidate: 'Alice Johnson', status: 'Screened' },
      { jdId: 'JD104', candidate: 'Bob Williams', status: 'Screened' },
    ],
    interviewedCandidates: [
      { jdId: 'JD101', candidate: 'John Doe', status: 'Interviewed' },
      { jdId: 'JD105', candidate: 'Charlie Brown', status: 'Interviewed' },
    ],
    pendingJDs: [
      { jdId: 'JD102', candidate: 'Jane Smith', status: 'Pending' },
      { jdId: 'JD106', candidate: 'Diana Prince', status: 'Pending' },
    ],
  };

  const handleCardClick = (card) => {
    setOpenCard(openCard === card ? null : card);
  };

  const renderCollapsibleTable = (data) => (
    <Collapse in={!!openCard}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>JD ID</TableCell>
            <TableCell>Candidate</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.jdId}</TableCell>
              <TableCell>{item.candidate}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Collapse>
  );

  // Bar chart data
  const chartData = {
    labels: ['Sent JDs', 'Screened Candidates', 'Interviewed Candidates', 'Pending JDs'],
    datasets: [
      {
        label: 'Number of Entries',
        data: [
          mockData.sentJDs.length,
          mockData.screenedCandidates.length,
          mockData.interviewedCandidates.length,
          mockData.pendingJDs.length,
        ],
        backgroundColor: ['#7FA1C3', '#FFD7C4', '#A1C4FD', '#FDBD7F'],
      },
    ],
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>Reports</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card onClick={() => handleCardClick('sentJDs')} style={{ padding: 20 }}>
            <Typography variant="h6" align="center">Sent JDs</Typography>
            <Typography variant="subtitle1" align="center">
              Total: {mockData.sentJDs.length}
            </Typography>
          </Card>
          {openCard === 'sentJDs' && renderCollapsibleTable(mockData.sentJDs)}
        </Grid>
        <Grid item xs={3}>
          <Card onClick={() => handleCardClick('screenedCandidates')} style={{ padding: 20 }}>
            <Typography variant="h6" align="center">Candidates Screened</Typography>
            <Typography variant="subtitle1" align="center">
              Total: {mockData.screenedCandidates.length}
            </Typography>
          </Card>
          {openCard === 'screenedCandidates' && renderCollapsibleTable(mockData.screenedCandidates)}
        </Grid>
        <Grid item xs={3}>
          <Card onClick={() => handleCardClick('interviewedCandidates')} style={{ padding: 20 }}>
            <Typography variant="h6" align="center">Candidates Interviewed</Typography>
            <Typography variant="subtitle1" align="center">
              Total: {mockData.interviewedCandidates.length}
            </Typography>
          </Card>
          {openCard === 'interviewedCandidates' && renderCollapsibleTable(mockData.interviewedCandidates)}
        </Grid>
        <Grid item xs={3}>
          <Card onClick={() => handleCardClick('pendingJDs')} style={{ padding: 20 }}>
            <Typography variant="h6" align="center">Pending JDs</Typography>
            <Typography variant="subtitle1" align="center">
              Total: {mockData.pendingJDs.length}
            </Typography>
          </Card>
          {openCard === 'pendingJDs' && renderCollapsibleTable(mockData.pendingJDs)}
        </Grid>
      </Grid>

      {/* Bar Graph */}
      <div style={{ marginTop: 40 }}>
        <Typography variant="h5" gutterBottom>JD Status Overview</Typography>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default JDReportsPage;
