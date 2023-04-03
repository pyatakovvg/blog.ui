
import { Controller, IContext } from '@library/app';
import { ArticleService, ArticleRepository, ArticleDto } from '@library/kernel';

import ErrorState from "@controllers/ErrorState";

import { observable, action, makeObservable } from 'mobx';


class PageController extends Controller {
  @observable public inProcess: boolean = true;
  @observable public articles: ArticleDto[] = [];
  @observable public error: ErrorState = new ErrorState();

  private readonly articleService: ArticleService = new ArticleService(new ArticleRepository());

  @action.bound
  processState(state: boolean) {
    this.inProcess = state;
  }

  @action.bound
  async getAll() {
    try {
      this.inProcess = true;
      this.error.resetError();
      this.articles = await this.articleService.getAll();
    }
    catch(error) {
      this.error.setError(error as Error);
    }
    finally {
      this.inProcess = false;
    }
  }

  constructor(context?: IContext) {
    super(context);
    makeObservable(this);
  }
}

export default PageController;
