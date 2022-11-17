import { makeAutoObservable } from 'mobx';

class LoginStore {
  private _isDialogOpen = false;
  private _isSignin = true;

  constructor() {
    makeAutoObservable(this);
  }

  get isDialogOpen() {
    return this._isDialogOpen;
  }

  openDialog() {
    this._isDialogOpen = true;
  }

  closeDialog() {
    this._isDialogOpen = false;
  }

  get isSignin() {
    return this._isSignin;
  }

  toggleSignIn() {
    this._isSignin = !this._isSignin;
  }
}

export const loginStore = new LoginStore();
