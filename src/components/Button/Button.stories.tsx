import React from 'react';
import { storiesOf } from '@storybook/react';

import { theme, ThemeProvider } from '@/theme';

import { PrimaryButton, SecondaryButton } from './Button';

storiesOf('Button', module)
  .add('primary', () => (
    <ThemeProvider theme={theme}>
      <PrimaryButton type="button">Primary Button</PrimaryButton>
    </ThemeProvider>
  ))
  .add('secondary', () => (
    <ThemeProvider theme={theme}>
      <SecondaryButton type="button">Secondary Button</SecondaryButton>
    </ThemeProvider>
  ));
