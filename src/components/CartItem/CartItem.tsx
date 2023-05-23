import { ItemEntity } from '@/entities';
import { DeleteRounded } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material'
import { Image } from 'antd';
import { itemStore } from '@/stores';

import './CartItem.scss';

export const CartItem = ({ image, name, price, id, quantity }: ItemEntity) => {
  return <Card elevation={1} className='cart-item'>
    <Image src={`https://ik.imagekit.io/xiultnofr/${image}.jpg`} className='item-image' />
    <Box className='content-box'>
      <CardContent className='item-content'>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='caption' className='quantity'>Количество: {quantity}</Typography><br/>
        <Typography component='span' variant='h5'>
          {(price).toLocaleString('ru')} ₽
        </Typography>
      </CardContent>
      <CardActions className='buttons'>
        <IconButton size='small' onClick={()=>{itemStore.removeCartItem(id)}}>
          <DeleteRounded />
        </IconButton>
        <Button size='small'>Заказать</Button>
      </CardActions>
    </Box>
  </Card>
}