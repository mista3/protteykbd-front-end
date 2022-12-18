import { observer } from 'mobx-react-lite';
import { Slide } from 'react-slideshow-image';
import { Typography } from '@mui/material';
import { ItemRow } from '@/components';

import './MainPage.scss';

const images = ['src/images/black-white.jpg', 'src/images/milky-honey.jpg', 'src/images/white-tester.jpg'];

export const MainPage = observer(() => {
  return (
    <div className='page main-page'>
      <div className='slide-wrapper'>
        <Slide indicators slidesToShow={2} slidesToScroll={2} arrows={false}>
          {images.map((image) => (
            <div className='each-slide-effect'>
              <div style={{ backgroundImage: `url(${image})` }} />
            </div>
          ))}
        </Slide>
        <div className='nav'>
          <Typography variant='h5'>Готовые сборки</Typography>
          <Typography variant='h5'>Кейкапы</Typography>
          <Typography variant='h5'>Свичи</Typography>
        </div>
      </div>
      <ItemRow title='Готовые сборки' />
      <ItemRow title='Кейкапы' />
      <ItemRow title='Свичи' />
    </div>
  );
});
