
import ArticleDto from "@models/ArticleDto";


export interface IFilter {
  uuid?: string;
}

abstract class AbstractArticleRepository {
  public abstract getAll(filter?: IFilter): Promise<ArticleDto[]>;
}

export default AbstractArticleRepository;
