
import context from '@context';

import React from 'react';

import View from './View';


function App() {
  const { controller } = React.useContext(context);

  React.useEffect(() => {
    controller.getAll();
  }, []);

  return (
    <View />
  );
}

export default App;
