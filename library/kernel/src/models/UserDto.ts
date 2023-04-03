
import { Serializable, jsonProperty } from 'ts-serializable';


class UserDto extends Serializable {
  @jsonProperty(String)
  public uuid: string = '';

  @jsonProperty(String)
  public name: string = '';

  @jsonProperty(String)
  public email: string = '';
}

export default UserDto;
