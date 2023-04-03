
import { Controller, IContext } from '@library/app';
import { ArticleService, ArticleRepository, ArticleDto } from '@library/kernel';

import ErrorState from "@controllers/ErrorState";

import { observable, action, makeObservable } from 'mobx';


class PageController extends Controller {
  @observable public isNotFound: boolean = false;
  @observable public inProcess: boolean = true;
  @observable public error: ErrorState = new ErrorState();
  @observable public article: ArticleDto = new ArticleDto();

  private readonly articleService: ArticleService = new ArticleService(new ArticleRepository());

  @action.bound
  processState(state: boolean) {
    this.inProcess = state;
  }

  @action.bound
  async getByUuid(uuid: string) {
    try {
      this.processState(true);
      this.error.resetError();
      this.article = await this.articleService.getByUuid(uuid);
    }
    catch(error) {
      this.error.setError(error as Error);
      // this.isNotFound = true;
    }
    finally {
      this.processState(false);
    }
  }

  constructor(context?: IContext) {
    super(context);
    makeObservable(this);
  }
}

export default PageController;
