
import type IRoute from '@typing/IRoute';
import { Splash } from '@library/design';

import React from 'react';

import context from '../../context';


function useModule(props: Omit<IRoute, 'path'>) {
  const appContext = React.useContext(context);
  const [module, setModule] = React.useState<any>();

  React.useEffect(() => {
    (async () => {
      const Module: any = await props.module();
      const module = new Module(appContext);

      setModule(module);
    })();
  }, [props]);

  if (module) {
    return module;
  }
  return null;
}


function BaseRoute(props: Omit<IRoute, 'path'>) {
  const { wrappers } = React.useContext(context);
  const Wrapper: any = wrappers ? wrappers[props?.wrapper ?? 'default'] : null;
  const Module = useModule(props);

  React.useEffect(() => {
    console.log('Route created');
  }, []);

  if (Wrapper) {
    return (
      <Wrapper>
        <React.Suspense fallback={<Splash />}>
          {Module && Module.createView()}
        </React.Suspense>
      </Wrapper>
    );
  }

  return (
    <React.Suspense fallback={<Splash />}>
      {Module && Module.createView()}
    </React.Suspense>
  );
}

export default BaseRoute;
