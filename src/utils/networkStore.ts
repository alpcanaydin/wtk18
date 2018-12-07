const __STORE__: { [key: string]: any } = {};

function has(key: string) {
  return Object.keys(__STORE__).indexOf(key) > -1;
}

function get<T>(key: string): T {
  return __STORE__[key];
}

function set(key: string, value: any) {
  __STORE__[key] = value;
}

function remove(key: string) {
  delete __STORE__[key];
}

export default {
  has,
  get,
  set,
  remove,
};
