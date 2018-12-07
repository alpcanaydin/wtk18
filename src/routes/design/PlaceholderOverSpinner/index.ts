import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./PlaceholderOverSpinner'),
  loading: () => null,
});
