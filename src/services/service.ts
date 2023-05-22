import { ItemEntity } from '@/entities';
import { agent } from './agent';

const HOST = 'http://127.0.0.1:5000'

export class api {
  static async getItems():Promise<ItemEntity[]> {
    const res = await agent.get(`${HOST}/items`)
    return res.json();
  }

  static async getItem(id:string): Promise<ItemEntity>{
    const res = await agent.get(`${HOST}/item/${id}`)
    return res.json();  
  }
}