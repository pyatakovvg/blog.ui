
import { observable, action, makeObservable } from 'mobx';


class ErrorState {
  @observable public hasError: boolean = false;
  @observable public content: Error | null = null;

  @action.bound
  setError(error: Error) {
    this.hasError = true;
    this.content = error;
  }

  @action.bound
  resetError() {
    this.hasError = false;
    this.content = null;
  }

  constructor() {
    makeObservable(this);
  }
}

export default ErrorState;
