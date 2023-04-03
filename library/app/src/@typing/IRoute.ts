
import { TWrapperKey } from '@typing/IWrapper';

import React from 'react';


interface IRoute {
  path: string;
  wrapper?: TWrapperKey;
  module(): React.LazyExoticComponent<React.ComponentType<any>>;
}

export default IRoute;
