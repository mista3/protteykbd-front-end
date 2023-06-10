import { makeAutoObservable } from 'mobx';
import { ItemEntity } from '@/entities';
import { api } from '@/services';

class ItemStore {
  private _items: ItemEntity[] = [];
  private _cartItems: ItemEntity[] = [];
  private _favItems: ItemEntity[] = [];
  private _item: ItemEntity | null = null;
  private _loading = true;
  cartSelected = new Set<string>();

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCartItems() {
    this._loading = true;
    this._cartItems = await api.getCartItems();
    this._loading = false
  }

  async fetchFavItems() {
    this._loading = true;
    this._favItems = await api.getFavItems();
    this._loading = false
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

  async removeCartItem(id: string) {
    await api.removeFromCart(id);
    await this.fetchCartItems();
  }

  async removeFavItem(id: string) {
    await api.removeFromFav(id);
    await this.fetchFavItems();
  }

  get items() {
    return this._items;
  }

  get cartItems() {
    return this._cartItems;
  }

  get favItems() {
    return this._favItems;
  }

  get item() {
    return this._item;
  }

  get loading() {
    return this._loading;
  }

  get totalPrice() {
    return this._cartItems
      .filter(({ id }) => this.cartSelected.has(id))
      .reduce((total, { price }) => total+price, 0)
  }
}

export const itemStore = new ItemStore();
