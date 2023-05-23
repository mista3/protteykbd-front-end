import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CartInfo } from '@/components';
import { api } from '@/services';

import './CartPage.scss';

export const CartPage = observer(() => {
  useEffect(() => {
    api.getCart();
  }, [])

  return (
    <div className='page cart-page'>
      {/* <Items /> */}
      <CartInfo />
    </div>
  );
});
