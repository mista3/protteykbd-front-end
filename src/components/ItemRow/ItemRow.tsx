import { ItemCard } from '@/components';
import { itemStore } from '@/stores';
import { Typography } from '@mui/material';
import { ScrollContainer } from 'react-indiana-drag-scroll';

import 'react-indiana-drag-scroll/dist/style.css';
import './ItemRow.scss';

interface ItemRowProps {
  title: string;
}

export const ItemRow = ({ title }: ItemRowProps) => {
  return (
    <div className='item-row'>
      <Typography variant='h4' textTransform='uppercase' textAlign='center'>
        {title}
      </Typography>
      <Typography variant='overline' textAlign='center'>
        Перейти
      </Typography>
      <ScrollContainer className='items'>
        <div className='space' />
        {itemStore.items.map((item) => (
          <ItemCard key={Math.random()} {...item} />
        ))}
        <div className='space' />
      </ScrollContainer>
    </div>
  );
};
