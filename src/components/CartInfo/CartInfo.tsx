import { observer } from 'mobx-react-lite';
import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';

import './CartInfo.scss';
import { itemStore } from '@/stores';

export const CartInfo = observer(() => {
  return (
    <Card className='cart-info' elevation={1}>
      <CardContent>
        <Typography variant='body1'>Сумма: {itemStore.totalPrice}р</Typography>
        <Typography variant='body1'>Доставка: 500р</Typography>
        <Divider />
        <Typography variant='h6'>Итого: {itemStore.totalPrice+500}р</Typography>
      </CardContent>
      <CardActions>
        <Button>Перейти к оплате</Button>
      </CardActions>
    </Card>
  );
});
