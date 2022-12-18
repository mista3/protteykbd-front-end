import { observer } from 'mobx-react-lite';
import { ItemRow } from '@/components';

import './MainPage.scss';

export const MainPage = observer(() => {
  return (
    <div className='page main-page'>
      <ItemRow title='Готовые сборки' />
      <ItemRow title='Кейкапы' />
      <ItemRow title='Свичи' />
    </div>
  );
});
