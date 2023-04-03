
import { Controller, IContext } from '@library/app';
import { UserService, UserRepository, UserDto } from '@library/kernel';

import { action, makeObservable } from 'mobx';


class PageController extends Controller {
  private readonly userService: UserService = new UserService(new UserRepository());

  @action.bound
  async login(login: string, password: string): Promise<UserDto> {
    try {
      await this.userService.login(login, password);
      return await this.userService.get();
    }
    catch(error) {
      throw new Error('Ошибка авторизации');
    }
  }

  constructor(context?: IContext) {
    super(context);
    makeObservable(this);
  }
}

export default PageController;
