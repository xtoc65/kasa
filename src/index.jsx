import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './route.jsx';
import { RouterProvider } from "react-router-dom";
import LogementsContext from './context/logements-context';
import logements from './logements.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogementsContext.Provider value={logements}>
      <RouterProvider router={router}/>
    </LogementsContext.Provider>
  </React.StrictMode>
);

reportWebVitals();