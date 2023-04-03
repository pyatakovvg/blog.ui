
import { UserDto } from '@library/kernel';

import React from 'react';

import context from '../context';


interface IUseApp {
  user: UserDto;
  isAuth: boolean;
  setAuth(user: UserDto): void;
  resetAuth(): void;
}


function useApp(): IUseApp {
  const { controller } = React.useContext(context);

  return {
    user: controller.user,
    isAuth: controller.isAuth,
    setAuth: controller.setAuth,
    resetAuth: controller.resetAuth,
  };
}

export default useApp;
