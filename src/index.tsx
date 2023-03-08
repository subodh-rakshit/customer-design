import React from 'react';
import ReactDOM from 'react-dom/client';
import DisplayUsers from './components/display-users/display-users';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DisplayUsers />
  </React.StrictMode>
);
