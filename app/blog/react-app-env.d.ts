/// <reference types="react" />
/// <reference types="react-scripts" />


interface Window {
  webApi: {
    postMessage<T>(event: T): T;
  }
}