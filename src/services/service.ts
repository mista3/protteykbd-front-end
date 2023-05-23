import { ItemEntity } from '@/entities';
import { agent } from './agent';

const HOST = 'http://127.0.0.1:5000'

export class api {
  static async getItems():Promise<ItemEntity[]> {
    const res = await agent.get(`${HOST}/items`).json<ItemEntity[]>();
    return res;
  }

  static async getItem(id:string): Promise<ItemEntity>{
    const res = await agent.get(`${HOST}/item/${id}`).json<ItemEntity>();
    return res;  
  }

  static async signIn(body: { email: string, password: string }): Promise<UserEntity>{
    const res = await agent.post(`${HOST}/login`, {
      json: body,
      credentials: 'include',
    }).json<UserEntity>();
    return res;
  }

  static async signUp(body: { email: string, password: string }) {
    await agent.post(`${HOST}/register`, {
      json: body,
    });
  }

  static async signOut() {
    await agent.post(`${HOST}/logout`, {
      credentials: 'include',
    });
  }

  static async getConstructor() {
    const res = await agent.get(`${HOST}/constructor`, {
      credentials: 'include',
    }).json();
    console.log(res);
  }

  static async getCart() {
    const res = await agent.get(`${HOST}/cart`, {
      credentials: 'include',
    }).json();
    console.log(res);
  }
}