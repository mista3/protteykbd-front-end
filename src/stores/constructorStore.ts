import { makeAutoObservable } from 'mobx';

class ConstructorStore {
  private _case = '';

  constructor() {
    makeAutoObservable(this);
  }

  get case() {
    return this._case;
  }

  setCase(value: string) {
    this._case = value;
  }
}

export const constructorStore = new ConstructorStore();