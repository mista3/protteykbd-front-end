import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CartItem } from '@/components';
import { itemStore } from '@/stores';

import './CartPage.scss';
import { Typography } from '@mui/material';

export const CartPage = observer(() => {
  useEffect(() => {
    itemStore.fetchCartItems();
  }, [])

  return (
    <div className='page cart-page'>
      {itemStore.cartItems.length?itemStore.cartItems.map((item) => (
        <CartItem key={Math.random()} {...item} />
      )):<Typography variant='h4'>Нет данных</Typography>}
    </div>
  );
});
