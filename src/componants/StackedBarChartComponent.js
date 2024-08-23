import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const StackedBarChartComponent = ({ carStatistics }) => {
  const data = Object.entries(carStatistics).map(([brand, data]) => {
    const entry = { brand };
    Object.entries(data.models).forEach(([model, count]) => {
      entry[model] = count;
    });
    return entry;
  });

  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="brand" />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.keys(carStatistics[Object.keys(carStatistics)[0]].models).map((model) => (
        <Bar key={model} dataKey={model} stackId="a" fill="#82ca9d" />
      ))}
    </BarChart>
  );
};

export default StackedBarChartComponent;

