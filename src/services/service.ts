import { ItemEntity } from '@/entities';
import { agent } from './agent';

const HOST = 'http://127.0.0.1:5000'

export class api {
  static async getItems():Promise<ItemEntity[]> {
    const res = await agent.get(`${HOST}/items`).json<ItemEntity[]>();
    return res;
  }

  static async getCartItems():Promise<ItemEntity[]> {
    const res = await agent.get(`${HOST}/cart`).json<ItemEntity[]>();
    return res;
  }

  static async getFavItems():Promise<ItemEntity[]> {
    const res = await agent.get(`${HOST}/wishlist`).json<ItemEntity[]>();
    return res;
  }

  static async getItem(id:string): Promise<ItemEntity>{
    const res = await agent.get(`${HOST}/item/${id}`).json<ItemEntity>();
    return res;  
  }

  static async signIn(body: { email: string, password: string }): Promise<UserEntity>{
    const res = await agent.post(`${HOST}/login`, {
      json: body,
    }).json<UserEntity>();
    return res;
  }

  static async signUp(body: { email: string, password: string }) {
    await agent.post(`${HOST}/register`, {
      json: body,
    });
  }

  static async signOut() {
    await agent.post(`${HOST}/logout`);
  }

  static async getConstructor(): Promise<ItemEntity[]>{
    const res = await agent.get(`${HOST}/constructor`).json<ItemEntity[]>();
    return res;
  }

  static async addToCart(body: {item_id:string, item_type:string, quantity:number}) {
    await agent.post(`${HOST}/cart`, {
      json: body,
    }); 
  }

  static async removeFromCart(id: string) {
    await agent.delete(`${HOST}/cart`, {
      json: {item_id: id},
    }); 
  }

  static async addToFav(body: {item_id:string, item_type:string, quantity:number}) {
    await agent.post(`${HOST}/wishlist`, {
      json: body,
    }); 
  }

  static async removeFromFav(id: string) {
    await agent.delete(`${HOST}/wishlist`, {
      json: {item_id: id},
    }); 
  }
}