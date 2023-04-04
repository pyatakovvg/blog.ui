
import { IUserDto, IArticleDto } from '@models/types';


export abstract class IArticleService {
  abstract getAll<T extends object>(filter?: T): Promise<IArticleDto[]>;
  abstract getByUuid(uuid: string): Promise<IArticleDto>;
}

export abstract class IUserService {
  abstract get(): Promise<IUserDto>;
  abstract login(login: string, password: string): Promise<boolean>;
}
