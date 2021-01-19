import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CurrentUserProvider from './providers/user/user.provider';
import { GlobalStyle } from './global-styles';

ReactDOM.render(
  <CurrentUserProvider>
    <GlobalStyle />
    <App />
  </CurrentUserProvider>,

  document.getElementById('root')
);
