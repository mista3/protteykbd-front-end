import { TextField } from '@mui/material';
import { observer } from 'mobx-react-lite';

import './Payment.scss';

export const Payment = observer(() => {
  return (
    <div className='payment'>
      <TextField label='Почта' helperText='На почту придет чек об оплате' fullWidth required />
      <TextField multiline label='Комментарий' fullWidth />
    </div>
  );
});