import React, { useEffect, useState } from 'react';
import CarTable from './CarTable';
import PieChartComponent from './PieChartComponent';
import StackedBarChartComponent from './StackedBarChartComponent';
import carsData from '../cars.json';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    setCarData(carsData.Cars);
  }, []);

  const getCarStatistics = () => {
    const stats = {};
    carData.forEach((car) => {
      if (!stats[car.Brand]) {
        stats[car.Brand] = { total: 0, value: 0, models: {} };
      }
      stats[car.Brand].total += 1;
      stats[car.Brand].value += car.Prc;
      if (!stats[car.Brand].models[car.Model]) {
        stats[car.Brand].models[car.Model] = 0;
      }
      stats[car.Brand].models[car.Model] += 1;
    });
    return stats;
  };

  const carStatistics = getCarStatistics();

  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <CarTable carStatistics={carStatistics} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <PieChartComponent carStatistics={carStatistics} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <StackedBarChartComponent carStatistics={carStatistics} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
