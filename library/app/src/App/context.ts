
import IRoute from "@typing/IRoute";
import { TWrapper } from '@typing/IWrapper';

import AppController from '@controllers/AppController';

import React from 'react';


export interface IContext {
  env: Record<string, any>;
  wrappers?: TWrapper;
  publicRoutes: IRoute[];
  privateRoutes: IRoute[];
  controller: AppController;
}


export default React.createContext<IContext>({
  env: {},
  wrappers: {},
  publicRoutes: [],
  privateRoutes: [],
  controller: {} as AppController,
});
