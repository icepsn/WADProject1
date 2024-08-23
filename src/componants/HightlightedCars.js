import React, { useState, useEffect } from 'react';

function HighlightedCars() {
  const [highlightedCars, setHighlightedCars] = useState(() => {
    const savedCars = localStorage.getItem('highlightedCars');
    return savedCars ? JSON.parse(savedCars) : [];
  });

  const addCar = (car) => {
    setHighlightedCars((prev) => {
      const updatedCars = [...prev, car];
      localStorage.setItem('highlightedCars', JSON.stringify(updatedCars));
      return updatedCars;
    });
  };

  const removeCar = (index) => {
    setHighlightedCars((prev) => {
      const updatedCars = prev.filter((_, i) => i !== index);
      localStorage.setItem('highlightedCars', JSON.stringify(updatedCars));
      return updatedCars;
    });
  };

  return (
    <div>
      <h1>Highlighted Cars</h1>
      <ul>
        {highlightedCars.map((car, index) => (
          <li key={index}>
            {car.brand} - {car.model}
            <button onClick={() => removeCar(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Here, you could add a form or selection component to add cars */}
    </div>
  );
}

export default HighlightedCars;
