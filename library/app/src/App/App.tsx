
import { TWrapper } from "@typing/IWrapper";
import AppController from '@controllers/AppController';

import React from 'react';

import View from './View';
import Plugin from './Plugin';
import context from './context';


export interface IConfig {
  env: Record<string, any>;
  wrappers?: TWrapper;
  publicRoutes: any[];
  privateRoutes: any[];
}


class App {
  private readonly _plugins: { [key: string]: Plugin } = {};
  private readonly _controller: AppController = new AppController();

  constructor(private readonly config: IConfig) {

    this.initialize().then(() => console.log('Приложение инициализировано'));
  }

  private async initialize() {
    await this._controller.checkAuthState();
  }

  public addPlugin(key: string, plugin: Plugin) {
    this._plugins[key] = plugin;
  }

  getConfig() {
    return this.config;
  }

  get getPlugins() {
    return this._plugins;
  }

  public createView(): React.FC {
    const self = this;

    return function() {
      return (
        <context.Provider value={{
          env: self.config.env,
          controller: self._controller,
          wrappers: self.config?.wrappers,
          publicRoutes: self.config.publicRoutes,
          privateRoutes: self.config.privateRoutes,
        }}>
          <View />
        </context.Provider>
      );
    }
  }
}

export default App;
