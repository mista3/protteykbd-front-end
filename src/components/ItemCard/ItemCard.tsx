import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Image } from 'antd';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Checkbox,
  Tooltip,
  styled,
  tooltipClasses, 
  TooltipProps
} from '@mui/material';
import {
  AddShoppingCartRounded,
  FavoriteRounded,
  RemoveShoppingCartRounded,
  ShoppingCartCheckoutRounded,
} from '@mui/icons-material';
import { ItemEntity } from '@/entities';
import { ROUTES } from '@/routes';

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

export const ItemCard = observer(({ image, name, price, sale, id }: ItemEntity) => {
  const [isLiked, setLiked] = useState(false);
  const [isCart, setCart] = useState(false);

  const location = useLocation();

  const nav = useNavigate();

  const onClick = () => {
    nav(`${ROUTES.ITEM}/${id}`);
  };

  return (
    <Card className='keyboard-card' elevation={1}>
      <Image
        className='keyboard-image'
        src={`https://ik.imagekit.io/xiultnofr/tr:h-640,w-640/${image}.jpg`}
        onClick={onClick}
        preview={false}
        placeholder={<div className='image-placeholder'/>}
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
        <IconButton size='small' color={isLiked ? 'primary' : 'default'} onClick={() => setLiked(!isLiked)}>
          <FavoriteRounded />
        </IconButton>
        {location.pathname === ROUTES.CART ? (
          <>
            <IconButton
              size='small'
              onClick={() => {
                //remove from cart
              }}
            >
              {<RemoveShoppingCartRounded />}
            </IconButton>
            <Checkbox size='small' />
          </>
        ) : (
          <>
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
          </>
        )}
      </CardActions>
    </Card>
  );
});
