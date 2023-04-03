
import { IFilter } from '@repositories/classes/AbstractArticleRepository';
import AbstractArticleService from '@services/classes/AbstractArticleService';

import ArticleDto from '@models/ArticleDto';
import AbstractArticleRepository from '@repositories/classes/AbstractArticleRepository';

import { Service, Inject } from 'typedi';


@Service('ArticleService')
class ArticleService extends AbstractArticleService {
  @Inject('ArticleRepository')
  private readonly articleRepository!: AbstractArticleRepository

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
