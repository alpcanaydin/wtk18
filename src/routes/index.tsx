import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import DelayedLoading from './manipulation/DelayedLoading';
import PlaceholderOverSpinner from './design/PlaceholderOverSpinner';
import RelatedUIUpdate from './design/RelatedUIUpdate';
import OptimisticUIUpdate from './optimizm/OptimisticUIUpdate';
import CacheResponses from './lessWaiting/CacheResponses';
import HoverPrefetch from './lessWaiting/HoverPrefetch';
import AsyncFetch from './lessWaiting/AsyncFetch';
import VeryHugeRoute from './VeryHugeRoute';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/manipulasyon/gecikmeli-loading" component={DelayedLoading} />
    <Route path="/gorsellik/spinner-yerine-placeholder" component={PlaceholderOverSpinner} />
    <Route path="/gorsellik/ilgili-ui-guncellemesi" component={RelatedUIUpdate} />
    <Route path="/optimizm/optimistik-ui-guncellemesi" component={OptimisticUIUpdate} />
    <Route path="/bekleme-tasarrufu/responselarin-cachelenmesi" component={CacheResponses} />
    <Route path="/bekleme-tasarrufu/hover-prefetch" component={HoverPrefetch} />
    <Route path="/bekleme-tasarrufu/async-fetch" component={AsyncFetch} />
    <Route path="/cok-buyuk-route" component={VeryHugeRoute} />
  </Switch>
);

export default Routes;
