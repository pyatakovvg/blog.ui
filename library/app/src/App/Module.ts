
import React from 'react';

import Controller from './Controller';
import { IContext } from './context';

class Module<T extends Controller> {
  readonly controller!: T;
  readonly view!: any;

  constructor(context: IContext) {
    this.controller = this.attachController(context);
    this.view = this.attachView();
  }

  attachController(context: IContext): T {
    throw new Error('Метод attachController требуется перегрузить');
  }

  attachView(): JSX.Element {
    throw new Error('Метод attachView требуется перегрузить');
  }

  createView(): React.FC {
    return this.view;
  }
}

export default Module;
