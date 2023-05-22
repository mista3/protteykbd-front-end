import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Image } from 'antd';
import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { itemStore } from '@/stores';

import './ItemPage.scss';
import { AddShoppingCartRounded, FavoriteRounded } from '@mui/icons-material';

export const ItemPage = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    if (id) itemStore.fetchItem(id)
  }, [])

  if (!itemStore.item) return null;

  const { description, name, image, price, quantity} = itemStore.item;

  return (
    <div className='item-page page'>
      <Card elevation={1} className='item-card'>
        <Image src={`https://ik.imagekit.io/xiultnofr/${image}.jpg`} className='item-image' />
        <Box className='content-box'>
          <CardContent className='item-content'>
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='caption' className='quantity'>Количество: {quantity}</Typography><br/>
            <Typography component='span' variant='h5'>
              {(price).toLocaleString('ru')} ₽
            </Typography>
            <div className='divider' />
            <div className='description'>
              {description.split('\n').map((segment) => 
                <Typography variant='body1' className='description-item'>
                  {segment}
                </Typography>
              )}
            </div>
          </CardContent>
          <CardActions className='buttons'>
            <IconButton size='small'>
              <FavoriteRounded />
            </IconButton>
            <IconButton
              size='small'
              onClick={() => {}}
            >
              <AddShoppingCartRounded />
            </IconButton>
            <Button size='small'>Заказать</Button>
          </CardActions>
        </Box>
      </Card>
    </div>
  );
});
