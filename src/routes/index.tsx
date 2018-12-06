import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import DelayedLoading from './manipulation/DelayedLoading';
import PlaceholderOverSpinner from './design/PlaceholderOverSpinner';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/manipulasyon/gecikmeli-loading" component={DelayedLoading} />
    <Route path="/gorsellik/spinner-yerine-placeholder" component={PlaceholderOverSpinner} />
  </Switch>
);

export default Routes;
