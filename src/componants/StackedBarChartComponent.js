import React from 'react';
import { Bar } from 'react-chartjs-2';

function StackedBarChartComponent({ brands }) {
  const data = {
    labels: Object.keys(brands),
    datasets: Object.keys(brands).map((brand, i) => ({
      label: brand,
      data: Object.keys(brands[brand].models).map(model => brands[brand].models[model]),
      backgroundColor: `rgba(${i * 50}, ${i * 50}, ${i * 50}, 0.5)`
    }))
  };

  const options = {
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  return <Bar data={data} options={options} />;
}

export default StackedBarChartComponent;
