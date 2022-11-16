import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, Button, Card, CardActions, CardMedia, CardContent, IconButton } from '@mui/material';
import { AddShoppingCartRounded, FavoriteRounded, ShoppingCartCheckoutRounded } from '@mui/icons-material';
import { ItemEntity } from '@/entities';
import { routes } from '@/routes';

import './ItemCard.scss';

export const ItemCard = observer(({ image, title, description, price }: ItemEntity) => {
  const [isLiked, setLiked] = useState(false);
  const [isCart, setCart] = useState(false);

  const nav = useNavigate();

  return (
    <Card className='keyboard-card' elevation={1}>
      <CardMedia component='img' className='img' image={image} />
      {/* <div className='title'> */}
      {/* <Typography component='div' variant='h6'>
            {title}
          </Typography> */}
      {/* </div> */}
      {/* <Typography variant='subtitle2' color='text.secondary' component='div' className='description'>
            {description.split('\n').map((value) => (
              <>
              {value}
              <br />
              </>
              ))}
            </Typography> */}
      <CardActions>
        <Typography component='div' variant='h6' className='price'>
          {price.toLocaleString('ru')} ₽
        </Typography>
        <IconButton size='small' color={isLiked ? 'primary' : 'default'} onClick={() => setLiked(!isLiked)}>
          <FavoriteRounded />
        </IconButton>
        <IconButton
          size='small'
          color={isCart ? 'primary' : 'default'}
          onClick={() => {
            if (isCart) nav(routes.cart);
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
