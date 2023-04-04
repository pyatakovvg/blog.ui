
import { IUserDto, IArticleDto  } from "@models/types";


export abstract class IArticleRepository {
  abstract getAll<T extends object>(filter?: T): Promise<IArticleDto[]>;
}

export abstract class IUserRepository {
  abstract get(): Promise<IUserDto>;
  abstract login(login: string, password: string): Promise<boolean>;
}
