
import PageController from '@controllers/PageController';

import React from 'react';


interface IContext {
  controller: PageController;
}

const context = React.createContext<IContext>({
  controller: new PageController(),
});

export default context;
export const Provider = context.Provider;