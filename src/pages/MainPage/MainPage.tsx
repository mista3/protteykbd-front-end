import { observer } from 'mobx-react-lite';
import { Slide } from 'react-slideshow-image';
import { Link, Typography } from '@mui/material';
import { ItemRow } from '@/components';

import './MainPage.scss';
import { LinkRounded } from '@mui/icons-material';

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
          <div>
            <LinkRounded className='anchor' />
            <Link variant='h5' textTransform='uppercase' href='#Готовые сборки' underline='hover'>
              Готовые сборки
            </Link>
          </div>
          <div>
            <LinkRounded className='anchor' />
            <Link variant='h5' textTransform='uppercase' href='#Кейкапы' underline='hover'>
              Кейкапы
            </Link>
          </div>
          <div>
            <LinkRounded className='anchor' />
            <Link variant='h5' textTransform='uppercase' href='#Свичи' underline='hover'>
              Свичи
            </Link>
          </div>
        </div>
      </div>
      <div id='Готовые сборки'>
        <ItemRow title='Готовые сборки' />
      </div>
      <div id='Кейкапы'>
        <ItemRow title='Кейкапы' />
      </div>
      <div id='Свичи'>
        <ItemRow title='Свичи' />
      </div>
    </div>
  );
});
