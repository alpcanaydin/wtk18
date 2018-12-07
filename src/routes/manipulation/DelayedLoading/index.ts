import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./DelayedLoading'),
  loading: () => null,
});
