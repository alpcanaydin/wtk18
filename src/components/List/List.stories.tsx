import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { theme, ThemeProvider } from '../../theme';

import List from './List';
import { ListItem } from '..';
import GlobalStyle from '../../GlobalStyle';

storiesOf('List', module).add('primary', () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <MemoryRouter>
        <List>
          <ListItem title="Example title" body="Lorem ipsum dolar sit amet" to="/" />
          <ListItem title="Example title" body="Lorem ipsum dolar sit amet" to="/" />
        </List>
      </MemoryRouter>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
));
