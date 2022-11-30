export const makeObject = <T extends object>(data: T, defaultKey: keyof T) => {
  return new Proxy(data, {
    get: (target, key) => target[key as keyof T] || data[defaultKey],
  });
};
