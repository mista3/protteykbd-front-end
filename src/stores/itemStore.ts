import { makeAutoObservable } from 'mobx';
import { ItemEntity } from '@/entities';
import { api } from '@/services';

class ItemStore {
  private _items: ItemEntity[] = [];
  private _item: ItemEntity | null = null;
  private _loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchItems() {
    this._loading = true;
    this._items = await api.getItems();
    this._loading = false
  }

  async fetchItem(id: string) {
    this._loading = true;
    this._item = await api.getItem(id);
    this._loading = false
  }

  get items() {
    return this._items;
  }

  get item() {
    return this._item;
  }

  get loading() {
    return this._loading;
  }
}

export const itemStore = new ItemStore();
