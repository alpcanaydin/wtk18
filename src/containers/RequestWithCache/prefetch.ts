import api from '../../utils/api';
import networkStore from '../../utils/networkStore';

export default function prefetch(key: string, networkDelay: number) {
  const response = api.get(key, networkDelay);
  networkStore.set(key, response);
}
