import { observer } from 'mobx-react-lite';
import { ItemCard, Payment } from '@/components';

import './OrderPage.scss';

export const OrderPage = observer(() => {
  return (
    <div className='page order-page'>
      {/* <ItemCard /> */}
      <Payment />
    </div>
  );
});
