import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Home'),
  loading: () => null,
});
