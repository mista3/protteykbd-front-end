import { makeAutoObservable } from 'mobx';

class UserStore {
  private _id = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get getId() {
    return this._id
  }

  setId(id: number) {
    this._id = id;
  }

  get isSigned() {
    return Boolean(this._id);
  }

  logout() {
    this._id = 0;
  }
}

export const userStore = new UserStore();