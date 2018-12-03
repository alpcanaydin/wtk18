import React, { Fragment } from 'react';
import { ThemeProvider, theme } from './theme';

import 'modern-normalize/modern-normalize.css';
import './theme/fonts.css';

import GlobalStyle from './GlobalStyle';

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <p>Hello world</p>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
);

export default App;
