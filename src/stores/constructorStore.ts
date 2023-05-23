import { makeAutoObservable } from 'mobx';
import {api} from "@/services";
import {ItemEntity} from "@/entities";

class ConstructorStore {
  private _components: ItemEntity[] = [];
  private _case = '';

  constructor() {
    makeAutoObservable(this);
  }

  get case() {
    return this._case;
  }

  get components() {
    return this._components;
  }

  setCase(value: string) {
    this._case = value;
  }

  async fetchConstructorComponents() {
    let comp = await api.getConstructor();
    this._components = comp;
    console.log(this._components);
  }
}

export const constructorStore = new ConstructorStore();