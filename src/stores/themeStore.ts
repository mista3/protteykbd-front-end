import { makeAutoObservable } from 'mobx';

export class ThemeStore {
  private _isDark = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isDark() {
    return this._isDark;
  }

  setDark(value: boolean) {
    this._isDark = value;
  }

  toggle() {
    this._isDark = !this._isDark;
  }
}

export const themeStore = new ThemeStore();
