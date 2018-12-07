import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./VeryHugeRoute'),
  loading: () => null,
});
