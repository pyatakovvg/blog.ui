
import { RouteNotFound, Splash } from '@library/design';

import PublicRoute from "@components/PublicRoute";
import PrivateRoute from "@components/PrivateRoute";

import React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import context from '../context';


function View() {
  const { controller, publicRoutes, privateRoutes } = React.useContext(context);

  if ( ! controller.isInit) {
    return <Splash />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => {
          // console.log(route)
          // return null;
          return (
            <Route
              key={route.path}
              path={process.env['PUBLIC_URL'] + route.path.replace('^\/', '')}
              element={(
                <PublicRoute
                  module={route.module}
                  wrapper={route.wrapper}
                />
              )}
            />
          )
        })}
        {privateRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={process.env['PUBLIC_URL'] + route.path.replace('^\/', '')}
              element={(
                <PrivateRoute
                  module={route.module}
                  wrapper={route.wrapper}
                />
              )}
            />
          )
        })}
        <Route
          key={'other-routes'}
          path={'*'}
          element={<RouteNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(View);
