import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './pages/Home';
import ViewDemands from './pages/ViewDemands';

// Contexts
import StationsContext from './context/StationsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StationsContext>
    <Home />
  </StationsContext>
);