import api from '../../utils/api';
import networkStore from '../../utils/networkStore';

export default function prefetch(key: string, networkDelay: number) {
  api.get(key, networkDelay).then(response => {
    networkStore.set(key, response);
  });
}
