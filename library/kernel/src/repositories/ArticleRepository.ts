
import Request from '@helper/request';

import ArticleDto from '@models/ArticleDto';
import AbstractArticleRepository, { IFilter } from '@repositories/classes/AbstractArticleRepository';

import { Service } from 'typedi';


@Service('ArticleRepository')
class ArticleRepository extends AbstractArticleRepository {
  async getAll(filter?: IFilter): Promise<ArticleDto[]> {
    const request =  new Request();
    const result: any = await request.get(process.env.REACT_APP_GATEWAY_API + '/v1/articles', filter);

    return result.data.map((item: any) => new ArticleDto().fromJSON(item))
  }
}

export default ArticleRepository;
