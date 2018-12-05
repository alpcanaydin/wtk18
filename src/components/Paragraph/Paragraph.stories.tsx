import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { theme, ThemeProvider } from '../../theme';

import Paragraph from './Paragraph';
import GlobalStyle from '../../GlobalStyle';

storiesOf('Paragraph', module).add('primary', () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <div style={{ width: '600px', padding: '12px' }}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi illum soluta, inventore
          mollitia nobis perferendis minima repellendus fuga cum repudiandae optio itaque eius est
          totam, quas enim error officiis! Sit.
        </Paragraph>
      </div>
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
));
