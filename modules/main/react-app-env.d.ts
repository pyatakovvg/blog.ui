/// <reference types="react" />
/// <reference types="react-scripts" />

interface Window {
  _env?: {
    version: string;
  };
  webApi: {
    postMessage<T>(event: T): T;
  }
}

declare const window: Window;
