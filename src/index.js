import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import VideoProvider from 'Contexto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoProvider>
      <AppRoutes />
    </VideoProvider>
  </React.StrictMode>
);