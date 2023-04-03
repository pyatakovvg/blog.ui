
import { Provider } from '@context';

import { Module, IContext } from '@library/app';
import PageController from "@controllers/PageController";

import React from 'react';

import App from './App';


class PageModule extends Module<PageController> {
  attachController(context: IContext) {
    return new PageController(context);
  }

  attachView() {
    return (
      <Provider value={{
        controller: this.controller
      }}>
        <App />
      </Provider>
    );
  }
}

export default PageModule;
