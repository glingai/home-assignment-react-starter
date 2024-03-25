import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
