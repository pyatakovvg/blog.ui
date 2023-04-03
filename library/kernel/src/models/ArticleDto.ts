
import { Serializable, jsonProperty } from 'ts-serializable';

import AuthorDto from '@models/AuthorDto';


class ArticleDto extends Serializable {
  @jsonProperty(String)
  public uuid: string = '';

  @jsonProperty(String)
  public title: string = '';

  @jsonProperty(String)
  public content: string = '';

  @jsonProperty(AuthorDto)
  public author!: AuthorDto;

  @jsonProperty(String)
  public createdAt: string = '';
}

export default ArticleDto;
