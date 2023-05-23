import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Image } from 'antd';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  styled,
  tooltipClasses, 
  TooltipProps
} from '@mui/material';
import {
  AddShoppingCartRounded,
  FavoriteRounded,
  ShoppingCartCheckoutRounded,
} from '@mui/icons-material';
import { ItemEntity } from '@/entities';
import { ROUTES } from '@/routes';
import { api } from '@/services';
import { itemStore } from '@/stores';

import './ItemCard.scss';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}));

export const ItemCard = observer(({ image, name, price, sale, id, quantity }: ItemEntity) => {
  const [isLiked, setLiked] = useState(false);
  const [isCart, setCart] = useState(false);

  const nav = useNavigate();

  const onClick = () => {
    nav(`${ROUTES.ITEM}/${id}`);
  };
  
  useEffect(() => {
    setCart(!!itemStore.cartItems.find((cartItem) => cartItem.id === id));
  }
    , [itemStore.cartItems])
  
  useEffect(() => {
    setLiked(!!itemStore.favItems.find((favItem) => favItem.id === id));
  }
  ,[itemStore.favItems])

  const onCartClick = async () => {
    if (isCart) nav(ROUTES.CART);
    else { 
      await api.addToCart({item_id: id, item_type: 'keyboard', quantity})
      setCart(true);
    }
  }

  const onFavClick = async () => {
    if (isLiked) { 
      itemStore.removeFavItem(id);
    } else {
      await api.addToFav({item_id: id, item_type: 'keyboard', quantity});
      setLiked(true);
    }
  }

  return (
    <Card className='keyboard-card' elevation={1}>
      <Image
        className='keyboard-image'
        src={`https://ik.imagekit.io/xiultnofr/tr:h-640,w-640/${image}.jpg`}
        onClick={onClick}
        preview={false}
      />
      <CardContent>
        <LightTooltip  title={name} arrow placement="top" className='keyboard-tooltip'>
          <Typography variant='body1' className='keyboard-name'>{name}</Typography>
        </LightTooltip>
        <Typography component='span' variant='h6'>
          {price.toLocaleString('ru')} ₽
        </Typography>
        {!!sale && (
          <Typography component='span' variant='h6' className='sale' color='text.secondary'>
            {sale.toLocaleString('ru')} ₽
          </Typography>
        )}
      </CardContent>
      <CardActions className='buttons'>
        <IconButton
          size='small'
          color={isLiked ? 'primary' : 'default'}
          onClick={onFavClick}
        >
          <FavoriteRounded />
        </IconButton>
        <IconButton
          size='small'
          color={isCart ? 'primary' : 'default'}
          onClick={onCartClick}
        >
          {isCart ? <ShoppingCartCheckoutRounded /> : <AddShoppingCartRounded />}
        </IconButton>
        <Button size='small'>Заказать</Button>
      </CardActions>
    </Card>
  );
});
