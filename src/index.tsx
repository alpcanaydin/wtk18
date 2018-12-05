import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, theme } from './theme';

import 'modern-normalize/modern-normalize.css';
import './theme/fonts.css';

import App from './App';
import GlobalStyle from './GlobalStyle';

const Root = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
);

render(<Root />, document.getElementById('root'));
