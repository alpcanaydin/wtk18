import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import 'modern-normalize/modern-normalize.css';
import '../src/theme/fonts.css';

addDecorator(withInfo());

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
