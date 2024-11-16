import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { People, Description, BarChart, InsertChart } from '@mui/icons-material';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const cardStyle = {
    background: 'linear-gradient(to right, #BBE1FA, #2B8EBF)', // Uniform blue gradient background
    border: 'linear-gradient(45deg, #2B8EBF, #005DA2)', // Uniform blue border
    position: 'relative',
    padding: '1px',
    overflow: 'hidden',
    height: '250px',
    width: '100%',
    borderRadius: '0px', // Square edges
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const headingStyle = {
    color: '#FFFFFF', // Change heading color to white
    fontWeight: 'bold', // Bold font weight
    fontSize: '1.5rem', // Increase font size
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Add subtle shadow for depth
  };

  const reportData = [
    { name: 'Group A', value: 4000 },
    { name: 'Group B', value: 3000 },
    { name: 'Group C', value: 2000 },
    { name: 'Group D', value: 2780 },
    { name: 'Group E', value: 1890 },
  ];

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#FF8042', '#FFBB28', '#FFBB28', '#FF8042']; // Shades of orange for pie chart

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px' }}>
      <Grid container justifyContent="center" spacing={3} style={{ marginTop: '50px' }}>
        {/* Candidates Card */}
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '4px',
              background: 'linear-gradient(45deg, #2B8EBF, #005DA2)', // Uniform blue border
              zIndex: -1,
              borderRadius: '0px',
            }}></div>
            <CardContent>
              <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} style={{ height: '100%' }}>
                <Grid item container direction="row" alignItems="center" spacing={2}>
                  <Grid item>
                    <People fontSize="large" style={{ color: '#000000' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" style={headingStyle}>
                      Candidates
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#005DA2', color: '#FFFFFF', padding: '10px 20px', width: '150px', marginBottom: '10px' }}
                        onClick={() => alert("Add Candidates Clicked")}
                      >
                        Add Candidates
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#BBE1FA', color: '#000000', padding: '10px 20px', width: '150px' }}
                        onClick={() => alert("View Candidates Clicked")}
                      >
                        View Candidates
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Job Descriptions Card */}
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '4px',
              background: 'linear-gradient(45deg, #2B8EBF, #005DA2)', // Uniform blue border
              zIndex: -1,
              borderRadius: '0px',
            }}></div>
            <CardContent>
              <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} style={{ height: '100%' }}>
                <Grid item container direction="row" alignItems="center" spacing={2}>
                  <Grid item>
                    <Description fontSize="large" style={{ color: '#000000' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" style={headingStyle}>
                      Job Descriptions
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: '#005DA2', color: '#FFFFFF', padding: '10px 20px', width: '150px' }}
                    onClick={() => alert("Assigned Clicked")}
                  >
                    Assigned
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Reports Card */}
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '4px',
              background: 'linear-gradient(45deg, #2B8EBF, #005DA2)', // Uniform blue border
              zIndex: -1,
              borderRadius: '0px',
            }}></div>
            <CardContent>
              <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} style={{ height: '100%' }}>
                <Grid item container direction="row" alignItems="center" spacing={2}>
                  <Grid item>
                    <BarChart fontSize="large" style={{ color: '#000000' }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" style={headingStyle}>
                      Reports
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#005DA2', color: '#FFFFFF', padding: '10px 20px', width: '150px', marginBottom: '10px' }}
                        onClick={() => alert("Candidates Clicked")}
                      >
                        Candidates
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#BBE1FA', color: '#000000', padding: '10px 20px', width: '150px' }}
                        onClick={() => alert("J.D. Clicked")}
                      >
                        J.D.
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Cards for Charts */}
      <Grid container justifyContent="center" spacing={3} style={{ marginTop: '20px' }}>
        {/* Chart 1 Card (Bar Chart) */}
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '4px',
              background: 'linear-gradient(45deg, #2B8EBF, #005DA2)', // Uniform blue border
              zIndex: -1,
              borderRadius: '0px',
            }}></div>
            <CardContent>
              <RechartsBarChart width={300} height={150} data={reportData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#FF8042" />
              </RechartsBarChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Chart 2 Card (Pie Chart) */}
        <Grid item xs={3}>
          <Card
            variant="outlined"
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '4px',
              background: 'linear-gradient(45deg, #2B8EBF, #005DA2)', // Uniform blue border
              zIndex: -1,
              borderRadius: '0px',
            }}></div>
            <CardContent>
              <PieChart width={300} height={150}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#FFBB28"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
