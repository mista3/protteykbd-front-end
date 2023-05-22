import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ItemCard } from '@/components';
import { itemStore } from '@/stores';

import './MainPage.scss';

export const MainPage = observer(() => {

  useEffect(() => {
    itemStore.fetchItems()
  }, []);

  return (
    <div className='page main-page'>
      <div className="items">
        {itemStore.items.map((item) => (
          <ItemCard key={Math.random()} {...item} />
        ))}
        </div>
    </div>
  );
});
