import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./AsyncFetch'),
  loading: () => null,
});
