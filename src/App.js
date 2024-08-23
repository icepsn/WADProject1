import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HighlightedCars from './components/HighlightedCars';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/highlighted" component={HighlightedCars} />
      </Switch>
    </Router>
  );
}

export default App;
