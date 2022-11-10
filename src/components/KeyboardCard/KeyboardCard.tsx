import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography, Button } from '@mui/material';

import './KeyboardCard.scss';

interface Props {
  imageLeft?: boolean;
  noButton?: boolean;
}

export const KeyboardCard = observer(({ imageLeft, noButton }: Props) => {
  const navigate = useNavigate();
  return (
    <div className='keyboard-card' style={{ flexDirection: imageLeft ? 'row-reverse' : 'row' }}>
      <div className='image-placeholder'></div>
      <div className='content'>
        <Typography variant='h4' fontWeight='bold'>
          Название
        </Typography>
        <Typography className='description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero modi accusamus est earum qui praesentium
          voluptatibus, similique perspiciatis nulla repellendus voluptas vel molestiae dolor iusto quasi atque
          quibusdam deleniti? Aut expedita ratione sit natus totam laboriosam velit. Quo harum ipsum commodi dolores
          veniam! Natus nemo nisi distinctio quam eaque nulla harum veniam dignissimos, aliquid quaerat temporibus
          corporis eveniet fugit non ipsam odio dicta voluptate est commodi id rem veritatis repellat quo.
        </Typography>
        {!noButton && (
          <Button variant='contained' onClick={() => navigate('/order')} disableElevation>
            Оформить заказ
          </Button>
        )}
      </div>
    </div>
  );
});
