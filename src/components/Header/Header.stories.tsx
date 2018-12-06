import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { theme, ThemeProvider } from '../../theme';

import Header from './Header';
import GlobalStyle from '../../GlobalStyle';

storiesOf('Header', module).add('default', () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
));
