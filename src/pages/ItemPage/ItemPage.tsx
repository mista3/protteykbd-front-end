import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import image from '@/images/black-white.jpg';
import { useImgZoom } from '@/hooks';

import './ItemPage.scss';

export const ItemPage = () => {
  const [bdPos, onMouseMove] = useImgZoom();
  const { id } = useParams();

  return (
    <div className='item-page page'>
      <Card elevation={1}>
        <figure
          onMouseMove={onMouseMove}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: bdPos,
          }}
        >
          <CardMedia component='img' className='img' image={image} />
        </figure>
        <CardContent>
          <Typography variant='h6'>Клавиатура Black and White [{id}]</Typography>
          <Typography component='span' variant='h5'>
            {(10000).toLocaleString('ru')} ₽
          </Typography>
          {!!12000 && (
            <Typography component='span' variant='h6' className='sale' color='text.secondary'>
              {(12000).toLocaleString('ru')} ₽
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
