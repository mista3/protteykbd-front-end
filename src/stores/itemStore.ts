import { makeAutoObservable } from 'mobx';
import { ItemEntity } from '@/entities';

class ItemStore {
  private _items: ItemEntity[] = [
    {
      id: 0,
      image: 'src/images/black-white.jpg',
      title: 'Клавиатура Black and White',
      description:
        'Свичи: Geteron full milky yellow\nКейкапы: PBT milk themed\nПлата: GK61 60% hot swap\nКорпус: GH60 алюминиевый\nСтабы: PCB mount',
      price: 12000,
    },
    {
      id: 1,
      image: 'src/images/milky-honey.jpg',
      title: 'Клавиатура Milky Honey',
      description:
        'Свичи: Geteron full milky yellow\nКейкапы: PBT milk themed\nПлата: GK61 60% hot swap\nКорпус: GH60 алюминиевый\nСтабы: PCB mount',
      price: 10000,
      sale: 12000,
    },
    {
      id: 2,
      image: 'src/images/white-tester.jpg',
      title: 'Клавиатура White Tester 65%',
      description:
        'Свичи: Geteron full milky yellow\nКейкапы: PBT milk themed\nПлата: GK61 60% hot swap\nКорпус: GH60 алюминиевый\nСтабы: PCB mount',
      price: 6000,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get items() {
    return [...this._items, ...this._items, ...this._items, ...this._items];
  }
}

export const itemStore = new ItemStore();
