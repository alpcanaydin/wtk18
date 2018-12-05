import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { theme, ThemeProvider } from '../../theme';

import { H1, H2, H3 } from './Heading';
import GlobalStyle from '../../GlobalStyle';

storiesOf('Heading', module)
  .add('h1', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <H1>Lorem ipsum dolar sit amet</H1>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ))
  .add('h2', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <H2>Lorem ipsum dolar sit amet</H2>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ))
  .add('h3', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <H3>Lorem ipsum dolar sit amet</H3>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ));
