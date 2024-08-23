import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CarTable = ({ carStatistics }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Number of Cars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(carStatistics).map(([brand, brandData]) => (
            <>
              <TableRow key={brand}>
                <TableCell>{brand}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>{brandData.total}</TableCell>
              </TableRow>
              {Object.entries(brandData.models).map(([model, count]) => (
                <TableRow key={model}>
                  <TableCell></TableCell>
                  <TableCell>{model}</TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarTable;

