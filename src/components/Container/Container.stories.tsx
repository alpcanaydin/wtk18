import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { theme, ThemeProvider } from '../../theme';

import Container from './Container';
import GlobalStyle from '../../GlobalStyle';
import Paragraph from '../Paragraph';

storiesOf('Container', module).add('primary', () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Container>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum soluta, inventore
          mollitia nobis perferendis minima repellendus fuga cum repudiandae optio itaque eius est
          totam, quas enim error officiis! Sit.
        </Paragraph>
      </Container>

      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
));
