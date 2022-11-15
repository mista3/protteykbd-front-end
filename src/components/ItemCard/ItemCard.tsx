import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, Button, Card, CardActions, CardMedia, CardContent } from '@mui/material';
import { AddShoppingCartRounded } from '@mui/icons-material';
import { ItemEntity } from '@/entities';

import './ItemCard.scss';

export const ItemCard = observer(({ image, title, description, price }: ItemEntity) => {
  const navigate = useNavigate();
  return (
    <Card className='keyboard-card' elevation={1}>
      <CardMedia component='img' className='img' image={image} />
      <div className='body'>
        <CardContent className='content'>
          <Typography component='div' variant='h6'>
            {title}
          </Typography>
          <Typography variant='subtitle2' color='text.secondary' component='div' className='description'>
            {description.split('\n').map((value) => (
              <>
                {value}
                <br />
              </>
            ))}
          </Typography>
        </CardContent>
        <CardActions className='buttons'>
          <Button size='small'>
            <AddShoppingCartRounded />
          </Button>
          <Button size='small'>Заказать</Button>
        </CardActions>
      </div>
    </Card>
  );
});
