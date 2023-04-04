
import { IUserDto } from '@models/types';
import { IUserRepository } from '@repositories/types';

import { reflection } from 'first-di';


@reflection
class UserRepository extends IUserRepository {
  async login(login: string, password: string): Promise<boolean> {
    if (login !== 'test@mail.ru') {
      return false;
    }
    else if (password !== 'Password-1') {
      return false;
    }
    return true;
  }

  async logout(): Promise<boolean> {
    return true;
  }

  async get(): Promise<IUserDto> {
    return Promise.reject();
    // return new Promise((resolve) => {
    //   setTimeout(() => resolve(new UserDto().fromJSON({
    //     uuid: 'ABABABAB',
    //     name: 'Viktor',
    //     email: 'zemlya@mail.ru',
    //   })), 1000);
    // });
  }
}

export default UserRepository;
