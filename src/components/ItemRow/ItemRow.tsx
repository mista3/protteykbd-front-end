import { ItemCard } from '@/components';
import { itemStore } from '@/stores';
import { Typography } from '@mui/material';

import './ItemRow.scss';

interface ItemRowProps {
  title: string;
}

export const ItemRow = ({ title }: ItemRowProps) => {
  return (
    <div className='item-row'>
      <Typography variant='h3' textAlign='center'>
        {title}
      </Typography>
      <Typography variant='overline' textAlign='center'>
        Перейти
      </Typography>
      <div className='items'>
        {itemStore.items.map((item) => (
          <ItemCard key={Math.random()} {...item} />
        ))}
      </div>
    </div>
  );
};
