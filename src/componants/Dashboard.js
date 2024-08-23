import React from 'react';
import CarTable from './CarTable';
import PieChartComponent from './PieChartComponent';
import StackedBarChartComponent from './StackedBarChartComponent';
import carsData from '../cars.json';

function Dashboard() {
  const brands = {};

  carsData.forEach(car => {
    if (!brands[car.brand]) {
      brands[car.brand] = {
        total: 0,
        models: {}
      };
    }

    brands[car.brand].total += 1;
    if (!brands[car.brand].models[car.model]) {
      brands[car.brand].models[car.model] = 0;
    }
    brands[car.brand].models[car.model] += 1;
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <CarTable brands={brands} />
      <PieChartComponent brands={brands} />
      <StackedBarChartComponent brands={brands} />
    </div>
  );
}

export default Dashboard;
