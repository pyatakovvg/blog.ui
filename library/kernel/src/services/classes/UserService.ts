
import { IUserDto } from '@models/types';
import { IUserService } from '@services/types';
import { IUserRepository } from '@repositories/types';

import UserRepository from '@repositories/classes/UserRepository';

import { autowired } from 'first-di';


class UserService extends IUserService {
  @autowired()
  private readonly userRepository!: IUserRepository;

  async login(login: string, password: string): Promise<boolean> {
    const isAuth = await this.userRepository.login(login, password);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if ( ! isAuth) {
      throw new Error('User not authorize');
    }

    return true;
  }

  async get(): Promise<IUserDto> {
    return await this.userRepository.get();
  }
}

export default UserService;
