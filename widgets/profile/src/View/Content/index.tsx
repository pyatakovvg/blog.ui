
import { useApp } from '@library/app';

import React from 'react';
import { observer } from 'mobx-react';

import Auth from "./Auth";
import NotAuth from "./NotAuth";


interface IProps {
  onClose: () => void;
}


function Content(props: IProps) {
  const app = useApp();

  if (app.isAuth) {
    return <Auth />;
  }
  return <NotAuth onClose={props.onClose} />;
}

export default observer(Content);
