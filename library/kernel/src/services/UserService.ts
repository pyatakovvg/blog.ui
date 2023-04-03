
import AbstractUserService from '@services/classes/AbstractUserService';

import UserDto from '@models/UserDto';
import UserRepository from '@repositories/UserRepository';


class UserService extends AbstractUserService {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

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
