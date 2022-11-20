import { CartInfo, Items } from '@/components';
import { observer } from 'mobx-react-lite';

import './CartPage.scss';

export const CartPage = observer(() => {
  return (
    <div className='page cart-page'>
      <Items />
      <CartInfo />
    </div>
  );
});
