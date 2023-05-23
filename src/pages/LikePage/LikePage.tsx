import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { ItemCard } from '@/components';
import { itemStore } from '@/stores';

import './LikePage.scss';

export const LikePage = observer(() => {
  useEffect(() => {
    itemStore.fetchFavItems();
  }, [])
  
  return <div className='page like-page'>
    <div className="items">
      {itemStore.favItems.length?itemStore.favItems.map((item) => (
        <ItemCard key={Math.random()} {...item} />
      )):<Typography variant='h4'>Нет данных</Typography>}
    </div>
  </div>;
});
