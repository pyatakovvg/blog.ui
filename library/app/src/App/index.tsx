
export { default as App } from './App';
export { default as Module } from './Module';
export { default as Controller } from './Controller';

export function loader(module: any) {
  return () => new Promise((resolve, reject) => {
    module()
      .then((result: any) => resolve(result.default))
      .catch(reject);
  });
}