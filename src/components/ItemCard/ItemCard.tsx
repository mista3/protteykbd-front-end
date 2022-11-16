import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, Button, Card, CardActions, CardMedia, CardContent, IconButton } from '@mui/material';
import { AddShoppingCartRounded, FavoriteRounded, ShoppingCartCheckoutRounded } from '@mui/icons-material';
import { ItemEntity } from '@/entities';
import { ROUTES } from '@/routes';

import './ItemCard.scss';

export const ItemCard = observer(({ image, title, price, sale }: ItemEntity) => {
  const [isLiked, setLiked] = useState(false);
  const [isCart, setCart] = useState(false);

  const nav = useNavigate();

  return (
    <Card className='keyboard-card' elevation={1}>
      <CardMedia component='img' className='img' image={image} />
      <CardContent>
        <Typography variant='h6'>{title}</Typography>
        <Typography component='span' variant='h5'>
          {price.toLocaleString('ru')} ₽
        </Typography>
        {!!sale && (
          <Typography component='span' variant='h6' className='sale' color='text.secondary'>
            {sale.toLocaleString('ru')} ₽
          </Typography>
        )}
      </CardContent>
      <CardActions className='buttons'>
        <IconButton size='small' color={isLiked ? 'primary' : 'default'} onClick={() => setLiked(!isLiked)}>
          <FavoriteRounded />
        </IconButton>
        <IconButton
          size='small'
          color={isCart ? 'primary' : 'default'}
          onClick={() => {
            if (isCart) nav(ROUTES.CART);
            setCart(true);
          }}
        >
          {isCart ? <ShoppingCartCheckoutRounded /> : <AddShoppingCartRounded />}
        </IconButton>
        <Button size='small'>Заказать</Button>
      </CardActions>
    </Card>
  );
});
