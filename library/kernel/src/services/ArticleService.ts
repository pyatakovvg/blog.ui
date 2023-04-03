
import { IFilter } from '@repositories/classes/AbstractArticleRepository';
import AbstractArticleService from '@services/classes/AbstractArticleService';

import ArticleDto from '@models/ArticleDto';
import ArticleRepository from '@repositories/ArticleRepository';


class ArticleService extends AbstractArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {
    super();
  }

  async getAll(filter?: IFilter): Promise<ArticleDto[]> {
    return await this.articleRepository.getAll(filter);
  }

  async getByUuid(uuid: string) {
    const result = await this.articleRepository.getAll({ uuid });

    if ( ! result[0]) {
      throw new Error('Article not found');
    }

    return result[0];
  }
}

export default ArticleService;
