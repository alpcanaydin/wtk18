import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./RelatedUIUpdate'),
  loading: () => null,
});
