import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { theme, ThemeProvider } from '../../theme';

import Loading from './Loading';
import GlobalStyle from '../../GlobalStyle';

storiesOf('Loading', module)
  .add('immediately', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Loading />
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ))
  .add('with delay', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Loading showAfter={1000} />
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ));
