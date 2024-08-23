import React from 'react';

function CarTable({ brands }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(brands).map((brand) => (
          <>
            <tr key={brand}>
              <td>{brand}</td>
              <td></td>
              <td>{brands[brand].total}</td>
            </tr>
            {Object.keys(brands[brand].models).map((model) => (
              <tr key={model}>
                <td></td>
                <td>{model}</td>
                <td>{brands[brand].models[model]}</td>
              </tr>
            ))}
          </>
        ))}
      </tbody>
    </table>
  );
}

export default CarTable;
