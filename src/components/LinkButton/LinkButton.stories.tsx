import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { theme, ThemeProvider } from '../../theme';

import { PrimaryLinkButton, SecondaryLinkButton } from './LinkButton';
import GlobalStyle from '../../GlobalStyle';

storiesOf('LinkButton', module)
  .add('primary', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <MemoryRouter>
          <PrimaryLinkButton to="/">Primary Button</PrimaryLinkButton>
        </MemoryRouter>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ))
  .add('secondary', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <SecondaryLinkButton to="/">Secondary Button</SecondaryLinkButton>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ));
