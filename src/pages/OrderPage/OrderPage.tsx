import { observer } from 'mobx-react-lite';
import { KeyboardCard, Payment } from '@/components';

import './OrderPage.scss';

export const OrderPage = observer(() => {
  return (
    <div className='page order-page'>
      <KeyboardCard noButton />
      <Payment />
    </div>
  );
});
