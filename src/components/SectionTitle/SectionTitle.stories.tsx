import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import { theme, ThemeProvider } from '@/theme';

import SectionTitle from './SectionTitle';
import { Paragraph } from '..';
import GlobalStyle from '../../GlobalStyle';

storiesOf('SectionTitle', module).add('primary', () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <div style={{ width: '600px', padding: '12px' }}>
        <SectionTitle>Lorem ipsum dolar sit amet</SectionTitle>
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
