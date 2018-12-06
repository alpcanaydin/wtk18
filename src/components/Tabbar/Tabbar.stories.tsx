import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { theme, ThemeProvider } from '../../theme';

import { Tabbar, TabbarLink } from './Tabbar';
import GlobalStyle from '../../GlobalStyle';

storiesOf('Tabbar', module).add('primary', () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <MemoryRouter>
        <Tabbar>
          <TabbarLink to="/">Tab 1</TabbarLink>
          <TabbarLink to="/">Tab 2</TabbarLink>
        </Tabbar>
      </MemoryRouter>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
));
