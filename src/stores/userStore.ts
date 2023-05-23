import { api } from '@/services';
import { makeAutoObservable } from 'mobx';
import Cookie from 'js-cookie';

class UserStore {
  private _user: UserEntity | null = null;
  private _emailInput = '';
  private _passInput = '';
  private _isDialogOpen = false;
  private _isSignIn = true;
  
  constructor() {
    makeAutoObservable(this);
  }
  
  get getUser() {
    return this._user;
  }

  async autoSignIn() {
    const email = Cookie.get('email');
    const password = Cookie.get('password');
    console.log(email, password);
    
    if (email && password) {
      const user = await api.signIn({
        email: email,
        password: password,
      });

      if (user) {      
        this._user = user;
        this.closeDialog();
      }
    }
  }
  
  async signIn() {
    const user = await api.signIn({
      email: this._emailInput,
      password: this._passInput,
    });
    if (user.id) {
      
      Cookie.set('email', this._emailInput);
      Cookie.set('password', this._passInput);
      
      this._user = user;
      this.closeDialog();
    }
  }
  
  async signUp() {
    await api.signUp({
      email: this._emailInput,
      password: this._passInput,
    });

    this.toggleSignIn();
  }
  
  async signOut() {
    await api.signOut();
    
    Cookie.remove('email');
    Cookie.remove('password');

    this._user = null;
  }

  openDialog() {
    this._isDialogOpen = true;
  }

  closeDialog() {
    this._isDialogOpen = false;
  }

  get isDialogOpen() {
    return this._isDialogOpen;
  }

  get isSignIn() {
    return this._isSignIn;
  } 

  toggleSignIn() {
    this._isSignIn = !this._isSignIn;
  }

  auth() {
    if (this._isSignIn) this.signIn();
    else this.signUp();
  }

  get emailInput() {
    return this._emailInput;
  }

  get passInput() {
    return this._passInput
  }

  setEmailInput(value: string) {
    this._emailInput = value;
  }

  setPassInput(value: string) {
    this._passInput = value;
  }

  get user() {
    return this._user;
  }

  onSignButtonClick() {
    if (this._user) {
      this.signOut();
    } //открыть диалог
    else this.openDialog();
  }
}

export const userStore = new UserStore();