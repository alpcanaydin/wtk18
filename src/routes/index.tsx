import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import DelayedLoading from './manipulation/DelayedLoading';
import DelayedLoadingDetail from './manipulation/DelayedLoading/Detail';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/manipulasyon/gecikmeli-loading" component={DelayedLoading} />
  </Switch>
);

export default Routes;
