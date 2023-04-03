
import ArticleDto from '@models/ArticleDto';


export interface IArticleFilter {
  uuid?: string;
}


abstract class AbstractArticleService {
  public abstract getAll(filter?: IArticleFilter): Promise<ArticleDto[]>;
  public abstract getByUuid(uuid: string): Promise<ArticleDto>;
}

export default AbstractArticleService;
