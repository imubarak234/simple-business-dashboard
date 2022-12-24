import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProSidebarProvider>
  </React.StrictMode>,
);
