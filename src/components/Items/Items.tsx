import { ItemCard } from '@/components';
import { itemStore } from '@/stores';

import './Items.scss';

export const Items = () => {
  return (
    <div className='items'>
      {itemStore.items.map((item) => (
        <ItemCard key={Math.random()} {...item} />
      ))}
    </div>
  );
};
