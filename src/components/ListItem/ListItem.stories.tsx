import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { theme, ThemeProvider } from '../../theme';

import ListItem from './ListItem';
import GlobalStyle from '../../GlobalStyle';

storiesOf('ListItem', module).add('primary', () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <MemoryRouter>
        <div style={{ width: '600px' }}>
          <ListItem title="Example title" summary="Lorem ipsum dolar sit amet" to="/" />
        </div>
      </MemoryRouter>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
));
