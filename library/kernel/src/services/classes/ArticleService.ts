
import { IArticleDto } from '@models/types';
import { IArticleService } from '@services/types';
import { IArticleRepository } from '@repositories/types';

import { autowired } from 'first-di';


class ArticleService extends IArticleService {
  @autowired()
  private readonly articleRepository!: IArticleRepository;

  async getAll<T extends object>(filter?: T): Promise<IArticleDto[]> {
    console.log(11111, this.articleRepository)
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
