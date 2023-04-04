
import { Serializable, jsonProperty } from 'ts-serializable';

import { IAuthorDto } from '@models/types';
import AuthorDto from '@models/classes/AuthorDto';


class ArticleDto extends Serializable {
  @jsonProperty(String)
  public uuid: string = '';

  @jsonProperty(String)
  public title: string = '';

  @jsonProperty(String)
  public content: string = '';

  @jsonProperty(AuthorDto)
  public author!: IAuthorDto;

  @jsonProperty(String)
  public createdAt: string = '';
}

export default ArticleDto;
