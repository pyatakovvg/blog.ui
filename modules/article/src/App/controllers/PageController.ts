
import { Controller, IContext } from '@library/app';
import { AbstractArticleService, ArticleDto } from '@library/kernel';

import ErrorState from "@controllers/ErrorState";

import { Container } from 'typedi';
import { observable, action, makeObservable } from 'mobx';


class PageController extends Controller {
  @observable public inProcess: boolean = true;
  @observable public isNotFound: boolean = false;
  @observable public error: ErrorState = new ErrorState();
  @observable public article: ArticleDto = new ArticleDto();

  private readonly articleService: AbstractArticleService = Container.get('ArticleService');

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
