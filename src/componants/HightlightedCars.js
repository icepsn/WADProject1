import React, { useState, useEffect } from 'react';
import { Button, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const HighlightedCars = () => {
  const [highlightedCars, setHighlightedCars] = useState([]);

  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("highlightedCars")) || [];
    setHighlightedCars(savedCars);
  }, []);

  const removeCarFromHighlight = (carId) => {
    const updatedCars = highlightedCars.filter((car) => car.id !== carId);
    setHighlightedCars(updatedCars);
    localStorage.setItem("highlightedCars", JSON.stringify(updatedCars));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Highlighted Cars</Typography>
      <Paper sx={{ p: 2 }}>
        <List>
          {highlightedCars.map((car) => (
            <ListItem key={car.id}>
              <ListItemText
                primary={car.NameMMT}
                secondary={`Model: ${car.Model}`}
              />
              <Button variant="contained" color="error" onClick={() => removeCarFromHighlight(car.id)}>Remove</Button>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default HighlightedCars;
