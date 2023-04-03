
import { IContext } from './context';


class Controller {
  private readonly appContext!: IContext | undefined;

  constructor(context?: IContext) {
    this.appContext = context;
  }

  get context(): IContext | undefined {
    return this.appContext;
  }
}

export default Controller;
