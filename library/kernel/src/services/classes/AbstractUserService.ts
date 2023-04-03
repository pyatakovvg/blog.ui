
import UserDto from "@models/UserDto";


abstract class AbstractUserService {
  public abstract get(): Promise<UserDto>;
  public abstract login(login: string, password: string): Promise<boolean>;
}

export default AbstractUserService;
