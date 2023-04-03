
import { Serializable, jsonProperty } from 'ts-serializable';


class AuthorDto extends Serializable {
  @jsonProperty(String)
  public uuid: string = '';

  @jsonProperty(String)
  public email: string = '';

  @jsonProperty(String)
  public name: string = '';
}

export default AuthorDto;
