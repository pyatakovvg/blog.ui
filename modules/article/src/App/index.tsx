
import context from '@context';

import React from 'react';
import { useParams } from 'react-router-dom';

import View from './View';


interface IParams {
  uuid: string;
}


function App() {
  const { controller } = React.useContext(context);
  const { uuid } = useParams<Readonly<IParams>>();

  React.useEffect(() => {
    (async () => {
      await controller.getByUuid(uuid ! );
    })();
  }, []);

  return (
    <View />
  );
}

export default App;
