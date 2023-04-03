
import AbstractUserService from '@services/classes/AbstractUserService';

import UserDto from '@models/UserDto';
import AbstractUserRepository from '@repositories/classes/AbstractUserRepository';

import { Service, Inject } from 'typedi';


@Service('UserService')
class UserService extends AbstractUserService {
  @Inject('UserRepository')
  private readonly userRepository!: AbstractUserRepository;

  async login(login: string, password: string): Promise<boolean> {
    const isAuth = await this.userRepository.login(login, password);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if ( ! isAuth) {
      throw new Error('User not authorize');
    }

    return true;
  }

  async get(): Promise<UserDto> {
    return await this.userRepository.get();
  }
}

export default UserService;
