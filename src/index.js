import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CurrentUserProvider from './providers/user/user.provider';

ReactDOM.render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>,

  document.getElementById('root')
);
