import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import './styles/style.css';
import { getInitialData } from './utils/data';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  </>
);
