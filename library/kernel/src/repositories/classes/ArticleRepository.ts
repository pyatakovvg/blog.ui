
import Request from '@helper/request';

import { IArticleDto } from '@models/types';
import { IArticleRepository } from '@repositories/types';

import ArticleDto from '@models/classes/ArticleDto';

import { reflection } from 'first-di';


@reflection
class ArticleRepository extends IArticleRepository {
  async getAll<T extends object>(filter?: T): Promise<IArticleDto[]> {
    const request =  new Request();
    const result: any = await request.get(process.env.REACT_APP_GATEWAY_API + '/v1/articles', filter);

    return result.data.map((item: any) => new ArticleDto().fromJSON(item))
  }
}

export default ArticleRepository;
