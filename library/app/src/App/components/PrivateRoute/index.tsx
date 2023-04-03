
import IRoute from '@typing/IRoute';
import BaseRoute from '@components/BaseRoute';

import React from 'react';


function ProtectedRoute(props: Omit<IRoute, 'path'>) {
  return <BaseRoute {...props} />;
}

export default ProtectedRoute;
