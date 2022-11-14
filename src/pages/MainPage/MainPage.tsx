import { ItemCard } from '@/components';
import { ItemEntity } from '@/entities';
import { observer } from 'mobx-react-lite';
import './MainPage.scss';

const items: ItemEntity[] = [
  {
    id: 0,
    image: 'src/images/black-white.jpg',
    title: 'Black and White',
    description:
      'Свичи: Geteron full milky yellow\nКейкапы: PBT milk themed\nПлата: GK61 60% hot swap\nКорпус: GH60 алюминиевый\nСтабы: PCB mount',
    price: 10000,
  },
  {
    id: 1,
    image: 'src/images/milky-honey.jpg',
    title: 'Milky Honey',
    description:
      'Свичи: Geteron full milky yellow\nКейкапы: PBT milk themed\nПлата: GK61 60% hot swap\nКорпус: GH60 алюминиевый\nСтабы: PCB mount',
    price: 10000,
  },
  {
    id: 2,
    image: 'src/images/white-tester.jpg',
    title: 'White Tester',
    description:
      'Свичи: Geteron full milky yellow\nКейкапы: PBT milk themed\nПлата: GK61 60% hot swap\nКорпус: GH60 алюминиевый\nСтабы: PCB mount',
    price: 10000,
  },
];

export const MainPage = observer(() => {
  return (
    <div className='page main-page'>
      <div className='keyboards'>
        {[...items, ...items, ...items, ...items, ...items].map((item) => (
          <ItemCard key={Math.random()} {...item} />
        ))}
      </div>
    </div>
  );
});
