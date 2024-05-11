import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './pages/Home';
import ViewDemands from './pages/ViewDemands';

// Contexts
import StationsContext from './context/StationsContext';
import TokenContext from './context/TokenContext';
import RoutesContext from './context/RoutesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TokenContext>
    <StationsContext>
      <RoutesContext>
        <ViewDemands />
      </RoutesContext>
    </StationsContext>
  </TokenContext>
);