import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Contexts
import StationsContext from './context/StationsContext';
import TokenContext from './context/TokenContext';
import RoutesContext from './context/RoutesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TokenContext>
    <StationsContext>
      <RoutesContext>
        <App />
      </RoutesContext>
    </StationsContext>
  </TokenContext>
);