
import App from '@library/app';
import Logger from '@plugin/logger';
import { ThemeProvider } from '@library/kit';
import { DefaultWrapper, EmptyWrapper } from "@library/design";

import React from 'react';
import { configure } from 'mobx';
import ReactDom from 'react-dom/client';

import publicRoutes from './configs/routes/public';
import privateRoutes from './configs/routes/private';


configure({
  enforceActions: "never",
});


const app = new App({
  env: {
    version: '0/0/1',
  },
  publicRoutes,
  privateRoutes,
  wrappers: {
    'empty': EmptyWrapper,
    'default': DefaultWrapper,
  },
});

app.addPlugin('logger', Logger);

const AppView = app.createView();
const root = ReactDom.createRoot(document.querySelector('#root') ! );

root.render(
  <ThemeProvider defaultTheme={'light'}>
    <AppView />
  </ThemeProvider>
);
