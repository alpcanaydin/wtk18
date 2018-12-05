import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { theme, ThemeProvider } from '../../theme';

import { PrimaryButton, SecondaryButton } from './Button';
import GlobalStyle from '../../GlobalStyle';

storiesOf('Button', module)
  .add('primary', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <PrimaryButton type="button">Primary Button</PrimaryButton>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ))
  .add('secondary', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <SecondaryButton type="button">Secondary Button</SecondaryButton>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  ));
