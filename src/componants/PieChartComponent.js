import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChartComponent({ brands }) {
  const data = {
    labels: Object.keys(brands),
    datasets: [{
      data: Object.values(brands).map(brand => brand.total),
      backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple']
    }]
  };

  return <Pie data={data} />;
}

export default PieChartComponent;
